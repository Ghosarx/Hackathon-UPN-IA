/**
 * Ellie Life Enterprise — Almacén de Datos y Geo-cálculos (Compatible Supabase PostGIS)
 * Implementa almacenamiento en memoria, persistencia local y funciones geoespaciales.
 */

import { randomUUID } from 'node:crypto';

// Fórmulas geodésicas Haversine para emular ST_Distance y ST_DWithin de PostGIS
export function calculateDistanceMeters(lat1, lon1, lat2, lon2) {
  const R = 6371000; // Radio de la Tierra en metros
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Math.round(R * c);
}

export class DataStore {
  constructor() {
    this.profiles = new Map();
    this.consent_records = new Map();
    this.incidents = new Map();
    this.authorities = new Map();
    this.subscriptions = new Map();
    this.alerts = new Map();
    this.alert_deliveries = new Map();
    this.audit_events = [];

    this.initDefaultAuthorities();
    this.initSyntheticSeedData();
  }

  initDefaultAuthorities() {
    const list = [
      { name: 'Policía Nacional del Perú', category: 'Emergencias', phone: '105', region: 'Piura', verified: false, notes: 'Verificar vigencia antes de producción' },
      { name: 'Comisaría de Piura', category: 'Policía', phone: '307641', region: 'Piura', verified: false, notes: 'Número proporcionado por el organizador' },
      { name: 'Comisaría de Piura - celular', category: 'Policía', phone: '980121525', region: 'Piura', verified: false, notes: 'Número proporcionado por el organizador' },
      { name: 'Radio Patrulla', category: 'Policía', phone: '957881252', region: 'Piura', verified: false, notes: 'Número proporcionado por el organizador' },
      { name: 'Bomberos', category: 'Emergencias', phone: '116', region: 'Piura', verified: false, notes: 'Verificar vigencia antes de producción' },
      { name: 'Bomberos Santa Rosa N° 79', category: 'Bomberos', phone: '(073) 355555', region: 'Piura', verified: false, notes: 'Número proporcionado por el organizador' },
      { name: 'SAMU Piura', category: 'Salud', phone: '106', region: 'Piura', verified: false, notes: 'Verificar vigencia antes de producción' },
      { name: 'SAMU Piura - celular 1', category: 'Salud', phone: '989174242', region: 'Piura', verified: false, notes: 'Número proporcionado por el organizador' },
      { name: 'SAMU Piura - celular 2', category: 'Salud', phone: '989174238', region: 'Piura', verified: false, notes: 'Número proporcionado por el organizador' },
      { name: 'Defensa Civil / INDECI', category: 'Gestión de riesgo', phone: '115', region: 'Piura', verified: false, notes: 'Verificar vigencia antes de producción' },
      { name: 'Defensa Civil / Gobierno Regional', category: 'Gestión de riesgo', phone: '(073) 284600', region: 'Piura', verified: false, notes: 'Verificar vigencia antes de producción' },
      { name: 'Línea 100', category: 'Protección', phone: '100', region: 'Piura', verified: false, notes: 'Verificar vigencia antes de producción' },
      { name: 'Serenazgo Piura', category: 'Seguridad ciudadana', phone: '980900384', region: 'Piura', verified: false, notes: 'Número proporcionado por el organizador' },
      { name: 'Serenazgo Piura', category: 'Seguridad ciudadana', phone: '(073) 302490', region: 'Piura', verified: false, notes: 'Número proporcionado por el organizador' },
      { name: 'Serenazgo 26 de Octubre', category: 'Seguridad ciudadana', phone: '966638769', region: 'Piura', verified: false, notes: 'Número proporcionado por el organizador' },
      { name: 'Hospital Santa Rosa', category: 'Salud', phone: '(073) 361509', region: 'Piura', verified: false, notes: 'Verificar vigencia antes de producción' },
      { name: 'Hospital Regional / José Cayetano Heredia', category: 'Salud', phone: '(073) 287970', region: 'Piura', verified: false, notes: 'Verificar vigencia antes de producción' },
      { name: 'Hospital Regional / José Cayetano Heredia', category: 'Salud', phone: '(073) 321001', region: 'Piura', verified: false, notes: 'Verificar vigencia antes de producción' },
      { name: 'EsSalud Hospital Zonal', category: 'Salud', phone: '(073) 321381', region: 'Piura', verified: false, notes: 'Verificar vigencia antes de producción' },
      { name: 'Orientación en Salud MINSA', category: 'Salud', phone: '113', region: 'Piura', verified: false, notes: 'Verificar vigencia antes de producción' },
      { name: 'Gobierno Regional de Piura', category: 'Autoridad regional', phone: '(073) 284600', region: 'Piura', verified: false, notes: 'Verificar vigencia antes de producción' }
    ];

    for (const auth of list) {
      const id = randomUUID();
      this.authorities.set(id, { id, ...auth, created_at: new Date().toISOString() });
    }
  }

