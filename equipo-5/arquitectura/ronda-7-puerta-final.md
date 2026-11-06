# F3 — Ronda 7: puerta final y puntuación

**Fecha/hora de decisión:** 2026-11-04T11:32:50.2157853-05:00 (entorno local)
**Base de revisión:** R3 (`ronda-3-cierre.md`), R4 (`ronda-4-cierre.md`), R5 (`ronda-5-trazabilidad.md`) y R6 (`ronda-6-adversarial.md`).
**Regla aprobada:** PASS sólo con score ≥80/100, cero blockers críticos y 100% de controles obligatorios con evidencia ejecutada. La decisión se registra separada del score.

## 1. Score final

Se conserva sin maquillaje la puntuación adversarial de R6, que evaluó los controles efectivamente ejecutados:

| Criterio | Peso | Puntaje | Sustento |
|---|---:|---:|---|
| Reproducibilidad ejecutada | 25 | 23 | Dos ejecuciones idénticas, exit 0; sólo fixture local |
| Abstención y duplicados | 20 | 16 | S4/S2 observados; sin corpus independiente |
| Minimización y privacidad | 20 | 15 | Sintéticos y ausencia de archivo local; cachés/OS/red no probados |
| Fallback y pertinencia técnica | 15 | 7 | Reglas JavaScript reproducibles; no hay modelo IA ni comparación independiente |
| Trazabilidad y límites | 10 | 8 | Hashes y límites; sin Git ni registro oficial del evento |
| Seguridad operativa | 10 | 3 | Revisión estática; firewall, retención y acceso multiusuario pendientes |
| **Total** | **100** | **72** | **Bajo el umbral de 80** |

## 2. Blockers no negociables

1. Score 72/100, inferior al umbral 80.
2. No existe evidencia ejecutada de firewall/captura de tráfico, cachés, historial del terminal o memoria del sistema operativo.
3. Retención, borrado externo, consentimiento y acceso/autenticación de moderadora siguen sin confirmación.
4. R2–R4, aceptación formal de fixture-only y formato oficial de entrega siguen `[CONFIRMAR]`.
5. No existe repositorio Git ni registro aceptado por la organización que pruebe trabajo nuevo dentro de la ventana oficial.
6. Licencias, versiones y costos externos siguen sin confirmación.
7. `extract()` y `baseline()` son reglas JavaScript; no constituyen evidencia de IA pertinente ni de mejora frente a baseline independiente.

## 3. Decisión de puerta

**DECISIÓN EXPLÍCITA: NO PASS / BLOCKED.**

Los requisitos de PASS no se cumplen: el score está bajo 80 y faltan controles obligatorios con evidencia ejecutada/oficial. **F4 = BLOCKED**. No se habilita el prototipo, no se inicia la siguiente etapa y no se interpreta la ejecución local como certificación de campo, alerta oficial, privacidad completa ni autorización de entrega.

Cualquier reapertura exige nueva evidencia verificable para cada blocker y una nueva decisión explícita con timestamp; este acta no autoriza excepciones.
