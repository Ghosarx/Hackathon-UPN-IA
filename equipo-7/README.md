# Equipo 7

* **Integrantes:**
  * **Robert Perez**
  * **Gerardo Perez**
  * **Jesmar Perez**

* **Descripción del proyecto:**
  **Kyberna IA — Centro de Mando Logístico Inteligente ante el Fenómeno del Niño.**  
  Sistema integral de alerta temprana, auditoría de campo con web scraping y ruteo logístico de emergencia diseñado para mitigar el impacto humanitario y económico del Fenómeno del Niño en el norte del Perú (Cuenca del Río Moche, La Libertad). El sistema integra:
  1. **Fusión Sensorial IoT y Satelital:** Monitoreo en tiempo real de pluviómetros y estaciones hidrológicas de SENAMHI, radar satelital Sentinel-1 SAR (Copernicus) para saturación de humedad en suelo (SSI) y eventos naturales NASA EONET.
  2. **Machine Learning Predictivo:** Clasificador no-lineal supervisado con Kernel RBF y Random Fourier Features (ROC-AUC: 0.987, F1-Score: 0.932) entrenado cronológicamente sobre series históricas FEN (1998–2026) que anticipa el desborde con **38 minutos de ventaja (Lead Time)**.
  3. **Web Scraping OSINT y Procesamiento de Lenguaje Natural (NLP):** Rastreo automatizado de fuentes oficiales (RPP, La Industria, Correo) y redes sociales con filtros anti-fake news para validar en tiempo real calles anegadas, viviendas en riesgo de colapso y personas heridas o aisladas.
  4. **Logística Humanitaria y Re-enrutamiento Vial Dijkstra (OSRM):** Estimación instantánea de damnificados y suministros bajo estándar internacional **SPHERE / EDAN** (raciones de alimentos de 18 kg, agua potable a 15 L/hab/día, carpas, frazadas y cálculo exacto de convoyes INDECI en camiones de 10T) con recálculo dinámico de rutas seguras por la **Carretera Industrial PE-10A Laredo** ante el colapso del Puente Río Moche.
  5. **Alertas Multicanal en Tiempo Real:** Notificaciones inmediatas a transportistas y comités de emergencia vía **Telegram Bot API** oficial y WhatsApp, con tono informativo gradual no alarmista y resiliencia offline.

* **Instrucciones de ejecución:**
  ### Requisitos Previos:
  * Python 3.10 o superior (recomendado Python 3.12+).
  * El frontend en React 19 ya se encuentra **precompilado y empaquetado en `frontend/dist/`**, por lo que **NO se requiere Node.js ni npm** para ejecutar el sistema.

  ### Paso 1: Clonar el repositorio
  ```bash
  git clone https://github.com/robertpid/kyberna-ia.git
  cd "kyberna ia"
  ```

  ### Paso 2: Crear entorno virtual e instalar dependencias
  ```bash
  # En Windows (PowerShell):
  python -m venv .venv
  .\.venv\Scripts\activate
  pip install -r requirements.txt

  # En Linux / macOS:
  python3 -m venv .venv
  source .venv/bin/activate
  pip install -r requirements.txt
  ```

  ### Paso 3: (Opcional) Configurar credenciales de Telegram Bot
  El sistema incluye credenciales demostrativas en el archivo `.env`:
  ```env
  TELEGRAM_BOT_TOKEN=9124177676:AAG5xRF8gugL8dRlcB-OLVm0nr8Jv9XrKJ8
  TELEGRAM_CHAT_ID=5518727633
  ```

  ### Paso 4: Iniciar el servidor local
  ```bash
  python main.py --host 0.0.0.0 --port 8000
  ```

  ### Paso 5: Abrir en el navegador
  * **Dashboard Principal:** http://localhost:8000
  * **Demo Interactiva Paso a Paso:** http://localhost:8000/demo/
  * **Documentación de APIs (Swagger UI):** http://localhost:8000/docs

* **Enlace a demo:**
  * **Simulación Web Interactiva (HTML-Demo):** http://localhost:8000/demo/ *(disponible también en local abriendo `html_demo/index.html`)*
  * **Video Pitch Oficial (2 Minutos 1080p Full HD):** `kyberna_ia_pitch_2min.mp4`
  * **Dossier Técnico Ejecutivo (PDF):** `Kyberna_IA_Dossier_Tecnico.pdf`
  * **Repositorio Oficial en GitHub:** https://github.com/robertpid/kyberna-ia
