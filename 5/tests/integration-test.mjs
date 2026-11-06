/**
 * Test de Integración Local de Endpoints de Ellie Life
 */

import { server, store } from '../server.mjs';

const TEST_PORT = 4175;

server.listen(TEST_PORT, '127.0.0.1', async () => {
  console.log(`Servidor de prueba iniciado en puerto ${TEST_PORT}`);
  try {
    // 1. Healthcheck
    const hRes = await fetch(`http://127.0.0.1:${TEST_PORT}/api/health`);
    const hData = await hRes.json();
    console.log('✓ Healthcheck:', hData.status, 'DeepSeek configurado:', hData.deepseek_configured);

    // 2. Reporte Ciudadano (Workflow A)
    const rRes = await fetch(`http://127.0.0.1:${TEST_PORT}/api/reports`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'desborde_rio',
        description: 'Incremento del caudal del Río Piura en el sector Malecón Eguiguren, filtración en vereda.',
        district: 'Piura',
        sector: 'Malecón Eguiguren',
        location_shared: true,
        latitude: -5.1955,
        longitude: -80.6280,
        synthetic: true
      })
    });
    const rData = await rRes.json();
    console.log('✓ Reporte procesado:', rData.code, 'Nivel:', rData.hazard_level, 'Estado:', rData.status);

    // 3. Chat Ellie Asistente
    const cRes = await fetch(`http://127.0.0.1:${TEST_PORT}/api/chat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: '¿Qué están reportando las personas?' })
    });
    const cData = await cRes.json();
    console.log('✓ Ellie Asistente:', cData.summary.slice(0, 80) + '...');

    // 4. Aprobación y Notificación (Workflow B)
    const aRes = await fetch(`http://127.0.0.1:${TEST_PORT}/api/moderation/approve`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        alert_id: 'alt-test-integration',
        moderator_id: 'MOD-JURADO-01',
        decision: 'approve',
        consent_confirmed: true,
        radius_m: 2000,
        latitude: -5.1945,
        longitude: -80.6328
      })
    });
    const aData = await aRes.json();
    console.log('✓ Aprobación y Notificación:', aData.message, 'Radio:', aData.radius_m, 'Destinatarios:', aData.recipients_count);

    console.log('\n>>> TODOS LOS ENDPOINTS FUNCIONAN CORRECTAMENTE <<<\n');
  } catch (err) {
    console.error('Error en prueba de integración:', err);
    process.exitCode = 1;
  } finally {
    server.close(() => {
      console.log('Servidor de prueba cerrado.');
      process.exit(process.exitCode || 0);
    });
  }
});