  initSyntheticSeedData() {
    // Suscripciones de prueba en Piura Centro (aprox -5.1945, -80.6328)
    const demoConsent1 = {
      id: 'demo-consent-1',
      user_id: 'user-familia-1',
      consent_version: 'piura-v1',
      notifications_opt_in: true,
      location_opt_in: true,
      sms_opt_in: true,
      ai_processing_opt_in: true,
      granted_at: new Date().toISOString()
    };
    this.consent_records.set(demoConsent1.id, demoConsent1);

    const demoSub1 = {
      id: 'sub-piura-centro',
      user_id: 'user-familia-1',
      channel: 'push',
      endpoint: 'https://push.example.com/demo/familia-1',
      phone: '987654321',
      latitude: -5.1945,
      longitude: -80.6328,
      radius_m: 1500,
      district: 'Piura',
      active: true,
      consent_id: demoConsent1.id
    };
    this.subscriptions.set(demoSub1.id, demoSub1);

    const demoSubSms = {
      id: 'sub-piura-sms',
      user_id: 'user-familia-1',
      channel: 'sms',
      endpoint: null,
      phone: '987654321',
      latitude: -5.1945,
      longitude: -80.6328,
      radius_m: 2000,
      district: 'Piura',
      active: true,
      consent_id: demoConsent1.id
    };
    this.subscriptions.set(demoSubSms.id, demoSubSms);

    // Suscriptor sin consentimiento SMS
    const demoConsentNoSms = {
      id: 'demo-consent-no-sms',
      user_id: 'user-familia-2',
      consent_version: 'piura-v1',
      notifications_opt_in: true,
      location_opt_in: true,
      sms_opt_in: false, // NO SMS
      ai_processing_opt_in: true,
      granted_at: new Date().toISOString()
    };
    this.consent_records.set(demoConsentNoSms.id, demoConsentNoSms);

    const demoSubNoSms = {
      id: 'sub-piura-no-sms',
      user_id: 'user-familia-2',
      channel: 'sms',
      endpoint: null,
      phone: '981112233',
      latitude: -5.1950,
      longitude: -80.6330,
      radius_m: 2000,
      district: 'Piura',
      active: true,
      consent_id: demoConsentNoSms.id
    };
    this.subscriptions.set(demoSubNoSms.id, demoSubNoSms);

    // Incidentes sintéticos de demostración
    const seedIncidents = [
      {
        id: randomUUID(),
        public_code: 'REP-DEMO-01',
        type: 'desborde_rio',
        description: '[DEMO SINTÉTICO] Incremento rápido del caudal en Malecón Eguiguren. Filtración leve en vía pública.',
        district: 'Piura',
        sector: 'Malecón Eguiguren',
        latitude: -5.1955,
        longitude: -80.6280,
        location_precision_m: 500,
        location_shared: true,
        people_needing_help: false,
        synthetic: true,
        source: 'citizen',
        status: 'en_revision',
        hazard_level: 'medio',
        confidence: 0.85,
        created_at: new Date(Date.now() - 3600000).toISOString()
      },
      {
        id: randomUUID(),
        public_code: 'REP-DEMO-02',
        type: 'via_bloqueada',
        description: '[DEMO SINTÉTICO] Tránsito detenido por aniego pluvial severo cerca al Óvalo Grau.',
        district: 'Piura',
        sector: 'Óvalo Grau',
        latitude: -5.2010,
        longitude: -80.6340,
        location_precision_m: 500,
        location_shared: true,
        people_needing_help: false,
        synthetic: true,
        source: 'citizen',
        status: 'recibido',
        hazard_level: 'medio',
        confidence: 0.78,
        created_at: new Date(Date.now() - 7200000).toISOString()
      }
    ];

    for (const inc of seedIncidents) {
      this.incidents.set(inc.id, inc);
    }
  }

  // Emulación de función PostGIS find_nearby_subscribers
  findNearbySubscribers(lat, lon, radiusMeters = 2000) {
    const safeRadius = Math.min(Math.max(Number(radiusMeters) || 2000, 100), 2000);
    const results = [];

    for (const sub of this.subscriptions.values()) {
      if (!sub.active) continue;
      if (typeof sub.latitude !== 'number' || typeof sub.longitude !== 'number') continue;

      const consent = this.consent_records.get(sub.consent_id);
      if (!consent || !consent.notifications_opt_in) continue;
      if (sub.channel === 'sms' && !consent.sms_opt_in) continue;

      const dist = calculateDistanceMeters(lat, lon, sub.latitude, sub.longitude);
      if (dist <= safeRadius) {
        results.push({
          subscription_id: sub.id,
          user_id: sub.user_id,
          channel: sub.channel,
          endpoint: sub.endpoint,
          phone: sub.phone,
          distance_m: dist
        });
      }
    }

    return results.sort((a, b) => a.distance_m - b.distance_m);
  }

  addAuditEvent({ actor_id = null, event_type, entity_type, entity_id = null, metadata = {} }) {
    const evt = {
      id: randomUUID(),
      actor_id,
      event_type,
      entity_type,
      entity_id,
      metadata,
      created_at: new Date().toISOString()
    };
    this.audit_events.push(evt);
    return evt;
  }
}
