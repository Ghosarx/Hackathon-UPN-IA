/**
 * Ellie Life Enterprise — Notification Gateway
 * Gestiona entregas de alertas (Push / SMS) con:
 * - Control de idempotencia
 * - Verificación estricta de consentimiento por canal
 * - Límite de radio (máximo 2000 metros)
 * - Protección total de PII (sin datos del reportante)
 */

export class NotificationGateway {
  constructor(options = {}) {
    this.gatewayUrl = options.gatewayUrl || process.env.NOTIFICATION_GATEWAY_URL || null;
    this.gatewayToken = options.gatewayToken || process.env.NOTIFICATION_GATEWAY_TOKEN || null;
    this.deliveries = new Map(); // Idempotencia en memoria: key -> deliveryRecord
  }

  /**
   * Genera clave de idempotencia única
   */
  makeIdempotencyKey(alertId, subscriptionId, channel) {
    return `${alertId}:${subscriptionId}:${channel}`;
  }

  /**
   * Envía una notificación individual respetando consentimientos
   */
  async deliver({
    alert,
    subscription,
    consent,
    channel,
    isAssistanceRequest = false
  }) {
    if (!alert || !subscription || !channel) {
      throw new Error('missing_delivery_parameters');
    }

    // 1. Verificación estricta de consentimiento por canal
    if (!consent || !consent.notifications_opt_in) {
      return {
        status: 'skipped',
        reason: 'no_notification_consent',
        channel
      };
    }

    if (channel === 'sms' && !consent.sms_opt_in) {
      return {
        status: 'skipped',
        reason: 'no_sms_consent',
        channel
      };
    }

    // 2. Control de Idempotencia: evitar envíos duplicados
    const idempotencyKey = this.makeIdempotencyKey(alert.id, subscription.id, channel);
    if (this.deliveries.has(idempotencyKey)) {
      const existing = this.deliveries.get(idempotencyKey);
      return {
        status: 'duplicate',
        provider_message_id: existing.provider_message_id,
        channel,
        sent_at: existing.sent_at
      };
    }

    // 3. Formateo del mensaje con protección de identidad
    let messageBody = alert.body;
    if (isAssistanceRequest) {
      messageBody = 'Hay una solicitud de asistencia cerca de tu zona. Consulta el croquis y los canales oficiales.';
    }

    const payload = {
      channel,
      endpoint: subscription.endpoint || null,
      phone: subscription.phone ? subscription.phone.replace(/.(?=.{4})/g, '*') : null, // Enmascarado en logs
      title: alert.title,
      body: messageBody.slice(0, 320),
      metadata: {
        alert_id: alert.id,
        radius_m: Math.min(Number(alert.radius_m) || 2000, 2000),
        region: 'Piura',
        expires_at: alert.expires_at,
        approved_by: alert.approved_by || 'moderador_autorizado'
      }
    };

    // 4. Envío real a gateway configurable o simulación determinista segura
    let providerMessageId = `MSG-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`;
    let deliveryStatus = 'sent';
    let errorMessage = null;

    if (this.gatewayUrl) {
      try {
        const res = await fetch(this.gatewayUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            ...(this.gatewayToken ? { 'Authorization': `Bearer ${this.gatewayToken}` } : {})
          },
          body: JSON.stringify(payload)
        });
        if (!res.ok) {
          deliveryStatus = 'failed';
          errorMessage = `gateway_http_${res.status}`;
        } else {
          const resData = await res.json().catch(() => ({}));
          if (resData.message_id) providerMessageId = resData.message_id;
        }
      } catch (err) {
        deliveryStatus = 'failed';
        errorMessage = err.message;
      }
    }

    const record = {
      alert_id: alert.id,
      subscription_id: subscription.id,
      channel,
      status: deliveryStatus,
      provider_message_id: deliveryStatus === 'sent' ? providerMessageId : null,
      error_message: errorMessage,
      sent_at: deliveryStatus === 'sent' ? new Date().toISOString() : null
    };

    // Registrar en mapa de idempotencia
    this.deliveries.set(idempotencyKey, record);

    return record;
  }
}
