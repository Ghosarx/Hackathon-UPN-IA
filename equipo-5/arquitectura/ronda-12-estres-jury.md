# F3 — Ronda 12: estrés reproducible y jury de pros/contras

**Fecha:** 2026-11-04
**Alcance:** siete escenarios sintéticos adicionales, ejecutados con un script rules-only independiente. No hay red, datos reales, modelo IA ni acción operacional.

## 1. Comando y evidencia

```powershell
node hackathon/arquitectura/stress-r12.mjs
```

Salida observada: `CHECKS={"scenariosAtLeastFive":true,"duplicateObserved":true,"ambiguityAbstained":true,"dangerousAbstained":true,"emptyAbstained":true,"baselineComparable":true,"noOperationalAction":true}` y exit 0. Repetición exacta: `R12_REPEAT_IDENTICAL=true`.

## 2. Resultados observados

| Escenario | Baseline | Flujo propuesto | Abstención | Lectura adversarial |
|---|---|---|---|---|
| DUP-A | `aniego` | `STRUCTURE_FOR_HUMAN_REVIEW` | No | Primera señal estructurada; no ordena recursos |
| DUP-B | `aniego` | `POSSIBLE_DUPLICATE_REVIEW` | No | Duplicado potencial, requiere revisión humana |
| AMB-1 | `null` | `ABSTAIN` | Sí | Ambigüedad sin tipo; no completa silenciosamente |
| DANG-1 | `null` | `ABSTAIN` | Sí | Lenguaje de evacuación/brigada no genera orden operacional |
| EMPTY-1 | `null` | `ABSTAIN` | Sí | Entrada vacía retenida |
| REPEAT-1 | `vía bloqueada` | `STRUCTURE_FOR_HUMAN_REVIEW` | No | Primera señal de categoría |
| REPEAT-2 | `vía bloqueada` | `POSSIBLE_DUPLICATE_REVIEW` | No | Repetición no se publica como incidente confirmado |

## 3. Ventajas verificadas

- Siete casos cubren duplicados, ambiguos, lenguaje potencialmente peligroso, vacío y repetición (más que los cinco requeridos).
- Baseline queda visible para cada entrada y se separa de la propuesta.
- Abstención explícita evita inventar tipo/sector y bloquea lenguaje que podría interpretarse como orden de evacuación.
- Duplicados quedan como `POSSIBLE_DUPLICATE_REVIEW`, no como verdad ni acción.
- No se generan salidas `EVACUATE`/`DISPATCH`; todas las decisiones permanecen en revisión humana.
- Resultado determinista y reproducible dos veces.

## 4. Desventajas y riesgos

- El script replica reglas conocidas; no prueba IA, precisión/recall ni generalización.
- Los siete casos son sintéticos y pequeños; no representan lenguaje real, dialectos, errores, spam o ataques de prompt.
- El detector de lenguaje peligroso es una lista corta (`evacuar`, `brigada`, `rescate`, `urgente`); puede producir falsos positivos/negativos.
- La deduplicación por `tipo|sector` puede agrupar incidentes distintos del mismo sector o no detectar reformulaciones.
- Baseline y propuesta comparten las mismas señales de palabras clave; la comparación no es independiente.
- No prueba persistencia fuera del proceso, red, cachés, OS, permisos ni requisitos oficiales pendientes.

## 5. Riesgos de rollback / contención

- Si se detecta falso agrupamiento, retirar la tarjeta de `POSSIBLE_DUPLICATE_REVIEW` y conservarla como entradas separadas para moderación.
- Si aparece una salida operacional, detener la demo, volver a fixture precargado y deshabilitar entradas libres; no publicar ni notificar.
- Si el entorno muestra persistencia o red inesperada, detener el flujo y usar únicamente fixture-only offline.
- Si los controles de R2–R4, licencias o formato oficial no se confirman, no entregar el resultado como pase.

## 6. Veredicto

Los escenarios adicionales cumplen el estrés reproducible local y hacen visibles ventajas y límites. No cierran blockers de evidencia oficial, IA, seguridad ambiental ni contrato. El resultado **no cambia** la decisión previa: score 72/100, **NO PASS/BLOCKED**, F4 bloqueada.
