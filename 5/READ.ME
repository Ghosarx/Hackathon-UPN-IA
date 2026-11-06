# GRUPO ELLIE GRUPO 5

## Ellie Life Enterprise — Seguridad, Evacuación y Alerta Temprana (Piura)
**Hackathon UPN 2026 — Inteligencia Artificial**

- **Equipo:** GRUPO ELLIE (Equipo 5)
- **Integrantes:** Fabrizzio Peláez y equipo Ellie Life
- **Repositorio Principal del Proyecto:** [GitHub HACK-UPN-2026-FABRIZZIO_PELAEZ](https://github.com/Pelaez12/HACK-UPN-2026-FABRIZZIO_PELAEZ)
- **Repositorio Base de Datos (Supabase PostGIS):** [GitHub BASE-DE-DAOTS-ELLIE](https://github.com/Pelaez12/BASE-DE-DAOTS-ELLIE)

---

## 1. Descripción del Proyecto

**Ellie Life Enterprise** es una Progressive Web App (PWA) de preparación familiar, reporte de incidentes y evacuación comunitaria diseñada específicamente para la región Piura ante inundaciones, desbordes del Río Piura y contingencias climáticas asociadas al Fenómeno El Niño.

El sistema combina:
1. **Croquis de Evacuación Multimodal:**
   - **Mapa Interactivo estilo Google Maps** (Leaflet con capas CartoDB Voyager, OpenStreetMap y Esri Satelital) con geolocalización en vivo, cálculo de rutas a zonas seguras (+24m s/río, ~5 min a pie) y filtros tácticos.
   - **Croquis Vectorial Esquemático Stitch** integrado (100% offline, SVG con puntos A/B/C, capas de ríos, vías prioritarias, zonas de riesgo y simbología cartográfica INDECI).
   - **Visor de Plano Cartográfico de Zonificación Urbana** oficial de Piura.
2. **Ellie Asistente (IA Evidencial con DeepSeek v4.1 NIM):**
   - Análisis evidencial multi-capa combinando reportes comunitarios recientes, telemetría de caudales y el Reporte Complementario N° 3882 de INDECI Piura.
   - Respuestas estructuradas con nivel de confianza, rutas seguras y abstención ética en emergencias críticas.
3. **Reporte Ciudadano en 3 Pasos con PostGIS:**
   - Georreferenciación aproximada y voluntaria (buffer de 500m para protección de privacidad).
   - Clasificación por tipo de riesgo (inundación, desborde, vía bloqueada, rescate).
4. **Flujo de Moderación con Aprobación Humana Obligatoria:**
   - Cero falsas alarmas: ninguna notificación comunitaria se emite sin validación de un moderador o autoridad de Defensa Civil.
   - Enrutamiento inteligente a brigadas locales (105 Policía, 116 Bomberos, 110/106 SAMU).
5. **PWA Nativa para Android con Notificaciones Push:**
   - Soporte offline mediante Service Worker con caché de activos vectoriales y datos de contactos.
   - Gestión de suscripción Push y notificaciones web con sonido y vibración.
   - Identidad visual oficial: Iconografía floral de Ellie Life, paleta Morado Principal (#4B36F2), Lavanda (#8E82FF) y Verde Seguro (#258A5A).

---

## 2. Instrucciones de Ejecución

### Prerrequisitos
- Node.js 18+ (ES Modules soportados de forma nativa).

### Paso 1: Configurar variables de entorno
```bash
cp .env.example .env
```
Configura tus credenciales en `.env` (DeepSeek API Key, Supabase URL y Service Key, n8n webhook URL).

### Paso 2: Instalar dependencias (opcional, utiliza stdlib de Node.js)
```bash
npm install
```

### Paso 3: Iniciar el servidor
```bash
npm start
# O directamente:
node server.mjs
```
El servidor iniciará en `http://localhost:3000`.

### Paso 4: Ejecutar la suite de pruebas automatizadas
```bash
npm test
# O directamente:
node tests/test-suite.mjs
```
*Garantiza 20/20 pruebas pasando: validación de esquemas, umbrales de confianza IA, PostGIS Haversine, mitigación de duplicados y RLS.*

---

## 3. Estructura de Archivos
- `public/`: Aplicación frontend móvil PWA (`index.html`), manifiesto Android (`manifest.json`), Service Worker (`sw.js`), favicon y logo oficial SVG/PNG.
- `src/`: Motores de backend (`deepseek.mjs`, `rules-engine.mjs`, `notification-gateway.mjs`, `store.mjs`, `supabase-client.mjs`).
- `supabase/`: Esquema SQL con PostGIS y RLS (`ellie_piura_schema.sql`) y política de consentimiento (`consent-policy-piura.md`).
- `n8n/`: Flujos de automatización de mensajería (`ellie_piura_workflows.json`).
- `tests/`: Suite completa de pruebas unitarias e integración (`test-suite.mjs`, `integration-test.mjs`).
- `server.mjs`: Servidor REST Node.js con API de reportes, chat evidencial, moderación y suscripción push.
