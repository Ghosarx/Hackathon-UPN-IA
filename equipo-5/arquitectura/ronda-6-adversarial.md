# F3 — Ronda 6: prueba adversarial de arquitectura

**Fecha de ejecución:** 2026-11-04 (hora exacta del entorno: **[CONFIRMAR]**)
**Revisor:** jurado adversarial
**Alcance:** reproducibilidad, abstención, minimización y fallback del demo local de cinco mensajes sintéticos. Esta revisión no certifica desempeño de campo, seguridad de red ni autorización oficial.

## 1. Evidencia ejecutada

| Control | Comando / método | Resultado observado | Veredicto local |
|---|---|---|---|
| Reproducción base | `node hackathon/arquitectura/demo-evidence.mjs` | Exit 0; `fiveSynthetic=true`, `duplicate=true`, `abstention=true`, `baselinePresent=true`, `clearedInMemory=true`, `noStateFileAfter=true`, `pass=true` | PASS condicionado |
| Repetición determinista | Ejecutar dos veces y comparar salida exacta (`REPEAT_OUTPUT_IDENTICAL`) | `REPEAT_OUTPUT_IDENTICAL=true`; ambos procesos terminan sin error | PASS condicionado |
| Ausencia de estado local | `Test-Path hackathon/arquitectura/demo-state.json` después de dos ejecuciones | `STATE_FILE_AFTER=false` | PASS sólo para ese archivo/proceso |
| Revisión de red | Inspección estática de `demo-evidence.mjs` | No hay `fetch`, URLs, WebSocket, axios ni módulos HTTP; no se ejecutó firewall/captura | PASS estático; evidencia de red pendiente |
| Abstención | Caso S4 del fixture (`tipo` y `sector` ausentes) | Confianza 0.18, `abstained=true`, estado `pendiente: abstener` | PASS en fixture |
| Posible duplicado | Casos S1/S2 idénticos | S2 marcado `possibleDuplicate=true`; no se afirma identidad | PASS en fixture |
| Minimización | Inspección de fixture/salida | Cinco textos rotulados sintéticos; salida no exporta texto original; sin datos reales | PASS en fixture |
| Fallback/IA | Inspección de `baseline()` y `extract()` | Extracción implementada como reglas JavaScript por palabras; no hay modelo IA ni fallback a un modelo externo | LIMITACIÓN; no presentar reglas como IA |

## 2. Pruebas adversariales y límites

- Repetir el proceso confirma reproducibilidad del fixture, no robustez frente a entradas arbitrarias.
- La abstención sólo fue ejecutada para S4; no hay corpus independiente ni pruebas de falsos positivos/negativos.
- El control de no persistencia comprueba un archivo concreto y limpieza de referencias del proceso. No prueba cachés, historial del terminal, memoria del sistema operativo, backups ni otro navegador/entorno.
- La inspección estática no sustituye firewall, captura de tráfico o auditoría de dependencias.
- `baseline()` y `extract()` usan reglas idénticas de palabras clave; la ejecución no demuestra una función de IA pertinente ni mejora generalizable frente a un baseline independiente.
- No hay repositorio Git ni confirmación oficial de ventana, formato, R2–R4, fixture-only, retención, licencias, consentimiento o evidencia de construcción durante el evento.

## 3. Puntuación de Ronda 6 (100 puntos)

| Criterio | Peso | Puntaje | Evidencia / descuento |
|---|---:|---:|---|
| Reproducibilidad ejecutada | 25 | 23 | Dos salidas idénticas y exit 0; sólo fixture local |
| Abstención y duplicados | 20 | 16 | S4/S2 observados; sin corpus independiente |
| Minimización y privacidad | 20 | 15 | Sintéticos, sin estado local; cachés/OS/red no probados |
| Fallback y pertinencia técnica | 15 | 7 | Reglas locales reproducibles, pero no modelo IA ni comparación independiente |
| Trazabilidad y límites | 10 | 8 | Hashes y límites explícitos; sin Git/registro oficial |
| Seguridad operativa | 10 | 3 | Revisión estática; firewall, retención y acceso multiusuario pendientes |
| **Total** | **100** | **72** | **No alcanza 80** |

## 4. Decisión de puerta

**DECISIÓN: BLOCKED / NO PASS.** Puntaje 72/100 (<80) y existen controles obligatorios sin evidencia ejecutada u oficial: red real, cachés/retención, acceso de moderadora, confirmaciones R2–R4, aceptación de fixture-only y formato de trabajo/entrega del evento. La ejecución local no se convierte en certificación global. F4 debe permanecer bloqueada; no hay autorización para habilitarla desde esta ronda.

Para revaluar: ejecutar controles faltantes con comandos y resultados conservados, adjuntar confirmaciones oficiales, y no presentar `extract()` basado en reglas como IA sin evidencia adicional.
