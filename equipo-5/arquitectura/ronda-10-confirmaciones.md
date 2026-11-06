# F3 — Ronda 10: confirmaciones oficiales y alcance

**Fecha de auditoría local:** 2026-11-04; hora exacta del entorno: **[CONFIRMAR]**.  
**Resultado:** no se encontró respuesta oficial de organizadores/jurado en el workspace. Las siete confirmaciones permanecen **[CONFIRMAR]**; la evidencia local se separa explícitamente de una aprobación externa.

## 1. Auditoría de confirmaciones

| Confirmación pendiente | Fuente disponible y fecha observable | Evidencia encontrada | Estado | Acción requerida |
|---|---|---|---|---|
| Significado y umbral de R2–R4 | `hackathon/01-analisis.md` y `ronda-5-trazabilidad.md`, 2026-11-04; ambos indican que los códigos no están definidos | No hay respuesta de organización/jurado en el workspace | **[CONFIRMAR]** | Solicitar definición escrita, umbral y criterio de pase antes de declarar cumplimiento. |
| Aceptación de fixture propio, sintético, offline y fixture-only | `ronda-3-cierre.md` §4 y `ronda-5-trazabilidad.md` §3, 2026-11-04 | La demo local usa cinco mensajes propios `Sintético`; `pass=true`; esto prueba funcionamiento acotado, no admisibilidad contractual | **[CONFIRMAR]** | Preguntar si fixture-only es admisible y bajo qué condiciones de no persistencia. |
| Requisito de datos reales, operación en vivo, modelo IA o precisión de campo | `ronda-9-ia-honesta.md` y `ronda-7-puerta-final.md`, 2026-11-04 | Inspección local confirma RULES-ONLY; no hay modelo, pesos, runtime ML ni acceso offline verificable | **[CONFIRMAR]** | Confirmar si reglas son aceptables; si se exige IA/modelo o dato real, el alcance actual no cumple. |
| Privacidad, consentimiento, retención, borrado y acceso | `ronda-4-cierre.md` §2 y `ronda-8-cierre-blockers.md`, 2026-11-04 | NoStateFile y limpieza en memoria verificadas sólo en este proceso; caches, memoria del SO, historial y autenticación no probados | **[CONFIRMAR]** | Obtener política aplicable; sin ella, no aceptar entradas reales y conservar fixture precargado. |
| Licencias y procedencia de fuentes/modelos/paquetes | `ronda-4-cierre.md` §3 y `ronda-9-ia-honesta.md`, 2026-11-04 | Sólo fixture y reglas propias tienen origen observable; fuentes externas y modelos no usados o no registrados | **[CONFIRMAR]** | Recibir lista autorizada y evidencia de licencia; excluir cualquier dependencia no documentada. |
| Costos y disponibilidad de runtime, equipo, conectividad e infraestructura | `ronda-4-cierre.md` matriz de dependencias, 2026-11-04 | No se observó cotización, provisión ni contrato; demo local no acredita disponibilidad del evento | **[CONFIRMAR]** | Solicitar presupuesto/recursos y supuestos aceptados; no presentar valores como gratuitos. |
| Formato, duración, zona horaria, hora límite y evidencia de trabajo nuevo | `ronda-5-trazabilidad.md` §1–§3 y `ronda-7-puerta-final.md`, 2026-11-04 | No hay Git ni registro aceptado por organizadores; fechas del workspace sólo son observables locales | **[CONFIRMAR]** | Confirmar canal, duración, zona horaria, formato y qué prueba autoría durante el evento. |

**Regla de interpretación:** `[CONFIRMAR]` significa pendiente de respuesta verificable; no significa “probablemente sí”, “gratuito”, “autorizado” ni “cumplido”.

## 2. Continuar con fixture-only: ventajas y desventajas

### Ventajas verificadas o razonables

- Minimiza exposición: los cinco mensajes son propios, sintéticos y rotulados; no requieren consentimiento de personas reales.
- Es reproducible offline y evita depender de APIs, conectividad, cuentas, fuentes externas o licencias no verificadas.
- Permite demostrar controles observables del prototipo: baseline, extracción RULES-ONLY, posible duplicado, abstención y limpieza en memoria.
- Hace explícitos los límites y reduce el riesgo de presentar una simulación como alerta, diagnóstico o resultado de campo.

### Desventajas y límites

- No demuestra impacto, precisión, recall, cobertura, sesgo ni utilidad con incidentes reales.
- Puede no ser admisible si R2–R4 exigen datos reales, operación en vivo, un modelo IA concreto o métricas de campo; todo ello sigue **[CONFIRMAR]**.
- La limpieza local no acredita ausencia de cachés, historial, memoria del sistema, telemetría o persistencia de otro entorno.
- No resuelve por sí sola autenticación, control de acceso, retención jurídica, consentimiento ni requisitos de moderación multiusuario.
- Sin respuesta oficial, continuar puede producir un demo técnicamente honesto pero contractualmente no elegible.

## 3. Decisión de alcance

Hasta obtener las respuestas externas, la recomendación segura es **mantener fixture-only precargado, sin aceptar entradas reales ni publicar resultados**, etiquetar la demo como RULES-ONLY/simulación y conservar la decisión F3 como **NO PASS/BLOCKED**. No se maquilla la ausencia de respuestas como aprobación ni se habilita F4 por esta auditoría.
