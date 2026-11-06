# F3 — Ronda 3: evidencia ejecutada de arquitectura

**Fecha de ejecución:** 2026-11-04 (hora exacta del entorno: [CONFIRMAR])  
**Alcance:** demo offline de cinco mensajes propios sintéticos. No es evidencia de desempeño en campo, verdad de incidentes ni alerta oficial.

## 1. Comando reproducible

Desde la raíz del workspace:

```powershell
node hackathon/arquitectura/demo-evidence.mjs
```

Salida completa conservada en [`demo-evidence.log`](demo-evidence.log). El script no importa APIs de red, no usa `fetch`, no escribe archivos de estado y sólo mantiene el fixture en memoria durante la ejecución.

**SHA-256 (ejecución):**

- `demo-evidence.mjs`: `45FE5233F660F03B273B7895B980A4CB14DB831B4D9519DA8F405EEBED4A95F9`
- `demo-evidence.log`: `0A8A26751F391804470FFB2E7D45DBC4CE7B7DF181A420661E440846B92948B4`

## 2. Resultados observados

| ID | Procedencia | Baseline | Extracción | Confianza | Resultado | Moderación |
|---|---|---|---|---:|---|---|
| S1 | Sintético propio | aniego | aniego / norte | 0.94 | único | confirmada por moderadora (simulada) |
| S2 | Sintético propio | aniego | aniego / norte | 0.94 | posible duplicado de S1 | sin acción |
| S3 | Sintético propio | vía bloqueada | vía bloqueada / sur | 0.94 | único | sin acción |
| S4 | Sintético propio | — | tipo y sector faltantes | 0.18 | **abstención** | pendiente: abstener |
| S5 | Sintético propio | desborde | desborde / este | 0.94 | único | sin acción |

La salida del proceso verificó `fiveSynthetic=true`, `duplicate=true`, `abstention=true` y `baselinePresent=true`.

## 3. No persistencia y limpieza

El proceso verificó antes y después que no existe `hackathon/arquitectura/demo-state.json` (`noStateFileBefore=true`, `noStateFileAfter=true`). Luego vació explícitamente las estructuras en memoria (`clearedInMemory=true`). Resultado final: `pass=true`.

Esto demuestra ausencia de archivo de estado en esta ejecución y limpieza de referencias del proceso; **no demuestra** ausencia de cachés, memoria del sistema operativo, historial del terminal o comportamiento de otro entorno. No se ingresaron datos reales. Si el jurado exige una prueba distinta de borrado, formato y retención, queda **[CONFIRMAR]**. Si exige persistencia cero demostrada fuera de este proceso, la modalidad segura sigue siendo fixture precargado sin entradas.

## 4. Límites y confirmaciones pendientes

- Los cinco registros son creados por el equipo y están rotulados `Sintético`; no implican consentimiento ni fuente externa.
- El agrupamiento es una señal de **posible** duplicado y requiere decisión humana; no prueba que sean el mismo incidente.
- Las métricas observadas aplican sólo a este fixture; no son precisión/recall ni validación de campo.
- R2–R4, aceptación formal de fixtures, formato de entrega, requisitos de retención/licencia y evidencia de construcción durante el evento: **[CONFIRMAR]**.
- La frase visible del demo es: “Simulación; no alerta oficial, no publicación ni asignación de recursos”.
