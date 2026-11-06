# F3 — Ronda 14: revalidación con condiciones confirmadas del evento

**Fecha/hora de revisión:** 2026-11-06T14:57:50-05:00 (hora muestreada local; no es hora oficial de entrega)
**Revisor:** jurado adversarial
**Base:** `hackathon/01-confirmaciones-evento.md`, arquitectura MVP, preprototipo offline y rondas R3–R13.

## 1. Condiciones confirmadas por la participante

| Condición | Estado y efecto |
|---|---|
| Participante individual | Confirmada en fuente del equipo; agentes apoyan, pero la participante presenta demo/pitch. |
| Ventana 15:00–18:00 y pitch 18:30 | Confirmada por mensaje de participante; exige priorizar MVP en 3 horas. |
| F1–F3 máximo 30 minutos | Confirmada; la planificación heredada de 4 horas en `03-arquitectura.md` ya no aplica. |
| IA/API de elección | Permitida, pero la organización no da cuentas/créditos; uso sujeto a licencias y recursos disponibles. |
| Entrega GitHub | Confirmada como formato; código, README, demo, pitch y `.env.example` sin secretos. |
| Código previo | Permitido; deben conservarse commits claros desde el inicio de ventana. |
| Rúbrica | Confirmada: innovación 20, IA 25, impacto 20, prototipo 15, factibilidad 10, pitch 10. |

## 2. Lo que continúa sin verificación

- Proveedor/modelo, cuenta/crédito API, versión, licencia, costo y acceso durante la ventana.
- Evidencia de un repositorio GitHub real, commits desde 15:00 y formato de registro aceptado.
- Significado y requisitos contractuales de R2/R3/R4, aceptación formal de fixture-only y si exigen datos/operación real.
- Retención, consentimiento, borrado externo, autenticación de moderadora y requisitos legales.
- Firewall/egress, cachés, swap, memoria del SO y telemetría del entorno.
- Prueba observada de una construcción nueva en los 30 minutos F1–F3 y ensayo cronometrado.

## 3. Evaluación independiente de IA/API y fallback

La ejecución real de `node hackathon/preprototipo/run-demo.mjs` terminó con `RESULT={"pass":true,"persistentState":false,"network":false,"officialAction":false}`. Esto verifica sólo un fixture local rules-only. README declara expresamente que extracción y baseline son reglas deterministas, no modelo IA.

La arquitectura permite una IA conversacional/API, pero no aporta proveedor, credenciales disponibles, licencia, costo, comando de inferencia ni evidencia offline. Por tanto, **no se asigna crédito por IA pertinente**. El fallback rules-only es honesto, reproducible y seguro, pero no satisface por sí solo el criterio de IA de la rúbrica. Integrar una API durante la demo sin controlar datos, licencia, costo y salida no es una opción aprobable.

## 4. Construibilidad en tres horas

El demostrador preexistente ejecuta el fixture, pero eso no prueba que la función central nueva se construya dentro de la ventana confirmada. Además, la arquitectura heredada contiene un cronograma de 4 horas y no existe GitHub/commit log verificable en el workspace (`git status` no es repositorio). Con lo observado, el MVP **no está demostrado como construible y trazable en 3 horas**. El alcance seguro sería fixture precargado, sin entradas reales, con fallback rules-only y etiquetas de simulación, sujeto a aceptación oficial.

## 5. Score según rúbrica del evento

| Criterio | Peso | Puntaje | Justificación |
|---|---:|---:|---|
| Innovación | 20 | 14 | Buzón efímero, abstención y moderación son un flujo coherente; novedad comparativa no validada. |
| IA pertinente | 25 | 5 | Rules-only ejecutable; no hay IA/API, proveedor, licencia, costo ni benchmark. |
| Impacto | 20 | 13 | Problema relevante y límites responsables; sin usuarios/campo ni evidencia de utilidad real. |
| Prototipo/funcionamiento | 15 | 12 | Demo local pasa checks y casos; no prueba interfaz final, campo ni construcción en ventana. |
| Factibilidad | 10 | 5 | Fixture-only es acotado; 30 minutos F1–F3, GitHub y dependencias disponibles no están demostrados. |
| Pitch | 10 | 7 | Guion y pitch 18:30 están definidos; ensayo cronometrado/captura no verificados. |
| **Total** | **100** | **56** | **Bajo umbral 80** |

## 6. Ventajas y desventajas

**Ventajas:** condiciones de participante/horario/entrega ya fijadas; código previo permitido; preprototipo offline reproducible; cinco sintéticos, duplicado y abstención; no publica ni despacha; fallback de reglas sin dependencia externa.

**Desventajas:** IA pertinente ausente; API/proveedor/costo/licencia sin disponibilidad probada; plan de 4 horas incompatible con 30 minutos F1–F3; GitHub y commits no evidenciados; requisitos R2/R3/R4 y aceptación fixture-only no confirmados; seguridad ambiental y UX sin prueba completa.

## 7. Decisión de puerta

**DECISIÓN: NO PASS / BLOCKED. F4 = BLOCKED.** Las nuevas confirmaciones reducen incertidumbre logística, pero no cierran los blockers R3/R4 ni demuestran IA pertinente o construcción trazable en la ventana. No se inicia F4. Para revaluar se requiere proveedor/modelo o decisión explícita de presentar rules-only si las reglas del evento lo permiten, licencia/costo/acceso, repositorio GitHub con commits, respuesta R2/R3/R4, pruebas de seguridad y ensayo cronometrado.
