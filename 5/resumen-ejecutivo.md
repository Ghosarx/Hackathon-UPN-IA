# Resumen ejecutivo — Voluntad Visible

## Propuesta

**Voluntad Visible — Buzón efímero auditado** organiza reportes comunitarios sobre lluvias, desbordes y otros incidentes en tarjetas estructuradas para revisión humana.

## Problema

Durante una emergencia, varios mensajes pueden describir el mismo incidente con información incompleta, ambigua o repetida. El reto es ordenar esos reportes sin convertir una inferencia automática en una alerta oficial.

## Solución MVP

El sistema recibe mensajes de texto y muestra:

- tipo de incidente;
- zona aproximada, nunca ubicación precisa;
- información faltante;
- posibles duplicados temporales y espaciales;
- comparación contra una baseline de palabras clave;
- abstención cuando no existe evidencia suficiente;
- decisión final de una moderadora humana.

La demo utiliza mensajes propios marcados **SINTÉTICOS**, funciona offline y mantiene el estado en memoria. Si la no persistencia no puede demostrarse, se utiliza un fixture precargado sin aceptar entradas.

## Límites explícitos

No verifica la verdad de un reporte, no publica alertas, no asigna recursos, no realiza despachos y no sustituye canales oficiales. La versión actualmente evidenciada es `RULES-ONLY`; no se afirma el uso de un modelo ChatGPT hasta confirmar autorización, versión, runtime y licencia.

## Evidencia disponible

Se ejecutaron demos repetibles con duplicados, abstención, baseline, moderación, limpieza de memoria y escenarios sintéticos de estrés. La evaluación adversarial final obtuvo **63/100 — REJECT / NO PASS / BLOCKED** porque siguen abiertos confirmaciones oficiales, IA verificable, aislamiento ambiental y trazabilidad del evento.

## Próximo desbloqueo

Para activar el prototipo se requiere confirmar las reglas del evento y alcanzar **≥80/100**, cero bloqueadores críticos y 100% de controles obligatorios evidenciados. Las tareas posteriores son F4 prototipo, F5 revisión web y F6 pitch/dossier.

**Estado:** propuesta preparada para inscripción, pero sujeta a confirmaciones `[CONFIRMAR]` listadas en [PENDIENTES.md](PENDIENTES.md).
