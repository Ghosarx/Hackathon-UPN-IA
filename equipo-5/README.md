# GRUPO ELLIE GRUPO 5

# Equipo 5

- **Integrantes:**
  - FABRIZZIO PAOLO PELAEZ BAUTISTA
  - OSIRIS DE LOS ANGELES MEDINA ACEVEDO
  - LUIS ADRIANO CABALLERO OLIVERA
  - CAROLINE SOFIA SOSA LEDESMA

- **Descripción del proyecto:**
  Ellie Life Enterprise es una Progressive Web App (PWA) móvil de seguridad ciudadana y evacuación ante emergencias por el Fenómeno El Niño en Piura. Integra mapas interactivos con croquis vectoriales y rutas a zonas seguras (+24m s/río), reporte georreferenciado de incidentes (inundaciones, desbordes, vías bloqueadas), asistente inteligente con evidencia oficial (INDECI N° 3882) mediante DeepSeek v4.1 NIM, y un sistema estricto de moderación con aprobación humana obligatoria para evitar falsas alarmas comunitarias.

- **Instrucciones de ejecución:**

  1. **Clonar e ingresar al proyecto:**
     ```bash
     git clone https://github.com/Pelaez12/HACK-UPN-2026-FABRIZZIO_PELAEZ.git
     cd HACK-UPN-2026-FABRIZZIO_PELAEZ
     ```

  2. **Configurar variables de entorno:**
     ```bash
     cp .env.example .env
     ```
     *(Completar credenciales de DeepSeek, Supabase y n8n en .env)*

  3. **Iniciar el servidor:**
     ```bash
     node server.mjs
     ```
     La app estará disponible en: `http://localhost:3000`

  4. **Ejecutar pruebas automatizadas:**
     ```bash
     node tests/test-suite.mjs
     ```
     *(Verifica las 20/20 pruebas de validación, PostGIS, IA y moderación)*

- **Enlace a demo:**
  https://hack-upn-2026-fabrizzio-pelaez.fabrizziopelaez91.workers.dev/

---

## Enlaces Oficiales
- **Repositorio Principal:** https://github.com/Pelaez12/HACK-UPN-2026-FABRIZZIO_PELAEZ.git
- **Repositorio Base de Datos (Supabase PostGIS):** https://github.com/Pelaez12/BASE-DE-DAOTS-ELLIE.git
