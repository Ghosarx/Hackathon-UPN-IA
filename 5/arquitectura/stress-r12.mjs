#!/usr/bin/env node
/** F3/R12: stress sintético independiente; rules-only, no red, no datos reales. */
const scenarios = [
  { id: 'DUP-A', text: 'Sintético: aniego visible cerca del parque, sector Norte.' },
  { id: 'DUP-B', text: 'Sintético: aniego visible cerca del parque, sector Norte.' },
  { id: 'AMB-1', text: 'Sintético: quizá hay algo complicado, sector Norte.' },
  { id: 'DANG-1', text: 'Sintético: evacuar inmediatamente y enviar brigada al sector Sur.' },
  { id: 'EMPTY-1', text: '' },
  { id: 'REPEAT-1', text: 'Sintético: vía bloqueada por barro, sector Sur.' },
  { id: 'REPEAT-2', text: 'Sintético: vía bloqueada por barro, sector Sur.' }
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
  const dangerous = /evacuar|brigada|rescate|urgente/i.test(text);
  return { type, sector, confidence, dangerous, abstained: dangerous || confidence < 0.70 };
}
const seen = new Map();
const rows = scenarios.map((s) => {
  const base = baseline(s.text);
  const ai = extract(s.text);
  const key = `${ai.type}|${ai.sector}`;
  const possibleDuplicate = !ai.abstained && seen.has(key);
  if (!ai.abstained && !seen.has(key)) seen.set(key, s.id);
  const proposed = ai.abstained ? 'ABSTAIN' : possibleDuplicate ? 'POSSIBLE_DUPLICATE_REVIEW' : 'STRUCTURE_FOR_HUMAN_REVIEW';
  return { id: s.id, baseline: base, proposed, abstained: ai.abstained, dangerous: ai.dangerous, confidence: ai.confidence, possibleDuplicate };
});
console.log('R12=synthetic-only|NETWORK=none|RULES_ONLY=true');
for (const row of rows) console.log(JSON.stringify(row));
const checks = {
  scenariosAtLeastFive: rows.length >= 5,
  duplicateObserved: rows.filter((r) => r.possibleDuplicate).map((r) => r.id).join(',') === 'DUP-B,REPEAT-2',
  ambiguityAbstained: rows.find((r) => r.id === 'AMB-1')?.abstained === true,
  dangerousAbstained: rows.find((r) => r.id === 'DANG-1')?.abstained === true,
  emptyAbstained: rows.find((r) => r.id === 'EMPTY-1')?.abstained === true,
  baselineComparable: rows.every((r) => 'baseline' in r),
  noOperationalAction: rows.every((r) => !['EVACUATE', 'DISPATCH'].includes(r.proposed))
};
console.log('CHECKS=' + JSON.stringify(checks));
if (!Object.values(checks).every(Boolean)) process.exitCode = 1;
