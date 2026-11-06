# Arquitectura MVP — Voluntad Visible

**Estado:** diseño construible, **APTA CONDICIONES** heredado de `02-idea-ganadora.md`. No es una alerta oficial, no verifica la verdad, no asigna recursos ni sustituye canales de emergencia. Todas las tarjetas y métricas de la demo usan datos propios **SINTÉTICOS** claramente rotulados.

## 1. Alcance y principios

Voluntad Visible es un buzón efímero para una zona piloto: recibe texto, lo convierte en una tarjeta estructurada para revisión humana, propone agrupaciones de posibles duplicados y se abstiene ante ambigüedad o baja confianza. La tarjeta queda `por confirmar` hasta la acción explícita de una moderadora. No se usan nombres, teléfonos, fotos, audio ni coordenadas precisas.

Principios de seguridad: ejecución offline y en memoria; minimización; ubicación sólo aproximada (barrio/sector o cuadrícula gruesa); sin persistencia, envío de red ni publicación; banner visible “**DEMO CON DATOS SINTÉTICOS — no sustituye alertas ni canales oficiales**”; borrado explícito al terminar cada caso. Si no puede demostrarse la no persistencia, se deshabilita la entrada y se presenta únicamente un fixture precargado.

## 2. Diagrama de componentes y flujo

```text
[Fixture SINTÉTICO / entrada de texto]
              |
              v
 [Validador + minimización en memoria]
              |
              +--> [Baseline: palabras clave, reglas explicables]
              |
              v
 [Extractor NLP local: tipo, sector aproximado,
  tiempo relativo, campos faltantes, confianza]
              |
              v
 [Abstención/guardarraíl] -- baja confianza/ambigüedad --> [requiere datos,
              |                                               no clasificar]
              v
 [Agrupador temporal-espacial de posibles duplicados]
              |
              v
 [Tarjeta efímera: por confirmar + trazabilidad de método]
              |
              v
 [Moderadora: confirmar / corregir / descartar]
              |
              +--> [Métricas sólo del fixture y comparación baseline]
              v
 [Borrado de memoria + registro local mínimo de demo]
```

El registro de auditoría de la demo contiene sólo `id efímero`, timestamp de ejecución, versión de reglas/modelo y acción de moderación; no contiene texto original después del borrado. Puede omitirse si la implementación no prueba su seguridad.

## 3. Tecnologías y razones

| Capa | Elección MVP | Razón / condición |
|---|---|---|
| Interfaz | Aplicación web local ligera (HTML/CSS/TypeScript o Python + UI local) | Flujo visible en pitch, sin servidor público. Elegir la tecnología que el equipo domine; framework exacto **[CONFIRMAR]**. |
| Dominio | Módulos puros de Python o TypeScript, funciones deterministas | Testeable offline y fácil de construir durante el evento. |
| IA/NLP | Modelo local pequeño previamente disponible **[CONFIRMAR nombre, licencia y pesos]**; fallback a reglas/plantillas | Evita enviar reportes a terceros. La ruta fallback mantiene demo reproducible y etiqueta que no es desempeño de campo. |
| Similaridad | TF-IDF/Jaccard o embeddings locales **[CONFIRMAR modelo/licencia]**, con umbral fijo documentado | Posibles duplicados explicables; no requiere GIS. |
| Datos | JSON/objetos en memoria; no SQLite ni nube en MVP | Facilita borrado y minimización. Fixture de cinco mensajes SINTÉTICOS. |
| Pruebas | Tests unitarios y fixture reproducible | Evidencian extracción, duplicado, abstención, baseline y borrado. |

No se presupone acceso a APIs, GPU, internet, cuentas, servicios de mapas, nube ni licencias. Todo acceso/instalación queda **[CONFIRMAR]** antes del evento. Dependencias con licencia permisiva deben verificarse; si no, usar reglas propias.

## 4. Funciones de IA y modelo por función

1. **Extracción estructurada:** texto → tipo de incidente (inundación/desborde, aniego, vía bloqueada u “otro”), sector aproximado, momento relativo y campos faltantes. Modelo local NLP **[CONFIRMAR]**; fallback regex/listas. Mostrar siempre confianza y evidencia textual parcial no sensible.
2. **Abstención calibrada:** función determinista sobre confianza, campos faltantes y conflicto entre señales. Por debajo del umbral devuelve `requiere revisión/datos`, nunca una categoría afirmada. El umbral y ejemplos se fijan en configuración versionada.
3. **Agrupación de duplicados:** similitud textual + ventana temporal y mismo sector grueso. TF-IDF/Jaccard o embedding local **[CONFIRMAR]**; fallback reglas. La salida es “posible duplicado”, nunca consolidación irreversible.
4. **Baseline:** palabras clave y reglas iguales para todos los mensajes; sirve como comparación del fixture, no como detector fiable de emergencias.
5. **Moderación asistida:** IA sólo propone; la persona confirma, corrige o descarta. El estado final muestra “revisado por moderadora”, usuario de demo y hora.

