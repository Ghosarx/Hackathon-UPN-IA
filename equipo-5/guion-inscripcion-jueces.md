# Guion de inscripción y presentación ante jueces
## Voluntad Visible — Buzón efímero auditado

**Estado de inscripción:** propuesta lista para presentar, sujeta a confirmar las reglas del evento, el uso permitido de ChatGPT/IA externa, el formato de entrega y la aceptación de datos sintéticos.

## 1. Resumen para el formulario

**Voluntad Visible** es un buzón comunitario efímero para organizar reportes ciudadanos relacionados con lluvias, desbordes u otros incidentes del Fenómeno del Niño. Recibe mensajes de texto y los convierte en tarjetas resumidas para revisión humana: tipo de incidente, zona aproximada, momento relativo, información faltante y posibles duplicados.

La herramienta no pretende verificar la verdad de un reporte ni sustituir a las autoridades. Su función es reducir el ruido inicial para que una persona moderadora pueda revisar mejor. Cuando el sistema no tiene suficiente información, se abstiene y muestra la incertidumbre. Los datos se mantienen en memoria durante la demostración y se eliminan al finalizar; si la no persistencia no puede demostrarse, la demo usa únicamente un fixture precargado con mensajes propios marcados **SINTÉTICOS**.

## 2. Guion oral — aproximadamente 2 minutos

> Durante una emergencia, muchas personas pueden describir el mismo problema de maneras distintas: una calle inundada, un puente bloqueado o una zona que necesita ayuda. El reto no es solamente recibir mensajes; es convertir ese ruido en información que una persona pueda revisar sin crear una falsa sensación de certeza.
>
> Por eso proponemos **Voluntad Visible, un buzón efímero auditado**.
>
> La herramienta recibe reportes de texto y los transforma en tarjetas estructuradas: qué tipo de incidente se menciona, en qué zona aproximada, cuándo ocurrió según el mensaje y qué información falta. También identifica posibles duplicados y compara el resultado con una línea base sencilla de palabras clave.
>
> Nuestra decisión más importante es saber cuándo no responder. Si el mensaje es ambiguo, insuficiente o no permite una agrupación razonable, el sistema se abstiene y lo marca para revisión. Ninguna tarjeta se publica automáticamente, no se envían alertas, no se despachan recursos y no se sustituye ningún canal oficial.
>
> La moderación humana es obligatoria. La persona revisora puede confirmar, corregir o rechazar una tarjeta. La demo utiliza cinco mensajes propios marcados **SINTÉTICOS**, no nombres, teléfonos, fotografías ni ubicaciones precisas. El flujo funciona offline y en memoria; al finalizar se muestra que no queda estado persistente.
>
> Si las reglas del evento permiten un modelo ChatGPT u otro modelo autorizado, lo usaríamos únicamente para apoyar la extracción estructurada, con versión, licencia y límites documentados, manteniendo el baseline determinista y la abstención como fallback. Si no está permitido o no puede verificarse su ejecución, presentamos honestamente la versión RULES-ONLY, sin llamarla IA generativa.
>
> El valor de Voluntad Visible no es prometer una alerta perfecta. Es ofrecer una capa pequeña, auditable y prudente que ayuda a ordenar reportes sin convertir una sugerencia automática en una decisión oficial.

## 3. Qué demostramos

1. Cinco mensajes propios marcados **SINTÉTICOS**.
2. Extracción de campos estructurados.
3. Detección de un posible duplicado.
4. Abstención ante un mensaje insuficiente o ambiguo.
5. Comparación contra baseline de palabras clave.
6. Revisión y decisión humana.
7. Ausencia de archivo de estado antes y después de la ejecución.
8. Limitaciones y riesgos visibles en pantalla.

## 4. Ventajas frente a una demo genérica

- **Prudencia:** abstención explícita en vez de inventar certeza.
- **Auditabilidad:** cada resultado puede rastrearse a una entrada sintética y a una regla/modelo documentado.
- **Bajo riesgo:** sin datos personales reales, publicación, despacho ni alertas oficiales.
- **Fallback:** funciona con reglas deterministas si el modelo no está disponible.
- **Escalabilidad gradual:** el MVP no depende de GIS, APIs externas ni conectividad.

## 5. Desventajas y cómo las comunicamos

- No verifica que un reporte sea verdadero.
- Cinco mensajes sintéticos no demuestran desempeño en campo.
- La versión actual puede ser RULES-ONLY si no se autoriza o verifica un modelo.
- No prueba adopción institucional ni mejora operativa real.
- La aceptación del fixture, retención, formato y uso de ChatGPT requiere confirmación del evento.

## 6. Respuestas breves para preguntas del jurado

**¿Es una alerta oficial?**
No. Es una herramienta de organización y revisión humana. No publica ni despacha nada.

**¿Usa datos reales?**
No en el MVP. Usamos mensajes propios marcados **SINTÉTICOS**.

**¿Por qué llaman IA al sistema?**
Solo lo llamaremos IA si el modelo, versión, runtime y licencia están documentados y permitidos. De lo contrario, lo presentamos como RULES-ONLY con baseline, abstención y moderación.

**¿Qué pasa si el modelo se equivoca?**
Se muestra la incertidumbre, se compara con baseline y la moderadora debe confirmar o corregir. El sistema no actúa automáticamente.

**¿Qué pasa si no hay conexión?**
La demo prevista es offline. El fallback es un fixture precargado y reglas deterministas.

**¿Qué ocurre con los datos al terminar?**
El objetivo es memoria efímera y limpieza comprobable. Si no puede probarse, no se aceptan entradas y se usa únicamente el fixture precargado.

## 7. Confirmaciones necesarias antes de enviar

- [CONFIRMAR] Que el evento permite usar ChatGPT u otro modelo externo.
- [CONFIRMAR] Modelo, versión, runtime y licencia que se declararán.
- [CONFIRMAR] Aceptación formal de fixtures sintéticos.
- [CONFIRMAR] Formato y hora de entrega.
- [CONFIRMAR] Requisitos R2–R4, privacidad, retención y evidencia del trabajo durante el evento.

**Nota de integridad:** no afirmar que estas confirmaciones existen hasta recibirlas por escrito.
