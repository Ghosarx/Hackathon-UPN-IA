# F3 — Ronda 9: IA verificable o etiquetado honesto

**Fecha/hora de revisión:** 2026-11-04T11:40:00-05:00 (hora local muestreada; hora oficial **[CONFIRMAR]**)

## Veredicto de identificación

**No existe un modelo IA verificable en el artefacto ejecutado.** `demo-evidence.mjs` sólo contiene las funciones deterministas `baseline()` y `extract()`, con búsquedas de palabras clave (`aniego`, `bloqueada`, `desborde`, `sector`). No hay modelo, pesos, paquete de inferencia, runtime ML, versión, licencia de modelo ni descarga/acceso offline que se puedan presentar como evidencia.

La etiqueta obligatoria para la demo es: **`RULES-ONLY / fallback determinista; no es modelo IA`**. No se inventa nombre, versión, licencia ni capacidad.

## Verificación reproducible

Comando ejecutado:

```powershell
Select-String -Path hackathon/arquitectura/demo-evidence.mjs -Pattern 'fetch|http://|https://|WebSocket|axios|node:https|node:http|model|onnx|tensorflow|transformers|torch'
```

Resultado observado: no hubo coincidencias de modelo ni red. La inspección del código confirma que la salida se genera con reglas JavaScript locales. La ejecución funcional previa (`node hackathon/arquitectura/demo-evidence.mjs`) terminó con `pass=true`, pero eso sólo prueba el fixture determinista.

## Comparación frente al baseline

| Dimensión | Rules-only (`extract`) | Baseline (`baseline`) | Conclusión verificable |
|---|---|---|---|
| Tipo de incidente | Extrae tipo y sector; abstiene si faltan | Sólo busca tipo | Rules-only produce estructura adicional en S1/S2/S3/S5 |
| Ubicación | Extrae sector amplio por regex | No extrae sector | Ventaja funcional en este fixture |
| Confianza/abstención | 0.94 completo; 0.18 faltante; umbral 0.70 | Sin confianza ni abstención | Mayor transparencia, no desempeño generalizable |
| Duplicados | Clave local tipo+sector; marca “posible” | No deduplica | Ventaja de flujo, no prueba identidad |
| Independencia | Reglas creadas para el mismo fixture | Reglas de palabras clave | **No hay comparación independiente**; ventaja no equivale a IA |
| Robustez | No medida fuera de cinco mensajes | No medida | Sin precisión/recall ni evidencia de campo |

## Impacto en puntuación

Se conserva la puntuación R6 de 72/100 y se desglosa honestamente el criterio que dependía de IA:

| Criterio afectado | Peso R6 | Puntaje defendible | Razón |
|---|---:|---:|---|
| Fallback y pertinencia técnica | 15 | **7/15** | Las reglas son reproducibles, tienen abstención y estructura; no existe modelo IA ni benchmark independiente. |
| Pertinencia IA sustantiva | No separado en R6 | **0 como afirmación de IA** | No se asigna crédito por “modelo” inexistente. La utilidad observable se acredita sólo como reglas/fallback dentro de 7/15. |

Este ajuste no eleva el total ni habilita F4: **72/100, NO PASS/BLOCKED**. Para reclamar pertinencia IA sería indispensable un modelo concreto con nombre/versión, hash o pesos, licencia, runtime, acceso offline, comando de inferencia y comparación independiente; todos permanecen **[CONFIRMAR]**.

## Ventajas y desventajas para decisión

**Ventajas verificadas:** funcionamiento offline, determinismo, auditabilidad, coste/huella local baja, abstención explícita y fácil reproducción por el jurado.  
**Desventajas verificadas:** no es IA, no aprende ni generaliza, las reglas y baseline comparten señales, no hay corpus independiente, no hay métricas de error, y no puede sostenerse una afirmación de IA sustantiva.

**Decisión:** cerrar la ambigüedad mediante etiquetado `RULES-ONLY`; mantener el bloqueo IA/pertinencia y la puntuación 72/100. R2–R4, licencia/formato y aceptación de heurísticas como IA siguen **[CONFIRMAR]**.
