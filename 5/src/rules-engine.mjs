/**
 * Ellie Life Enterprise — Motor de Reglas Deterministas y Patrones
 * Analiza severidad, posibles duplicados y elabora borradores para moderadores.
 */

export function calculateHazardLevel({ type, description = '', people_needing_help = false }) {
  const text = `${type} ${description}`.toLowerCase();

  // Crítico: riesgo inminente de vida o personas atrapadas
  if (
    /urgente|peligro.*vida|niño.*atrap|ancian.*atrap|riesgo.*muerte|salvar|electrocut/.test(text) ||
    (people_needing_help && /atrapad|aislad|inundad|sin.*salida/.test(text))
  ) {
    return 'critico';
  }

  // Alto: personas necesitando ayuda, desbordes o vías principales cortadas
  if (
    people_needing_help ||
    /persona.*ayuda|desborde|puente.*colaps|vivienda.*inund|colapso|herid|ambulancia/.test(text)
  ) {
    return 'alto';
  }

  // Medio: vías bloqueadas, aniegos moderados, viviendas con filtración
  if (/via.*bloqueada|aniego|corte.*luz|agua.*empozada|quebrada.*activa/.test(text)) {
    return 'medio';
  }

  return 'bajo';
}

/**
 * Detecta si un nuevo reporte podría ser duplicado de reportes existentes
 * según sector, tipo y proximidad temporal (últimas 24 horas).
 */
export function findPotentialDuplicates(newReport, existingReports = []) {
  const matches = [];
  const newType = String(newReport.type || '').toLowerCase();
  const newSector = String(newReport.sector || newReport.district || '').toLowerCase();
  const now = Date.now();

  for (const item of existingReports) {
    if (item.id === newReport.id || item.public_code === newReport.public_code) continue;

    const itemType = String(item.type || '').toLowerCase();
    const itemSector = String(item.sector || item.district || '').toLowerCase();
    const itemTime = new Date(item.created_at || now).getTime();
    const hoursDiff = Math.abs(now - itemTime) / (1000 * 60 * 60);

    // Mismo sector y tipo en menos de 12 horas
    if (newType === itemType && newSector === itemSector && hoursDiff <= 12) {
      matches.push({
        incident_id: item.id,
        public_code: item.public_code,
        similarity_reason: `Mismo tipo (${newType}) y sector (${newSector}) reportado hace ${Math.round(hoursDiff)}h`,
        time_difference_hours: Math.round(hoursDiff * 10) / 10
      });
    }
  }

  return matches;
}

/**
 * Prepara un borrador de alerta preventiva para revisión y aprobación humana.
 * NUNCA envía una alerta directamente.
 */
export function prepareAlertDraft({
  incident,
  sector = 'Piura',
  radius_m = 2000,
  moderator_name = 'Revisor Comunitario'
}) {
  const safeRadius = Math.min(Math.max(Number(radius_m) || 2000, 100), 2000);
  const typeMap = {
    inundacion: 'Aniego o inundación pluvial',
    desborde_rio: 'Alerta por incremento de caudal / desborde',
    via_bloqueada: 'Precaución por vía con tránsito interrumpido',
    vivienda_afectada: 'Afectación en viviendas por lluvias',
    persona_necesita_ayuda: 'Solicitud de asistencia comunitaria',
    otro: 'Incidencia preventiva reportada'
  };

  const title = `Aviso preventivo: ${typeMap[incident.type] || 'Atención en tu zona'} (${incident.district || sector})`;
  const body = `Información en revisión en sector ${incident.sector || sector}. Radio estimado ${safeRadius}m. Mantén la calma, revisa el croquis de evacuación y consulta fuentes oficiales INDECI/COEN.`;

  return {
    incident_id: incident.id,
    public_code: incident.public_code,
    title: title.slice(0, 100),
    body: body.slice(0, 320),
    hazard_level: incident.hazard_level || 'medio',
    status: 'borrador', // Estado inicial OBLIGATORIO
    radius_m: safeRadius,
    prepared_at: new Date().toISOString(),
    expires_at: new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString(), // 2 horas
    human_approval_required: true,
    safety_rule: 'Este borrador requiere aprobación humana explícita antes de programarse o enviarse.'
  };
}
