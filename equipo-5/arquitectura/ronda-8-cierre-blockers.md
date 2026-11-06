# F3 — Ronda 8: cierre adversarial de blockers R3–R7

**Fecha/hora de revisión:** 2026-11-04T11:38:43-05:00 (hora muestreada del entorno; no es hora oficial del evento)
**Alcance:** comprobar cada blocker heredado con comandos, salidas y artefactos disponibles. Un control local cerrado no equivale a confirmación oficial.

## 1. Matriz de blockers

| # | Blocker heredado | Estado | Prueba concreta / artefacto | Riesgo residual |
|---:|---|---|---|---|
| 1 | Score menor al umbral | **ABIERTO** | `ronda-6-adversarial.md` y `ronda-7-puerta-final.md`: 72/100; umbral aprobado 80 | No hay pase aunque los controles locales sean reproducibles |
| 2 | Red real, cachés, historial y memoria del SO | **ABIERTO (parcial local)** | Comando estático sobre `demo-evidence.mjs`: `STATIC_NETWORK_REFERENCES=none`; `Test-Path .../demo-state.json`: `False`; no se ejecutó firewall/captura ni auditoría de cachés/OS | El script puede ser offline, pero no se demuestra comportamiento del equipo/entorno completo |
| 3 | Retención, borrado externo, consentimiento y acceso de moderadora | **ABIERTO** | R4 líneas 26–30 y R5 tabla de confirmaciones marcan estos controles `[CONFIRMAR]`; el demo sólo prueba limpieza de referencias y ausencia de un archivo | Riesgo jurídico, de persistencia y de acceso multiusuario |
| 4 | R2–R4, fixture-only y formato oficial de entrega | **ABIERTO** | R5 tabla de preguntas (R2–R4, datos reales, fixture-only y entrega) sin respuesta oficial | No se puede afirmar elegibilidad contractual |
| 5 | Trabajo nuevo durante la ventana oficial | **ABIERTO** | `git status` devuelve `fatal: not a git repository`; R5 limita “nuevo” a fechas locales y exige formato aceptado por organización | No se prueba autoría temporal del evento |
| 6 | Licencias, versiones y costos externos | **ABIERTO** | R4 matriz: Node, paquetes/modelos, fuentes, equipo e infraestructura permanecen `[CONFIRMAR]`; no se inventan precios | Riesgo de licencia, disponibilidad y presupuesto |
| 7 | IA pertinente / comparación independiente | **ABIERTO** | Inspección de `demo-evidence.mjs`: `baseline()` y `extract()` son reglas JavaScript de palabras clave; no hay modelo ni benchmark independiente | No presentar la extracción como modelo IA ni generalizar el fixture |

## 2. Verificaciones ejecutadas

1. `node hackathon/arquitectura/demo-evidence.mjs` → exit 0; `CHECKS` y `CLEANUP` con `pass=true`, `abstention=true`, `duplicate=true`, `clearedInMemory=true`, `noStateFileAfter=true`.
2. Dos ejecuciones comparadas byte a byte → `REPEAT_OUTPUT_IDENTICAL=true`; el estado quedó `STATE_FILE_AFTER=false`.
3. `Select-String` sobre patrones `fetch|http://|https://|WebSocket|axios|node:https|node:http` → `STATIC_NETWORK_REFERENCES=none`.
4. `git -C . status --short` → “not a git repository”; resultado documentado como `GIT_TRACEABILITY=unavailable`.

Estas pruebas cierran únicamente los subcontroles locales que declaran; no cierran los blockers marcados abiertos.

## 3. Ventajas, desventajas y riesgos residuales

**Ventajas verificadas:** demo offline reproducible; fixtures propios sintéticos; abstención visible en S4; posible duplicado no irreversible en S2; baseline presente; limpieza de referencias en memoria; no se detectan referencias de red en el script; límites y advertencias están documentados.

**Desventajas verificadas:** score 72/100; extracción basada en reglas y no evidencia de IA; un solo fixture con cinco mensajes; no hay corpus independiente; no se prueba firewall/cachés/OS; no hay Git ni registro oficial; confirmaciones contractuales, jurídicas, de licencias y entrega pendientes.

**Riesgos residuales:** persistencia fuera del proceso, uso fuera de fixture-only, interpretación del ranking como prioridad operativa, requisitos R2–R4 desconocidos, incumplimiento de formato/hora del evento y licencias/costos no confirmados.

## 4. Veredicto de ronda

**VEREDICTO: NO PASS / BLOCKED.** Todos los siete blockers tienen estado explícito y evidencia o referencia verificable; ninguno se convierte en “cerrado” por protocolo. El score permanece 72/100 y no se habilita F4. Para reabrir la puerta se requiere evidencia nueva para cada blocker abierto, confirmación oficial donde corresponda y una nueva decisión separada de la puntuación.
