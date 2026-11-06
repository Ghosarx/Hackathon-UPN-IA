# Revisión independiente A2 — Ronda 2 / cierre

**Entregables auditados:** `hackathon/03-arquitectura.md` y `hackathon/arquitectura/ronda-1-a2.md`. Se solicitó también `hackathon/arquitectura/ronda-2-cierre.md`, pero el archivo **no existe en el workspace**; por tanto, su contenido y cualquier evidencia de cierre quedan **[CONFIRMAR]** y no se presume.

**Resultado:** las correcciones documentales responden a C1–C7 como controles y protocolos, pero no acreditan ejecución ni confirmación externa. **Veredicto: REQUIERE CORRECCIONES / no pase (83/100).**

## Puntuación actualizada

| Criterio | Máximo | A2 ronda 2 | Motivo |
|---|---:|---:|---|
| Innovación y creatividad | 20 | 17 | El diseño de extracción/abstención/posibles duplicados/moderación es coherente; no hay evidencia de novedad comparativa. |
| Uso pertinente de IA | 25 | 20 | Se añadió una puerta de licencia y la regla de no llamar IA al fallback. El nombre, versión, pesos, runtime y licencia del modelo siguen `[CONFIRMAR]`; no se acredita aún una ejecución IA. |
| Impacto y relevancia | 20 | 16 | Límites, no sustitución y fixture sintético están mejor explicitados, pero no existen usuarios, validación ni mejora operativa observada. |
| Prototipo y funcionamiento | 15 | 12 | El protocolo `demo-evidence` y tabla esperada son útiles, pero sus valores observados, capturas, comando y prueba de borrado siguen pendientes. |
| Factibilidad y escalabilidad | 10 | 9 | El recorte de 15 minutos, fallback y matriz de dependencias mejoran la construibilidad; disponibilidad, costos, licencias y ventana oficial permanecen pendientes. |
| Presentación/pitch | 10 | 9 | Se conserva guion de 3 minutos y recorte de 15 minutos; duración/formato oficiales y ensayo observado siguen `[CONFIRMAR]`. |
| **Total** | **100** | **83** | **No alcanza 85.** |

## Cierre de hallazgos de ronda 1

| Hallazgo | Estado en esta ronda | Evidencia exigida aún ausente |
|---|---|---|
| C1 IA/modelo/licencia | **Parcial** | Registro completado con nombre, versión, pesos, runtime, licencia y acceso offline; o fallback declarado y presentación ajustada. |
| C2 funcionamiento/borrado | **Parcial** | Tabla con resultados observados, capturas y comando reproducible; inspección de temporales/logs/red y borrado ejecutados. |
| C3 preexistente/nuevo | **Parcial** | Manifiesto real con rutas/hash/fecha/licencia y commits/capturas del desarrollo durante el evento; formato oficial confirmado. |
| C4 R2–R4/fixture-only | **No cerrado** | Respuesta escrita de la organización. La ficha de preguntas no equivale a confirmación. |
| C5 costos/licencias | **Parcial** | Matriz completada con identificaciones, costos y acceso. Las celdas `[CONFIRMAR]` no son evidencia. |
| C6 seguridad/privacidad | **Parcial** | Checklist ejecutado con comandos/capturas y resultado; no basta describirlo. |
| C7 ventana/entrega | **No cerrado** | Cronograma, sede, formato, hora, zona horaria y duración confirmados; ensayo cronometrado observado. |

## Observaciones de seguridad y límites

Se mantiene correctamente: datos propios **SINTÉTICOS**, offline/en memoria, ubicación gruesa, banner de no sustitución, moderación humana, posible duplicado no irreversible y abstención ante incertidumbre. El addendum no debe presentarse como prueba de ejecución. La arquitectura dice expresamente que no se debe declarar funcionamiento hasta completar evidencias; esa cautela es aprobable.

No se puede afirmar que el prototipo usa un modelo IA concreto mientras el registro de C1 esté vacío. Si finalmente sólo se usan reglas propias, debe comunicarse como reglas/heurísticas y no atribuirles rendimiento de IA. Ningún costo, licencia, acceso, aceptación de fixture ni requisito R2–R4 debe darse por resuelto sin fuente o respuesta verificable.

## Correcciones finales obligatorias para superar 85

1. Incorporar el archivo de cierre solicitado o explicar formalmente su ausencia; adjuntar confirmación escrita R2–R4 y fixture-only.
2. Completar registro de modelos/licencias o rotular honestamente la demo como fallback de reglas.
3. Ejecutar `demo-evidence` y anexar tabla observada, capturas, comando y resultado de borrado/no persistencia.
4. Adjuntar manifiesto preexistente/hash y evidencia de commits de función nueva, con formato del evento confirmado.
5. Completar costos/dependencias y checklist de seguridad con resultados reales.
6. Confirmar ventana y entrega, y anexar ensayo cronometrado del pitch.

## Veredicto

**83/100 — REQUIERE CORRECCIONES; no pase aún.** La ronda 1 fue 82/100 (<85), por lo que no corresponde confirmar pase. El addendum mejora la arquitectura y evita afirmaciones absolutas, pero convierte hallazgos en procedimientos pendientes, no en verificaciones. Revaluar sólo con evidencia adjunta; no usar este documento como certificación oficial ni presentar la demo como alerta o rendimiento de campo.

## Cierre obligatorio

- **Qué revisé:** `03-arquitectura.md`, `ronda-1-a2.md`; `ronda-2-cierre.md` fue buscado y no está presente.
- **Qué entrego:** segunda auditoría A2 con puntuación 83/100 y estado de cada C1–C7.
- **Supuestos:** todo `[CONFIRMAR]`/`[PENDIENTE DE EJECUCIÓN]` se considera no verificado.
- **Pendientes:** completar las seis correcciones finales y revaluar sin inventar confirmaciones.
