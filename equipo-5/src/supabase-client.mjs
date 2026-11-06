/**
 * Ellie Life Enterprise — Conector Seguro Supabase
 * Utilizado por el backend para persistir incidentes, suscripciones y auditoría.
 * NUNCA expone el service_role key al navegador.
 */

export class SupabaseBackendClient {
  constructor(options = {}) {
    this.url = (options.url || process.env.SUPABASE_URL || '').replace(/\/+$/, '');
    this.serviceRoleKey = options.serviceRoleKey || process.env.SUPABASE_SERVICE_ROLE_KEY || null;
    this.anonKey = options.anonKey || process.env.SUPABASE_ANON_KEY || null;
  }

  isConfigured() {
    return Boolean(this.url && (this.serviceRoleKey || this.anonKey));
  }

  async fetchRest(tableOrRpc, { method = 'GET', body = null, isRpc = false, prefer = 'return=representation' } = {}) {
    if (!this.isConfigured()) return null;

    const endpoint = isRpc
      ? `${this.url}/rest/v1/rpc/${tableOrRpc}`
      : `${this.url}/rest/v1/${tableOrRpc}`;

    const key = this.serviceRoleKey || this.anonKey;
    const headers = {
      'apikey': key,
      'Authorization': `Bearer ${key}`,
      'Content-Type': 'application/json',
      'Prefer': prefer
    };

    const res = await fetch(endpoint, {
      method,
      headers,
      body: body ? JSON.stringify(body) : undefined
    });

    if (!res.ok) {
      const errText = await res.text().catch(() => '');
      throw new Error(`supabase_error_${res.status}: ${errText}`);
    }

    return res.json().catch(() => null);
  }

  async insertIncident(incident) {
    return this.fetchRest('incidents', { method: 'POST', body: incident });
  }

  async insertAuditEvent(event) {
    return this.fetchRest('audit_events', { method: 'POST', body: event });
  }

  async findNearbySubscribers(lat, lon, radiusMeters) {
    return this.fetchRest('find_nearby_subscribers', {
      method: 'POST',
      isRpc: true,
      body: { p_lat: Number(lat), p_lon: Number(lon), p_radius_m: Number(radiusMeters) }
    });
  }
}
