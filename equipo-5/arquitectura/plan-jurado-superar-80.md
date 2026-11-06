# Plan adversarial del jurado para superar 80/100

**Estado:** plan de remediación; no es evidencia ejecutada ni aprobación.
**Punto de partida:** R13 = 63/100, NO PASS/BLOCKED. Los blockers oficiales siguen abiertos hasta contar con respuestas o artefactos verificables.

## Ventajas actuales

- Fixture sintético y alcance offline documentado.
- Abstención ante entradas ambiguas, vacías y potencialmente peligrosas.
- Posibles duplicados retenidos para revisión humana.
- Demo y estrés reproducibles con comandos, salidas y checks.
- Advertencia de simulación y rollback explícitos.

## Desventajas actuales

- Implementación RULES-ONLY: no hay modelo IA, runtime, licencia ni benchmark independiente.
- Host con red activa; no se demostró aislamiento, firewall, cachés, swap, memoria del SO ni telemetría.
- Retención, borrado externo, consentimiento y acceso multiusuario sin verificación.
- R2–R4, fixture-only, formato/hora/canal de entrega y trabajo dentro de ventana oficial sin confirmación.
- Sin Git o registro aceptado de autoría temporal.
- UX/accesibilidad y validación de campo sin prueba ejecutada.

## Matriz de pruebas mínimas y crédito objetivo

La siguiente meta suma **82/100**, dejando margen sobre el umbral 80. Cada crédito exige comando exacto, exit code, salida/artefacto, fecha y alcance; una intención o checklist no puntúa como ejecución.

| Criterio | Peso | Crédito objetivo | Prueba mínima requerida |
|---|---:|---:|---|
| Evidencia ejecutada | 25 | 20 | Ejecutar matriz end-to-end y anexar logs/capturas/hash; demostrar cada control obligatorio, no sólo protocolo |
| Seguridad | 20 | 16 | Captura de egress/firewall; revisión de cachés/temporales/swap/telemetría; prueba de retención/borrado; control de acceso de moderadora |
| Reproducibilidad | 20 | 18 | ≥3 corridas idénticas, corpus sintético independiente ≥10 casos y comparación baseline/propuesta/abstención |
| UX | 15 | 12 | Evidencia reproducible de teclado/foco, contraste, lector, mensajes de abstención y prueba de flujo con guion |
| Trazabilidad | 10 | 8 | Git/commits o formato alternativo aceptado por la organización con timestamps, hashes y ventana oficial |
| Riesgos/rollback | 10 | 8 | Threat model actualizado y rollback ejecutado ante falso duplicado, salida peligrosa, persistencia o red inesperada |
| **Total objetivo** | **100** | **82** | Sólo evaluable tras evidencia y confirmaciones |

## Criterios de descalificación automática

Cualquiera mantiene la puerta bloqueada, aunque el cálculo numérico supere 80:

1. Score <80 o cualquier blocker crítico abierto.
2. Presentar reglas como IA, o afirmar precisión/generalización sin benchmark independiente.
3. Usar datos reales sin consentimiento, licencia y minimización demostrables.
4. Persistir texto/ubicación sin retención autorizada o no poder demostrar el modo fixture-only seguro.
5. Emitir evacuación, despacho, publicación o notificación automática.
6. Red/telemetría no controlada cuando el alcance exige aislamiento u offline.
7. No obtener confirmación oficial de R2–R4, aceptación fixture-only, formato de entrega o ventana cuando sean requisitos del evento.
8. No probar trabajo nuevo en la ventana oficial cuando la organización lo exija.
9. Omitir comandos, salidas, artefactos o límites de una evidencia esencial.

## Regla de decisión

Sólo emitir PASS con score ≥80, cero descalificadores y 100% de controles obligatorios evidenciados. El acta debe separar score de decisión y registrar timestamp. Sin eso: **NO PASS/BLOCKED; F4 no se habilita**. Este documento es únicamente un plan: no cierra ningún blocker por protocolo.
