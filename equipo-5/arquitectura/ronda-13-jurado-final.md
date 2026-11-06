# F3 — Ronda 13: jurado final tras R8–R12

**Timestamp de decisión:** 2026-11-04T11:45:33.4234022-05:00 (entorno local; no es timestamp oficial del evento)
**Base:** R3–R12, incluyendo ejecución local, auditorías ambientales, confirmaciones pendientes y estrés sintético.
**Regla de puerta:** PASS sólo si score ≥80/100, cero blockers críticos y 100% de controles obligatorios evidenciados. Score y decisión son independientes.

## 1. Puntuación final

| Criterio | Peso | Puntaje | Justificación verificable |
|---|---:|---:|---|
| Evidencia ejecutada | 25 | 18 | Demo y estrés con logs/checks; controles oficiales, red completa, retención y formato no evidenciados |
| Seguridad | 20 | 8 | Minimización y revisión estática; host con red activa, caches/OS/swap/telemetría y acceso multiusuario pendientes |
| Reproducibilidad | 20 | 18 | Demo y R12 repetibles con salidas idénticas; sólo fixtures rules-only, sin corpus independiente |
| UX | 15 | 7 | Abstención, advertencias y revisión humana visibles; sin prueba de accesibilidad/usabilidad de interfaz final |
| Trazabilidad | 10 | 6 | Hashes y fechas locales; sin Git ni registro aceptado de trabajo dentro del evento |
| Riesgos y rollback | 10 | 6 | Riesgos y contención documentados; confirmaciones contractuales y jurídicas siguen abiertas |
| **TOTAL** | **100** | **63** | **Inferior a 80** |

## 2. Ventajas

- Demo y estrés sintético reproducibles, offline a nivel de script, con siete escenarios adicionales.
- Abstención ante entradas ambiguas, vacías y lenguaje potencialmente peligroso.
- Posibles duplicados se retienen para revisión y no generan órdenes operativas.
- Fixtures propios, advertencias de simulación, límites y rollback documentados.

## 3. Desventajas y blockers críticos

1. **Score 63/100**, bajo el umbral de 80.
2. R2–R4, aceptación fixture-only, formato/hora/canal de entrega y requisitos de datos reales siguen `[CONFIRMAR]` sin respuesta oficial.
3. Red del host activa; no existe evidencia de aislamiento, firewall, cachés, memoria del SO, swap o telemetría.
4. Retención, borrado externo, consentimiento y autenticación/acceso de moderadora no están verificados.
5. No hay Git ni registro aceptado que pruebe construcción dentro de la ventana del evento.
6. El sistema es **RULES-ONLY**; no existe modelo IA verificable, licencia, runtime ML ni benchmark independiente.
7. No hay evidencia de accesibilidad/usabilidad de una interfaz final ni validación de campo.

## 4. Decisión separada de la puntuación

**DECISIÓN: NO PASS / BLOCKED.** La puerta F3 no alcanza el umbral ni satisface controles obligatorios; los blockers son críticos y no se pueden sustituir por protocolos o declaraciones.

**F4: BLOCKED.** No existe PASS explícito habilitante; no se autoriza iniciar o presentar el prototipo como siguiente etapa. Una reapertura requiere evidencia nueva para cada blocker, confirmaciones oficiales verificables y nueva acta con timestamp.