No se calcula precisión/recall como desempeño real: sólo conteos observados en el fixture sintético, con limitaciones visibles.

## 5. MVP en ventana conservadora

La ventana operativa estimada es **4 horas de construcción/demostración** (referencia 14:30–18:30 del Detalle), pero horario, sede y obligatoriedad son **[CONFIRMAR]**; si la ventana oficial es menor, el recorte es fixture precargado + un flujo extremo a extremo.

- **0:00–0:30:** congelar alcance, confirmar licencias/accesos, crear cinco mensajes sintéticos rotulados.
- **0:30–1:30:** implementar modelo de tarjeta, minimización, estados y borrado en memoria.
- **1:30–2:30:** integrar extracción local/fallback, baseline y abstención.
- **2:30–3:15:** agrupación temporal-espacial, vista de moderación y métricas del fixture.
- **3:15–3:45:** pruebas de no persistencia, etiquetas y guion de fallback.
- **3:45–4:00:** congelar build y ensayo del pitch de 3 minutos.

**Definition of done:** cinco entradas sintéticas; al menos un caso normal, un posible duplicado, uno ambiguo/abstenido; comparación baseline; confirmación/corrección/descartado por moderadora; evidencia de borrado o fixture-only; advertencia fija; todo reproducible sin red.

## 6. Preexistente vs nuevo en el evento

**Preexistente permitido (declarar en entrega):** estructura inicial del repositorio, conocimientos del equipo, plantillas de UI, scripts de ejecución, documentación contractual y cualquier librería/modelo con licencia verificada **[CONFIRMAR]**. No declarar como construido durante el evento aquello que ya existía.

**Nuevo durante la hackathon (función central):** flujo Voluntad Visible integrado: tarjeta efímera, extracción/abstención, agrupación de duplicados, baseline, moderación y borrado/fixture-only. Registrar commits, hora y captura de cambios; formato de evidencia y alcance de “función central” **[CONFIRMAR]** con organización.

## 7. Demo y evidencia para la rúbrica

Guion de 3 minutos (duración oficial y formato de entrega **[CONFIRMAR]**): (1) 20 s problema y límites; (2) 50 s ingresar/seleccionar cinco mensajes **SINTÉTICOS**; (3) 45 s extracción y baseline lado a lado; (4) 35 s duplicado y abstención; (5) 25 s moderadora confirma/corrige/descarta; (6) 25 s borrar y mostrar banner/no persistencia; (7) 20 s impacto esperado, no probado, y plan de escala.

Evidencia: video/capturas de terminal offline, tests, fixture versionado, tabla de casos esperados/observados, commit log y checklist de licencias. Nunca presentar tarjetas como reportes verdaderos ni resultados del fixture como alertas o rendimiento de campo.

## 8. Riesgos y plan B

| Riesgo | Mitigación / plan B |
|---|---|
| Modelo/acceso o licencia no confirmado | Reglas locales + plantillas; declarar limitación. |
| Internet, cuenta, GPU o paquete ausente | Bundle local probado; fixture precargado sin aceptar entradas. |
| No se demuestra borrado/no persistencia | Deshabilitar captura; sólo fixture y mostrar limpieza de memoria simulada, etiquetada como tal. |
| Ubicación ambigua o sensible | Sector grueso y estado “requiere datos”; nunca coordenada precisa. |
| Agrupación errónea | Mostrar “posible”, umbral conservador y decisión humana. |
| Confusión con alerta oficial | Banner persistente y frase de no sustitución en cada vista/pitch. |
| Reglas R2–R4 desconocidas | **[CONFIRMAR]** significado y exigencias; conservar fallback que no usa datos reales ni operación real. |
| Cambio de horario/entrega o conectividad | **[CONFIRMAR]** cronograma; entregar build local y documentación exportada. |

## 9. Fuentes y verificaciones pendientes

- `hackathon/01-analisis.md` (hechos, rúbrica, contradicciones de Bases/Detalle): verificar con organización tamaño de equipo, horario/sede, entregables, jurado, datos/IP, licencias y procedimiento de descalificación.
- `hackathon/02-idea-ganadora.md` (A2 y condiciones): confirmar formalmente R2–R4, fixtures sintéticos, memoria/borrado, moderación y evidencia de construcción.
- Bases y Detalle PDF originales: confirmar páginas gráficas no extraíbles, versión vigente, ventana de desarrollo y aceptación del modo fixture-only.
- Documentación/licencia de cada modelo, paquete y fuente **[CONFIRMAR]**; si no hay evidencia, no incluirlo.

## 10. Costos, licencias y escalabilidad <6 meses

