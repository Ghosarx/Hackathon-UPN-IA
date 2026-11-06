# Revisión independiente A2 — Ronda 1

**Entregables auditados exclusivamente:** `hackathon/01-analisis.md`, `hackathon/02-idea-ganadora.md` y `hackathon/03-arquitectura.md`.
**Rol:** revisión arquitectónica independiente. **Veredicto:** REQUIERE CORRECCIONES antes de pase (82/100).

## 1. Puntuación según rúbrica

| Criterio | Máximo | A2 | Justificación verificable |
|---|---:|---:|---|
| Innovación y creatividad | 20 | 17 | El conjunto extracción + abstención + posibles duplicados + moderación humana es coherente y responsable. No se acredita novedad comparativa, por lo que no corresponde puntaje máximo. |
| Uso pertinente de IA | 25 | 20 | Hay funciones concretas (extracción, abstención, agrupación y baseline) y se explica el valor frente a reglas. Sin embargo, el modelo local, pesos, versión y licencia siguen como `[CONFIRMAR]`; el fallback de reglas no demuestra por sí solo uso de IA. |
| Impacto y relevancia | 20 | 16 | Responde a reportes comunitarios en lluvias/desbordes y explicita límites. No hay evidencia de usuarios, métricas de utilidad o mejora operativa real; sólo fixture sintético. |
| Prototipo y funcionamiento | 15 | 12 | El flujo, estados, casos de fixture, borrado y plan fixture-only están especificados. Falta implementación/evidencia ejecutada: no puede verificarse tiempo real, no persistencia ni borrado. |
| Factibilidad y escalabilidad | 10 | 8 | Alcance offline/en memoria y recorte de cuatro horas son plausibles. Acceso al stack, dependencias, costos, licencias y ventana/entrega oficiales no están confirmados. La ruta de seis meses es condicional, no plan financiado/validado. |
| Presentación/pitch | 10 | 9 | Guion suma 3 minutos, enseña límites y demo reproducible. Formato oficial de entrega y duración deben confirmarse. |
| **Total** | **100** | **82** | **Por debajo del umbral de 85.** |

## 2. Hallazgos y correcciones obligatorias

### C1 — IA no suficientemente concreta (bloqueante de pertinencia)
`03-arquitectura.md` deja el modelo local NLP y el modelo de similaridad en `[CONFIRMAR]` (sección 3), pese a describirlos como componentes centrales. **Corrección:** fijar antes de implementar nombre, versión, pesos, runtime, licencia y tamaño de cada modelo; documentar qué función ejecuta y su fallback. Si no existe modelo disponible/licenciado, declarar explícitamente que la función será reglas propias y ajustar la afirmación de uso pertinente de IA; no presentar reglas como modelo IA.

### C2 — Evidencia de funcionamiento inexistente (bloqueante de prototipo)
La arquitectura prescribe tests, fixture y borrado, pero no entrega resultados, capturas, logs ni comando reproducible. **Corrección:** ejecutar cinco mensajes sintéticos y adjuntar tabla entrada/salida esperada-observada, extracción, abstención, duplicado, baseline, acciones de moderación y prueba de borrado/no persistencia. Si no se prueba no persistencia, ejecutar sólo fixture precargado y rotular la limpieza como simulada.

### C3 — Construcción durante el evento no demostrada
Se distingue preexistente/nuevo y se proponen commits, pero la regla/formato de evidencia está `[CONFIRMAR]` y no hay registro de qué existe hoy. **Corrección:** inventariar preexistente con licencias y snapshot/hash inicial; definir la función central nueva; registrar commits con hora y capturas, conforme el formato que confirme la organización. No afirmar que algo fue construido en el evento sin esa evidencia.

### C4 — R2–R4 y aceptación del modo fixture no verificadas
Ambos documentos marcan el significado/exigencias de R2–R4 como `[CONFIRMAR]`, igual que aceptación formal de cinco fixtures sintéticos y fixture-only. **Corrección:** obtener confirmación escrita de organización sobre R2–R4, datos reales/operación requerida, fixtures y fallback offline; conservar evidencia o declarar el riesgo como no resuelto y no presentar pase.

### C5 — Costos, licencias y disponibilidad incompletos
No hay costo monetario estimado y cada modelo/paquete queda condicionado a verificación. **Corrección:** adjuntar matriz de dependencias (nombre, versión, licencia, origen, peso, acceso offline), costos de equipo/conectividad/infraestructura/soporte y supuestos. No afirmar gratuidad ni disponibilidad sin evidencia.

### C6 — Seguridad y privacidad requieren prueba, no sólo intención
Minimización, ubicación gruesa, memoria y banner están bien diseñados; pero no existe threat model, inspección de archivos/salida de red ni prueba de ausencia de persistencia. **Corrección:** incluir checklist ejecutado de red, almacenamiento temporal, logs, memoria y borrado; documentar qué metadatos quedan en el registro de auditoría y demostrar que no contienen texto original. Mantener moderación humana, sin alertas/asignación/publicación automáticas.

### C7 — Tiempo y entrega oficial no confirmados
Las cuatro horas se basan en una referencia del Detalle y el propio documento reconoce contradicciones de horario, sede y entrega en `01`. **Corrección:** confirmar cronograma/ventana, sede, formato y hora de entrega; preparar recorte fixture-only para una ventana menor y ensayo cronometrado de 3 minutos.

## 3. Aspectos aprobables condicionados

- La separación entre preexistente y nuevo está explícita y evita atribuciones falsas.
- El alcance reduce riesgo: datos sintéticos, ubicación aproximada, ejecución offline/en memoria y abstención ante incertidumbre.
- La IA propuesta tiene funciones delimitadas y baseline explicable; la moderadora conserva la decisión final.
- Se evita presentar tarjetas, métricas del fixture o resultados no verificados como alertas oficiales o rendimiento de campo.
- La escalabilidad se plantea como ruta condicional, no como promesa de despliegue inmediato.

## 4. Veredicto

**82/100 — REQUIERE CORRECCIONES.** No se concede pase porque la rúbrica exige evidencia de prototipo/funcionamiento y uso pertinente de IA, y los entregables dejan modelo, licencias, ejecución y reglas R2–R4 sin confirmar. Tras resolver C1–C7 con evidencia, se puede revaluar; el objetivo mínimo es superar 85 sin convertir `[CONFIRMAR]` en una afirmación absoluta.

## Cierre obligatorio

- **Qué revisé:** sólo `01-analisis.md`, `02-idea-ganadora.md` y `03-arquitectura.md`.
- **Qué entrego:** esta auditoría independiente A2, con puntuación 82/100, hallazgos C1–C7 y correcciones obligatorias.
- **Supuestos:** `[CONFIRMAR]` se trata como no verificado; fixture y arquitectura son propuestas, no evidencia de ejecución.
- **Pendientes para siguiente ronda:** resolver C1–C7, adjuntar pruebas reproducibles y revaluar la puntuación.
