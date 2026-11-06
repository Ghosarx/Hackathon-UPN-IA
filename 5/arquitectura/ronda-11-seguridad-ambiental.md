# F3 — Ronda 11: seguridad ambiental y persistencia

**Fecha de auditoría local:** 2026-11-04; hora exacta: **[CONFIRMAR]**.  
**Resultado:** controles locales ejecutados. Se confirma limpieza y ausencia de artefactos residuales observables en el workspace; no se confirma aislamiento ambiental total. El modo seguro permanece `fixture-only`, sin entradas reales.

## 1. Controles ejecutados

| Control | Comando | Salida observada | Limitación / decisión |
|---|---|---|---|
| Conexiones TCP del entorno | `Get-NetTCPConnection -State Established ...` | Se observaron conexiones externas IPv6/IPv4 y conexiones locales del GUI; no se atribuyen al demo | El host no estaba aislado. No se puede afirmar “red desconectada” ni atribuir ausencia de tráfico al proceso Node. Mantener fixture-only y no datos reales. |
| Ejecución y limpieza efímera | `node hackathon/arquitectura/demo-evidence.mjs; ...` | `NODE_EXIT=0`; checks `fiveSynthetic`, `duplicate`, `abstention`, `baselinePresent`, `clearedInMemory`, `noStateFileAfter` verdaderos; `STATE_AFTER=False` | Prueba sólo referencias en memoria y archivo de estado de este script; no cubre memoria del SO, swap, historial o cachés de otros procesos. |
| Estado y temporales del workspace | `Get-ChildItem -Recurse` filtrando `demo-state.json`, `*.tmp`, `*.temp`, `*.cache` | `NO_MATCH` para los cuatro patrones; carpeta de arquitectura contiene sólo artefactos documentados | No inspecciona todos los directorios del sistema ni cachés de navegador/OS. |
| Dependencias de red estáticas | `Select-String demo-evidence.mjs` con `fetch`, URLs, WebSocket, axios, `node:http(s)` | Sin coincidencias; el script importa sólo `node:fs` y `node:path` | Revisión estática no sustituye captura/firewall. El host sí tiene red activa. |
| Persistencia fuera del script | `Test-Path hackathon/arquitectura/demo-state.json` antes/después | `False` | No prueba telemetría, logs de otros procesos, backups ni estado de otra ejecución. |

## 2. Estado de controles

- **PASS local:** demo termina con código 0, vacía estructuras en memoria, no crea `demo-state.json` y no deja temporales observables en el workspace.
- **NO CONFIRMADO:** aislamiento de red; el comando de conexiones mostró actividad de red del entorno, por lo que no se presenta como prueba de desconexión.
- **NO CONFIRMADO:** ausencia de cachés de navegador/OS, swap, historial de terminal y persistencia fuera del workspace.
- **Decisión segura:** fixture sintético precargado, sin aceptar entradas reales, sin publicación ni asignación de recursos; banner “Simulación; no alerta oficial”.

## 3. Límite y acción

Esta ronda reduce el riesgo en el proceso y el directorio observado, pero no cierra el blocker ambiental completo. Para cerrarlo formalmente se requiere ejecutar en entorno aislado aprobado (o aportar evidencia de firewall/captura y política de cachés aceptada), cuya disponibilidad y formato quedan **[CONFIRMAR]**. No convertir `pass=true` local en aprobación oficial ni habilitar F4 por esta evidencia parcial.