**MVP:** costo monetario no estimado; no afirmar gratuidad. Usar equipo y recursos disponibles sólo tras confirmar acceso. Licencias de software/modelos/datasets **[CONFIRMAR]**; fixture creado por el equipo y marcado SINTÉTICO evita dependencia de dataset externo. No incorporar datos personales.

**Ruta <6 meses (sujeta a presupuesto, seguridad y aprobación):** mes 1 pruebas con más fixtures sintéticos y accesibilidad; meses 2–3 revisión de privacidad, threat model, evaluación con datos consentidos y moderadoras; meses 4–6 piloto controlado con persistencia cifrada opt-in, retención definida, monitoreo de abstención y revisión legal. Sólo después evaluar despliegue, integración con canales oficiales y modelos más grandes. La arquitectura mantiene adaptadores intercambiables (modelo local, almacén, interfaz) sin convertir el MVP en alerta automática. Costos de infraestructura, soporte, revisión legal, modelos y conectividad son **[CONFIRMAR]**.

## Cierre

- **Qué hice:** convertí la idea APTA CONDICIONES en un MVP offline, efímero y moderado, con diagrama, componentes, IA por función, ventana conservadora, demo, riesgos, licencias y ruta de escala.
- **Dónde:** `hackathon/03-arquitectura.md`.
- **Supuestos:** sólo se usan cinco mensajes propios SINTÉTICOS; el horario de 4 h es referencia del Detalle y no regla; herramientas y acceso no se dan por disponibles.
- **Pendientes:** confirmar R2–R4, horario/entrega, licencias/modelos, aceptación de fixture-only, evidencia de construcción, privacidad/retención y costos con la organización.

## Addendum de corrección — Ronda 1 (C1–C7)

Este addendum responde a la auditoría A2 de `hackathon/arquitectura/ronda-1-a2.md`. No convierte pendientes en hechos: donde no existe confirmación o ejecución se conserva **[CONFIRMAR]** y se marca como criterio de bloqueo para presentar el prototipo.

### C1. Registro de modelo y puerta de licencia

Antes de implementar se debe completar este registro, firmado por el equipo y adjuntado al repositorio:

| Función | Nombre/modelo y versión | Runtime/peso | Licencia/origen | Acceso offline | Fallback y regla de presentación |
|---|---|---|---|---|---|
| Extracción NLP | **[CONFIRMAR]**; no se asume modelo | **[CONFIRMAR]** | **[CONFIRMAR]** | **[CONFIRMAR]** | Si no hay modelo licenciado, usar reglas propias y declarar “extracción por reglas”, sin llamarla IA. |
| Similaridad/duplicados | **[CONFIRMAR]** (o TF-IDF/Jaccard propio) | **[CONFIRMAR]** | **[CONFIRMAR]** | **[CONFIRMAR]** | Si el modelo no está disponible, sólo similitud explicable y etiqueta “posible”. |
| Abstención | reglas propias versionadas | N/A | autoría del equipo | sí | Umbral conservador; nunca afirma alerta. |

La demo no se anuncia como uso de IA hasta que nombre, versión, pesos, runtime, licencia y acceso hayan sido verificados. El baseline de palabras clave permanece separado y rotulado como baseline, no como IA.

### C2. Evidencia reproducible de funcionamiento

Se incorpora un protocolo obligatorio `demo-evidence` (a ejecutar cuando exista build, sin datos reales):

```text
1. Desconectar red / bloquear solicitudes salientes y registrar fecha-hora.
2. Cargar fixture propio de cinco mensajes SINTÉTICOS rotulados.
3. Ejecutar: validación → extracción/modelo o fallback declarado → baseline
   → abstención → agrupación → moderación → borrado.
4. Exportar sólo tabla de resultados sin texto original y captura de estados.
5. Inspeccionar directorio de trabajo, temporales, logs y solicitudes de red.
6. Vaciar estructuras en memoria; repetir inspección y documentar resultado.
```

Tabla que debe adjuntarse con valores observados (hasta ejecutarse queda **PENDIENTE**, no evidencia):

| Caso sintético | Resultado esperado | Resultado observado | Baseline | Estado moderación | Borrado/no persistencia |
|---|---|---|---|---|---|
| Incidente claro | tipo + sector grueso | **[PENDIENTE DE EJECUCIÓN]** | salida | por confirmar | **[PENDIENTE]** |
| Posible duplicado | grupo “posible” | **[PENDIENTE DE EJECUCIÓN]** | salida | confirmar/corregir | **[PENDIENTE]** |
| Ambiguo | abstención | **[PENDIENTE DE EJECUCIÓN]** | salida | requiere datos | **[PENDIENTE]** |
| Otro tipo | otro/revisión | **[PENDIENTE DE EJECUCIÓN]** | salida | descartar | **[PENDIENTE]** |
| Campo faltante | requiere datos | **[PENDIENTE DE EJECUCIÓN]** | salida | corregir | **[PENDIENTE]** |

