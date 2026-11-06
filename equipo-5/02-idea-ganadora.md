# Idea ganadora — Voluntad Visible: Buzón efímero auditado

**Decisión A0:** seleccionada al alcanzar el tope de 5 rondas.
**Estado:** **APTA CONDICIONES**; no certificada como libre de bloqueantes desconocidos.
**Reto:** usar IA ante desafíos del Fenómeno del Niño sin presentar resultados no verificados como alertas oficiales.

## Idea

Voluntad Visible recibe reportes comunitarios de texto en una zona piloto y los transforma, de forma efímera, en tarjetas estructuradas para revisión humana. Extrae tipo de incidente, ubicación aproximada y campos faltantes; agrupa posibles duplicados temporal-espaciales; y se abstiene cuando faltan evidencia o confianza. Compara el flujo con un baseline de palabras clave. Cada tarjeta permanece “por confirmar” hasta la acción de una moderadora. No verifica la verdad, no asigna recursos, no publica alertas y no sustituye canales oficiales.

La demo usará cinco mensajes propios sintéticos, rotulados como sintéticos, salvo que exista consentimiento/licencia documentada. No se usarán nombres, teléfonos, fotografías, audio ni ubicación precisa. El modo previsto es offline y en memoria; si no puede demostrarse la no persistencia, sólo se ejecutará un fixture precargado sin aceptar entradas.

## Puntaje final de A2 (rúbrica oficial: 100)

| Criterio | Puntaje | Evidencia/límite |
|---|---:|---|
| Innovación y creatividad | 18/20 | Integración responsable de extracción, deduplicación, abstención y moderación; no se afirma novedad algorítmica absoluta. |
| Uso pertinente de IA | 23/25 | NLP estructurado, clustering temporal-espacial y abstención frente a baseline; el fixture no prueba desempeño de campo. |
| Impacto y relevancia | 17/20 | Apoya la revisión de reportes en lluvias/desbordes; no prueba adopción ni mejora operativa real. |
| Prototipo y funcionamiento | 14/15 | Flujo offline con duplicados, ambigüedad, baseline, abstención, moderación y borrado; el tiempo y borrado deben demostrarse. |
| Factibilidad y escalabilidad | 9/10 | Alcance pequeño y sin GIS/APIs externas; persistencia y evidencia de construcción durante el evento pendientes. |
| Presentación/pitch | 9/10 | Narrativa ruido → incidente trazable → revisión humana → borrado, con advertencia fija. |
| **Total** | **90/100** | **Supera el umbral de 85.** |

Ventaja documentada: 5 puntos sobre AlertaBarrio (85) en la evaluación de ronda 4. Quebrada Vigía obtuvo 82.

## Historial corto de rondas

- **Ronda 1:** de seis ideas, AlertaBarrio 88, Voluntad Visible 87 y Quebrada Vigía 86 fueron el top 3 ratificado por A0.
- **Ronda 2:** Voluntad Visible Moderada subió a 88 y lideró por menor dependencia geoespacial; se añadieron baseline, privacidad y moderación.
- **Ronda 3:** Voluntad Visible obtuvo 90; se introdujeron minimización, ubicación redondeada, métricas de fixture y retención/borrado condicionados.
- **Ronda 4:** se consolidó como “Buzón efímero auditado” con ejecución en memoria o fallback de fixture precargado; A2 mantuvo 90.
- **Ronda 5:** se cerró el diseño mínimo y se agotó el tope. A2 recomendó ratificarla como **APTA CONDICIONES**.

## Condiciones de no ratificación y riesgos residuales

1. **R2–R4:** su significado no aparece en los documentos revisados. [CONFIRMAR] que no exijan operación real, datos reales o prohíban fixtures.
2. **Fixture y licencias:** usar sólo mensajes creados por el equipo y rotulados sintéticos, o consentimiento/licencia documentada. [CONFIRMAR] aceptación formal.
3. **Memoria y borrado:** demostrar ejecución sin persistencia y borrado; si falla, aceptar sólo fixture precargado sin entradas.
4. **IA medible:** mostrar entrada → extracción/clustering → abstención, baseline, etiquetas y errores. No presentar precision/recall del fixture como desempeño de campo.
5. **Moderación:** mantener decisión humana, estado “revisado por moderadora” y ninguna publicación, alerta o asignación automática.
6. **Integridad del evento:** registrar qué función central se construye durante la hackathon y el formato de evidencia aceptado. [CONFIRMAR].
7. **Privacidad, horario, conectividad y entrega:** permanecen [CONFIRMAR] según `hackathon/01-analisis.md`.

## Reporte A0

- **Qué hice:** revisé las cinco rondas y el veredicto independiente de A2; seleccioné la mejor propuesta al agotarse el tope, conservando las condiciones de no ratificación.
- **Qué entrego y dónde:** este dossier en `hackathon/02-idea-ganadora.md`.
- **Supuestos:** la rúbrica de `hackathon/01-analisis.md` sigue vigente; el fixture propio sintético y la demo offline son admisibles salvo confirmación contraria.
- **[CONFIRMAR]:** R2–R4, aceptación de fixtures, licencias/consentimiento, memoria/borrado, privacidad/retención, moderación, horario/conectividad, formato de entrega y evidencia del desarrollo durante el evento.
