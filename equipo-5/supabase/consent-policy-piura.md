# Política de consentimiento — Ellie Life Enterprise / Piura

## 1. Finalidad

Ellie Life Enterprise procesa reportes comunitarios para clasificarlos, detectar posibles coincidencias y preparar comunicaciones preventivas. El sistema no reemplaza a las autoridades y no garantiza la verdad de un reporte.

## 2. Consentimientos separados

La aplicación debe solicitar por separado:

- **Procesamiento del reporte:** necesario para recibir y revisar el incidente.
- **Uso de ubicación:** opcional; usa ubicación aproximada y puede revocarse.
- **Notificaciones push:** opcional; solo usuarios suscritos.
- **SMS:** opcional; nunca se activa por defecto.
- **Procesamiento con IA:** informado; la IA puede abstenerse y siempre existe fallback.
- **Compartir ubicación con una autoridad o contacto:** requiere confirmación específica cada vez.

No se permite consentimiento preseleccionado ni consentimiento general ambiguo.

## 3. Notificaciones cercanas

- Radio inicial configurable: máximo **2,000 metros**, con valores menores permitidos.
- Solo se notifica a usuarios con consentimiento vigente y suscripción activa.
- El mensaje no revela identidad, teléfono ni ubicación exacta del reportante.
- El texto recomendado es: “Se reportó una posible necesidad de asistencia cerca de tu zona. Consulta el croquis y los canales oficiales.”
- Toda notificación requiere aprobación de una persona moderadora.

## 4. Alertas a autoridades

Las comunicaciones a autoridades solo se envían cuando:

1. el incidente está registrado;
2. existe evidencia mínima;
3. una persona moderadora lo aprueba;
4. se identifica la autoridad destinataria;
5. queda un evento de auditoría.

La IA nunca contacta autoridades automáticamente.

## 5. Datos y retención

- Recopilar únicamente lo necesario.
- No exigir nombre, DNI ni dirección exacta para reportar.
- Ubicación aproximada por defecto.
- Incidentes no verificados: retención máxima sugerida de 24 horas, configurable por administrador.
- Alertas: caducidad obligatoria.
- El usuario puede revocar permisos, eliminar sus reportes y eliminar sus contactos.
- La clave DeepSeek nunca se almacena en la aplicación, base de datos o navegador.

## 6. Roles

- **Ciudadano:** crea reportes, gestiona su consentimiento y recibe notificaciones opt-in.
- **Moderador:** revisa evidencia, clasifica, crea casos y aprueba borradores.
- **Autoridad:** consulta incidentes autorizados y recibe comunicaciones aprobadas.
- **Administrador:** configura autoridades, retención, radios, roles y auditoría.

## 7. Revisión y revocación

La pantalla de privacidad debe mostrar el estado de cada consentimiento, su fecha y acciones para revocarlo. Revocar SMS o push no elimina automáticamente los reportes históricos; el usuario debe contar con una acción separada para eliminarlos.