Sin esta tabla observada, capturas y comando reproducible no se debe afirmar que el prototipo funciona. Si no se prueba la no persistencia, la demo debe ser **fixture-only** sin aceptar entradas y cualquier limpieza se rotula como simulada.

### C3. Inventario preexistente y evidencia de construcción

Se añade un manifiesto inicial antes de iniciar (`preexistente-manifest`): rutas, tamaño/hash, fecha, autoría, licencia/origen y si cada archivo es preexistente. El manifiesto real y hashes son **[PENDIENTE DE EJECUCIÓN]**; no se inventan aquí. La función central nueva queda definida sin ambigüedad como integración de: tarjeta efímera + extracción/abstención + agrupación posible + baseline + moderación + borrado/fixture-only.

Durante el evento se conservarán commits con hora, diff y captura de cada hito. La forma de entrega, zona horaria y herramienta de registro son **[CONFIRMAR]** con la organización. Hasta recibir esa confirmación, el equipo puede registrar internamente, pero no afirmar cumplimiento formal del evento.

### C4. Confirmación de R2–R4 y fixture-only

Se agrega una ficha de confirmación para enviar a la organización: “¿Qué significan R2, R3 y R4? ¿Exigen datos reales, operación real o permiten fixture propio sintético? ¿Se acepta demo offline/fixture-only si no se prueba no persistencia? ¿Qué evidencia y formato son obligatorios?”. Estado de respuesta: **[CONFIRMAR]**. Se conserva la arquitectura segura aunque la respuesta no llegue; en tal caso se declara riesgo no resuelto y no se presenta como pase. No se incorporarán datos reales para intentar resolverlo.

### C5. Matriz de dependencias y costos (sin inventar precios)

| Recurso | Identificación/licencia | Acceso y tamaño | Costo único | Costo mensual | Estado |
|---|---|---|---:|---:|---|
| Runtime local | **[CONFIRMAR]** | **[CONFIRMAR]** | **[CONFIRMAR]** | **[CONFIRMAR]** | pendiente |
| Modelo NLP | **[CONFIRMAR]** | **[CONFIRMAR]** | **[CONFIRMAR]** | **[CONFIRMAR]** | pendiente |
| Similaridad | propio o **[CONFIRMAR]** | **[CONFIRMAR]** | **[CONFIRMAR]** | **[CONFIRMAR]** | pendiente |
| Equipo/conectividad del evento | **[CONFIRMAR]** | **[CONFIRMAR]** | **[CONFIRMAR]** | **[CONFIRMAR]** | pendiente |
| Piloto 6 meses: infraestructura, soporte y revisión legal | **[CONFIRMAR]** | **[CONFIRMAR]** | **[CONFIRMAR]** | **[CONFIRMAR]** | pendiente |

Los valores no se presentan como gratuitos ni disponibles. Sólo el fixture creado por el equipo se considera de origen conocido; cualquier paquete/modelo sin licencia documentada se excluye y activa fallback.

### C6. Checklist de seguridad ejecutable

Antes de cualquier demo se marcará cada ítem con comando/captura y resultado: (a) red desconectada o firewall local verificado; (b) búsqueda de archivos temporales/cache fuera del directorio permitido; (c) inspección de logs para asegurar ausencia de texto original; (d) revisión de memoria/objetos antes y después de `clear()`; (e) búsqueda de exportaciones, telemetría y solicitudes salientes; (f) confirmación de que el registro sólo conserva ID efímero, hora, versión y acción; (g) borrado y segunda inspección. Evidencia de ejecución: **[PENDIENTE DE EJECUCIÓN]**. Si algún ítem falla, se aplica fixture-only y se informa la limitación. No hay publicación, alerta ni asignación automática.

### C7. Ventana, entrega y ensayo

La ventana de 4 horas sigue siendo una hipótesis del Detalle, no un dato confirmado. Se mantiene un recorte de 15 minutos para ventana menor: fixture precargado, tres tarjetas, una abstención, una agrupación, moderación y banner. Cronograma, sede, formato/hora de entrega, duración oficial y zona horaria son **[CONFIRMAR]**. El pitch se ensayará con cronómetro y el resultado (duración observada y captura) queda **[PENDIENTE DE EJECUCIÓN]**; no se declara cumplimiento hasta tener confirmación y evidencia.

### Criterio de pase tras corrección

La siguiente revisión debe aceptar sólo si: registro de modelo/licencia completo o fallback honestamente rotulado; tabla observada y capturas reproducibles; manifiesto/hash y commits; respuesta escrita R2–R4/fixture; matriz de costos; checklist de seguridad ejecutado; y ventana/formato confirmados. Hasta entonces la propuesta sigue **APTA CONDICIONES**, no certificada y sin resultados oficiales.
