#!/usr/bin/env node
/**
 * Voluntad Visible — evidencia ejecutable F3/R3.
 * Fixture propio: no red, no APIs, no archivos de estado; estado sólo en memoria.
 * No usar con mensajes reales. Los resultados miden únicamente este fixture.
 */
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const statePath = path.join(root, 'hackathon', 'arquitectura', 'demo-state.json');
const beforeExists = fs.existsSync(statePath);
const fixture = [
  { id: 'S1', text: 'Sintético: aniego visible cerca del parque central, sector Norte.' },
  { id: 'S2', text: 'Sintético: aniego visible cerca del parque central, sector Norte.' },
  { id: 'S3', text: 'Sintético: vía bloqueada por barro en sector Sur.' },
  { id: 'S4', text: 'Sintético: se ve complicado por ahí, no sé exactamente dónde.' },
  { id: 'S5', text: 'Sintético: desborde de canal junto al mercado, sector Este.' }
];

function baseline(text) {
  const t = text.toLowerCase();
  return t.includes('aniego') ? 'aniego' : t.includes('bloqueada') ? 'vía bloqueada' : t.includes('desborde') ? 'desborde' : null;
}
function extract(text) {
  const t = text.toLowerCase();
  const type = t.includes('aniego') ? 'aniego' : t.includes('bloqueada') ? 'vía bloqueada' : t.includes('desborde') ? 'desborde' : null;
  const sector = (t.match(/sector (norte|sur|este|oeste)/)?.[1] ?? null);
  const confidence = type && sector ? 0.94 : 0.18;
  return { type, sector, confidence, abstained: confidence < 0.70, missing: [!type && 'tipo', !sector && 'sector'].filter(Boolean) };
}
function run() {
  const rows = fixture.map((m) => ({ ...m, baseline: baseline(m.text), ai: extract(m.text) }));
  const byKey = new Map();
  for (const row of rows) {
    const key = `${row.ai.type}|${row.ai.sector}`;
    row.possibleDuplicate = !row.ai.abstained && byKey.has(key);
    if (!row.ai.abstained && !byKey.has(key)) byKey.set(key, row.id);
    row.moderation = row.id === 'S1' ? 'confirmada por moderadora (simulada)' : row.id === 'S4' ? 'pendiente: abstener' : 'sin acción';
  }
  const checks = {
    fiveSynthetic: rows.length === 5 && rows.every((r) => r.text.startsWith('Sintético:')),
    duplicate: rows.filter((r) => r.possibleDuplicate).map((r) => r.id).join(',') === 'S2',
    abstention: rows.find((r) => r.id === 'S4')?.ai.abstained === true,
    baselinePresent: rows.every((r) => 'baseline' in r),
    noStateFileBefore: !beforeExists
  };
  console.log('DEMO=Voluntad Visible | DATA=SINTÉTICA | MODE=memory-only | NETWORK=none');
  console.log('WARNING=Simulación; no alerta oficial, no publicación ni asignación de recursos.');
  for (const r of rows) console.log(JSON.stringify({ id: r.id, baseline: r.baseline, ai: r.ai, possibleDuplicate: r.possibleDuplicate, moderation: r.moderation }));
  console.log('CHECKS=' + JSON.stringify(checks));
  // Explicit cleanup of the in-memory references. This script never writes state.
  rows.length = 0; byKey.clear(); fixture.length = 0;
  const afterExists = fs.existsSync(statePath);
  const result = { ...checks, clearedInMemory: true, noStateFileAfter: !afterExists, pass: Object.values(checks).every(Boolean) && !afterExists };
  console.log('CLEANUP=' + JSON.stringify(result));
  if (!result.pass) process.exitCode = 1;
}
run();
