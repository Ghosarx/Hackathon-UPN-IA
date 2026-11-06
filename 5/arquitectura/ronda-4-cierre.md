# F3 — Ronda 4: seguridad, privacidad, costos y licencias

**Fecha de ejecución:** 2026-11-04 (hora exacta del entorno: **[CONFIRMAR]**)
**Alcance:** verificación local del demo offline de R3 y cierre documental de dependencias. No es certificación oficial ni validación de campo.

## 1. Evidencia local ejecutada

| Control | Comando / método | Resultado observado | Alcance y límite |
|---|---|---|---|
| Demo reproducible | `node hackathon/arquitectura/demo-evidence.mjs` | `fiveSynthetic=true`, `duplicate=true`, `abstention=true`, `baselinePresent=true`, `clearedInMemory=true`, `noStateFileAfter=true`, `pass=true` | Sólo cinco mensajes propios sintéticos en este proceso; no demuestra desempeño de campo. |
| Huellas de artefactos | `Get-FileHash hackathon/arquitectura/demo-evidence.mjs,hackathon/arquitectura/demo-evidence.log -Algorithm SHA256` | Script `45FE5233F660F03B273B7895B980A4CB14DB831B4D9519DA8F405EEBED4A95F9`; log `0A8A26751F391804470FFB2E7D45DBC4CE7B7DF181A420661E440846B92948B4` | Huellas del workspace observado; no sustituyen manifiesto formal del evento. |
| Estado persistente | `Test-Path hackathon/arquitectura/demo-state.json` | `False` | Ausencia de este archivo en esta ejecución; no prueba cachés, historial del terminal, memoria del SO u otros entornos. |
| Solicitudes de red en script | `Select-String ... -Pattern 'fetch|http://|https://|WebSocket|axios|node:https|node:http'` | Sin coincidencias | Revisión estática del script; no equivale a firewall ni captura de tráfico. |
| Fixture | Inspección de `demo-evidence.mjs` | Cinco textos con prefijo `Sintético:`; estado sólo en memoria; limpieza explícita | No se usaron datos personales, fotografías, audio, ubicación precisa ni fuentes externas. |

**Estado de seguridad local:** PASS condicionado al alcance anterior. Si se exige prueba de red, retención o borrado fuera de este proceso, mantener modalidad `fixture-only` sin aceptar entradas y marcar el requisito **[CONFIRMAR]**.

## 2. Checklist de seguridad y privacidad ejecutado

- [x] Fixture de cinco mensajes propios rotulados `Sintético`.
- [x] Sin APIs, `fetch`, WebSocket, telemetría ni dependencias de red en el script revisado.
- [x] Sin archivo `demo-state.json` antes/después (`Test-Path=False`); estructuras de memoria vaciadas por el proceso.
- [x] Salida sólo con IDs, categorías, confianza, estado de moderación y checks; no exporta texto original.
- [x] Abstención ante campos críticos faltantes (S4); posible duplicado queda sujeto a decisión humana.
- [x] Banner de demo: simulación, no alerta oficial, no publicación ni asignación de recursos.
- [ ] Firewall/captura de tráfico del equipo: **[CONFIRMAR]**; no se presenta como ejecutado.
- [ ] Cachés, historial del terminal y memoria del sistema operativo: **[CONFIRMAR]**; fuera del alcance del script.
- [ ] Retención y requisitos jurídicos aplicables: **[CONFIRMAR]** con la organización/asesoría correspondiente.
- [ ] Acceso multiusuario/autenticación de moderadora: **[CONFIRMAR]**; esta demo local no es sistema multiusuario.
- [ ] Aceptación formal de fixture-only, borrado y formato de evidencia: **[CONFIRMAR]**.

## 3. Matriz de dependencias, licencias y costos

No se inventan precios, acceso ni licencias. Una celda **[CONFIRMAR]** no es evidencia de gratuidad, disponibilidad o autorización.

| Recurso / componente | Uso en esta ronda | Licencia/origen verificable | Acceso/tamaño | Costo único | Costo mensual | Decisión segura |
|---|---|---|---|---:|---:|---|
| Node.js runtime local | Ejecutar `demo-evidence.mjs` | Versión/licencia del entorno: **[CONFIRMAR]** | Instalado localmente; versión: **[CONFIRMAR]** | **[CONFIRMAR]** | **[CONFIRMAR]** | Permitido sólo en entorno disponible y documentado. |
| Fixture de cinco mensajes | Prueba funcional | Autoría propia; sintético | Incluido en script; sin datos reales | 0 monetario observado, no compromiso comercial | 0 monetario observado, no compromiso comercial | Única fuente de datos asumida de origen conocido; rotular sintético. |
| Extracción y baseline | Reglas JavaScript del script | Autoría del equipo; no se acredita modelo IA | Código local, peso/hash del script arriba | 0 monetario observado | 0 monetario observado | Presentar como reglas/fallback, no como modelo IA. |
| Similaridad/duplicados | Clave local tipo/sector | Autoría del equipo; licencia externa: N/A | En memoria durante ejecución | 0 monetario observado | 0 monetario observado | Resultado sólo “posible duplicado”, revisión humana. |
| Paquetes/modelos externos | No usados en esta ejecución | **[CONFIRMAR]** si se incorporan | **[CONFIRMAR]** | **[CONFIRMAR]** | **[CONFIRMAR]** | Excluir hasta registrar nombre, versión, pesos, runtime y licencia. |
| Equipo y conectividad del evento | No necesarios para demo offline local | Disponibilidad/condiciones: **[CONFIRMAR]** | **[CONFIRMAR]** | **[CONFIRMAR]** | **[CONFIRMAR]** | No afirmar que están provistos. |
| Infraestructura, soporte y revisión legal (6 meses) | Fuera del MVP ejecutado | Proveedor/contrato: **[CONFIRMAR]** | **[CONFIRMAR]** | **[CONFIRMAR]** | **[CONFIRMAR]** | No prometer escalabilidad ni presupuesto. |
| Fuentes OSM/INDECI/COEN/municipales | No usadas en esta ejecución | URL, cobertura y licencia: **[CONFIRMAR]** | **[CONFIRMAR]** | **[CONFIRMAR]** | **[CONFIRMAR]** | Sustituir por fixture sintético hasta confirmar cada fuente. |

## 4. Confirmaciones que bloquean un pase incondicional

Siguen **[CONFIRMAR]**: significado oficial de R2–R4; aceptación de fixtures sintéticos y demo offline; retención, borrado y consentimiento; licencias y cobertura de fuentes; nombre/versión/licencia de cualquier modelo o paquete; formato, hora exacta y evidencia de construcción durante el evento; conectividad/equipamiento; y requisitos de autenticación o moderación.

La ejecución local pasa sus controles observables, pero no convierte esos pendientes en confirmaciones oficiales. Hasta recibir respuestas verificables, el estado correcto es **APTA CONDICIONES**, no certificada.
