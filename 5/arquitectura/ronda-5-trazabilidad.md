# F3 — Ronda 5: trazabilidad y confirmaciones oficiales

**Estado:** evidencia local cerrada; pase oficial **[CONFIRMAR]**.  
**Fecha/hora exacta del evento:** **[CONFIRMAR]**. No se atribuye construcción durante el evento sin registro aceptado por la organización.

## 1. Inventario preexistente vs. nuevo

La carpeta no contiene repositorio Git (`git status` y `git log` devolvieron “not a git repository”); por ello no se afirma autoría temporal mediante commits. La clasificación siguiente se limita a lo observable en este workspace:

| Artefacto | Clasificación observable | Evidencia de trazabilidad | Hash SHA-256 |
|---|---|---|---|
| `ronda-1-a2.md` | Preexistente al cierre R3 | fecha de archivo 2026-11-04 10:53:13; documento de evaluación | `56DB357BB5F3E0ECC6F69F78887B36F1FC5EAFDEF9BCC1824A6BDA93927A81CF` |
| `ronda-2-a2.md` | Preexistente al cierre R3 | fecha de archivo 2026-11-04 10:56:16; documento de evaluación | `A9C9FCCC9938B2460A982024A4DB506B83ACE6F86A26A44296C4714246BEF9E9` |
| `demo-evidence.mjs` | Nuevo en R3 | creado/ejecutado en esta ronda; comando y salida en log | `45FE5233F660F03B273B7895B980A4CB14DB831B4D9519DA8F405EEBED4A95F9` |
| `demo-evidence.log` | Nuevo en R3 | salida real de ejecución; `pass=true` | `0A8A26751F391804470FFB2E7D45DBC4CE7B7DF181A420661E440846B92948B4` |
| `ronda-3-cierre.md` | Nuevo en R3 | fecha de archivo 2026-11-04 11:27:44; tabla observada y límites | `002C784DB2F00D338232CA7ACFF9A30C43D8F6523586F38163DF4C06B3B512BA` |
| `ronda-4-cierre.md` | Nuevo en R4 | fecha de archivo 2026-11-04 11:29:21; checklist y matriz | `E1B54359D76978D41E908CC0B6D44BE1736C0ABE6CDE412A530179FFC1522A2C` |

“Nuevo” significa creado durante esta sesión/ronda según fechas locales del workspace, **no** prueba de trabajo realizado dentro de una ventana oficial. Para certificarlo hacen falta commits/timestamps o el formato que la organización acepte: **[CONFIRMAR]**.

## 2. Comandos reproducibles ejecutados

```powershell
node hackathon/arquitectura/demo-evidence.mjs
Get-FileHash hackathon/arquitectura/*.md,hackathon/arquitectura/*.mjs,hackathon/arquitectura/*.log -Algorithm SHA256
```

La primera salida está en [`demo-evidence.log`](demo-evidence.log) y contiene cinco sintéticos, S2 posible duplicado, S4 abstención, baseline, moderación, `noStateFileBefore=true`, `noStateFileAfter=true`, `clearedInMemory=true` y `pass=true`.

## 3. Confirmaciones oficiales pendientes — ficha lista para solicitar

No se convierten preguntas en hechos. Solicitar respuesta escrita de la organización/jurado y adjuntarla sin resumir:

| Pregunta | Estado |
|---|---|
| ¿Qué significan exactamente R2, R3 y R4 y qué umbral/criterios aplican? | **[CONFIRMAR]** |
| ¿Se acepta fixture propio sintético, demo offline y modo fixture-only si no se prueba borrado externo? | **[CONFIRMAR]** |
| ¿Se exige dato real, operación en vivo, modelo IA específico o precisión de campo? | **[CONFIRMAR]** |
| ¿Qué formato prueba trabajo nuevo durante el evento (commit, timestamp, captura, repositorio) y cuál es la hora límite? | **[CONFIRMAR]** |
| ¿Qué reglas de consentimiento, retención, borrado, acceso de moderadora y revisión legal aplican? | **[CONFIRMAR]** |
| ¿Qué licencias/fuentes/modelos/paquetes están autorizados y qué costos deben reportarse? | **[CONFIRMAR]** |
| ¿Cuál es el formato, duración, zona horaria y canal oficial de entrega? | **[CONFIRMAR]** |

## 4. Decisión de puerta

La evidencia técnica observable está cerrada y es reproducible; no existe confirmación oficial en el workspace para R2–R4, aceptación de fixture, formato de trabajo nuevo ni requisitos de entrega. Por honestidad, el estado es **APTA CONDICIONES / NO PASE INCONDICIONAL** hasta recibir esas respuestas. No se usan datos reales ni se afirma validación de campo.
