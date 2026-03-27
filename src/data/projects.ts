export interface ProjectMetric {
  value: string;
  label: { en: string; de: string };
  badge?: string;
}

export interface ModelComparison {
  name: string;
  metrics: { label: string; value: string }[];
  isHighlighted?: boolean;
}

export interface FeatureImportance {
  name: { en: string; de: string };
  percentage: number;
}

export interface ProjectDetail {
  slug: string;
  titleKey: string;
  descKey: string;
  tech: string;
  githubLink: string;
  mediaUrl?: string;
  metrics: ProjectMetric[];
  modelComparison?: ModelComparison[];
  featureImportance?: FeatureImportance[];
  technicalHighlights: { en: string[]; de: string[] };
  businessImpact: { en: string[]; de: string[] };
}

export const projects: ProjectDetail[] = [
  {
    slug: "gridops-energy-forecasting",
    titleKey: "energyTitle",
    descKey: "energyDesc",
    tech: "Python, FastAPI, PostgreSQL, XGBoost, Random Forest, SCADA",
    githubLink: "https://github.com/Ocalak/de-load-forecast",
    mediaUrl: "/dashboard-recording.webp",
    metrics: [
      { value: "2.19%", label: { en: "MAPE", de: "MAPE" }, badge: "High Accuracy" },
      { value: "94.2%", label: { en: "R² Score", de: "R²-Wert" } },
      { value: "Automated", label: { en: "Data Pipeline", de: "Datenpipeline" }, badge: "Hourly" },
      { value: "1.8 GW", label: { en: "RMSE", de: "RMSE" } },
      { value: "SHAP", label: { en: "Explainability", de: "Erklärbarkeit" } },
      { value: "FastAPI", label: { en: "Backend", de: "Backend" } },
    ],
    modelComparison: [
      { name: "Random Forest", metrics: [{ label: "RMSE", value: "2116 MW" }, { label: "MAPE", value: "2.81%" }], isHighlighted: true },
      { name: "XGBoost", metrics: [{ label: "RMSE", value: "2218 MW" }, { label: "MAPE", value: "2.92%" }] },
      { name: "Linear SGD", metrics: [{ label: "RMSE", value: "2530 MW" }, { label: "MAPE", value: "3.54%" }] },
    ],
    featureImportance: [
      { name: { en: "Hour of Day", de: "Tageszeit" }, percentage: 35 },
      { name: { en: "Temperature", de: "Temperatur" }, percentage: 28 },
      { name: { en: "Day of Week", de: "Wochentag" }, percentage: 15 },
      { name: { en: "Lag Features", de: "Lag-Features" }, percentage: 22 },
    ],
    technicalHighlights: {
      en: [
        "Built an end-to-end machine learning pipeline for short-term electrical load forecasting.",
        "Evaluated multiple models (Linear SGD, RandomForest, XGBoost) and implemented automatic dynamic model selection.",
        "Created a dark-themed FastAPI dashboard complete with real-time SHAP feature importance.",
        "Integrated a Generative AI feature that writes human-readable operator briefings diagnosing anomalies.",
        "Automated hourly telemetry tracking and daily 24-hour predictions using APScheduler and PostgreSQL.",
        "Implemented anomaly detection with dynamic thresholds based on MAPE.",
      ],
      de: [
        "Aufbau einer End-to-End-Machine-Learning-Pipeline für die kurzfristige Vorhersage der elektrischen Last.",
        "Bewertung mehrerer Modelle (Linear SGD, RandomForest, XGBoost) und Implementierung einer automatischen dynamischen Modellauswahl.",
        "Erstellung eines FastAPI-Dashboards im Dark-Mode mit Echtzeit-SHAP-Feature-Importance.",
        "Integration einer Generative-AI-Funktion, die lesbare Operator-Briefings zur Diagnose von Anomalien verfasst.",
        "Automatisierte stündliche Telemetrieverfolgung und tägliche 24-Stunden-Vorhersagen mittels APScheduler und PostgreSQL.",
        "Implementierung von Anomalieerkennung mit dynamischen Schwellenwerten basierend auf MAPE.",
      ],
    },
    businessImpact: {
      en: [
        "Empowers grid operators with real-time predictive insights.",
        "Generates automated briefings to reduce human cognitive load during anomalies.",
        "Improves overall grid stability via continuous model health tracking.",
      ],
      de: [
        "Befähigt Netzbetreiber mit vorausschauenden Echtzeit-Erkenntnissen.",
        "Erzeugt automatisierte Briefings, um die kognitive Belastung des Menschen bei Anomalien zu reduzieren.",
        "Verbessert die allgemeine Netzstabilität durch kontinuierliche Überwachung der Modellgesundheit.",
      ],
    },
  },
  {
    slug: "lernenwirdeutsch",
    titleKey: "germanTitle",
    descKey: "germanDesc",
    tech: "React, CSS, Web Analytics, Content Management",
    githubLink: "https://lernenwirdeutsch.com",
    mediaUrl: "/lernenwirdeutsch.png",
    metrics: [
      { value: "A1-C1", label: { en: "Level Coverage", de: "Niveaustufen" }, badge: "Comprehensive" },
      { value: "Interactive", label: { en: "Exercise Type", de: "Übungstyp" }, badge: "Modern" },
      { value: "Progress", label: { en: "User Analytics", de: "Benutzeranalyse" } },
      { value: "Work-Focus", label: { en: "Specialization", de: "Spezialisierung" } },
    ],
    technicalHighlights: {
      en: [
        "Developed a responsive landing page and interactive learning platform using React.",
        "Implemented situational learning modules specifically for professional German contexts.",
        "Integrated progress tracking mechanisms to enhance user engagement and retention.",
        "Optimized asset loading and performance for a smooth educational experience.",
        "Designed a clean, dark-themed UI focused on readability and task completion.",
      ],
      de: [
        "Entwicklung einer responsiven Landingpage und interaktiven Lernplattform mit React.",
        "Implementierung von situationsbezogenen Lernmodulen speziell für den beruflichen Kontext.",
        "Integration von Mechanismen zur Fortschrittskontrolle zur Steigerung der Nutzerbindung.",
        "Optimierung der Ladezeiten und Performance für eine reibungslose Lernerfahrung.",
        "Gestaltung einer modernen Benutzeroberfläche im Dark-Mode mit Fokus auf Lesbarkeit.",
      ],
    },
    businessImpact: {
      en: [
        "Provides a scalable platform for thousands of German learners worldwide.",
        "Reduces friction in starting the learning journey via 'Practical-First' methodology.",
        "Enables data-driven improvements to curriculum based on user progress patterns.",
      ],
      de: [
        "Bietet eine skalierbare Plattform für Tausende von Deutschlernern weltweit.",
        "Reduziert Hürden beim Lernstart durch die 'Practical-First'-Methodik.",
        "Ermöglicht datengestützte Lehrplanverbesserungen basierend auf Nutzerfortschritten.",
      ],
    },
  },
  {
    slug: "load-forecasting",
    titleKey: "proj1Title",
    descKey: "proj1Desc",
    tech: "Python, R, Neural Networks, SHAP, TensorFlow/Keras",
    githubLink: "https://github.com/Ocalak/FeedForward-Neural-Network",
    metrics: [
      { value: "23%", label: { en: "RMSE Reduction", de: "RMSE-Reduktion" }, badge: "vs ARIMA" },
      { value: "95%", label: { en: "Forecast Accuracy", de: "Prognosegenauigkeit" }, badge: "24h ahead" },
      { value: "<50ms", label: { en: "Inference Time", de: "Inferenzzeit" }, badge: "Real-time" },
      { value: "17.5K", label: { en: "Data Points Processed", de: "Verarbeitete Datenpunkte" } },
      { value: "0.94", label: { en: "R² Score", de: "R²-Wert" } },
      { value: "112 MW", label: { en: "MAE", de: "MAE" } },
    ],
    modelComparison: [
      { name: "Neural Network", metrics: [{ label: "RMSE", value: "145 MW" }, { label: "R²", value: "0.94" }], isHighlighted: true },
      { name: "ARIMA", metrics: [{ label: "RMSE", value: "188 MW" }, { label: "R²", value: "0.87" }] },
      { name: "Linear Regression", metrics: [{ label: "RMSE", value: "210 MW" }, { label: "R²", value: "0.82" }] },
    ],
    featureImportance: [
      { name: { en: "Temperature", de: "Temperatur" }, percentage: 42 },
      { name: { en: "Hour of Day", de: "Tageszeit" }, percentage: 28 },
      { name: { en: "Day of Week", de: "Wochentag" }, percentage: 18 },
      { name: { en: "Humidity", de: "Luftfeuchtigkeit" }, percentage: 8 },
      { name: { en: "Wind Speed", de: "Windgeschwindigkeit" }, percentage: 4 },
    ],
    technicalHighlights: {
      en: [
        "Developed feedforward neural network for short-term electricity load forecasting",
        "Integrated multi-variate weather data (temperature, humidity, wind speed) as external features",
        "Applied SHAP for model interpretability, revealing temperature as the dominant feature (42% contribution)",
        "Implemented robust data preprocessing pipeline with outlier detection and normalization",
        "Compared performance: NN (RMSE: 145 MW) vs ARIMA (RMSE: 188 MW) vs Linear Regression (RMSE: 210 MW)",
        "Processed 2+ years of hourly load data (17,520 data points)",
      ],
      de: [
        "Entwicklung eines Feedforward-Neuronalen Netzes zur kurzfristigen Lastprognose",
        "Integration multivariater Wetterdaten (Temperatur, Luftfeuchtigkeit, Windgeschwindigkeit) als externe Features",
        "Anwendung von SHAP für Modellinterpretierbarkeit – Temperatur als dominanter Faktor (42% Beitrag)",
        "Implementierung einer robusten Datenvorverarbeitungspipeline mit Ausreißererkennung und Normalisierung",
        "Leistungsvergleich: NN (RMSE: 145 MW) vs ARIMA (RMSE: 188 MW) vs Lineare Regression (RMSE: 210 MW)",
        "Verarbeitung von über 2 Jahren stündlicher Lastdaten (17.520 Datenpunkte)",
      ],
    },
    businessImpact: {
      en: [
        "Enables grid operators to optimize generation scheduling",
        "Reduces energy waste and improves grid stability",
        "Supports real-time decision-making with sub-50ms inference",
      ],
      de: [
        "Ermöglicht Netzbetreibern die Optimierung der Erzeugungsplanung",
        "Reduziert Energieverschwendung und verbessert die Netzstabilität",
        "Unterstützt Echtzeit-Entscheidungen mit unter 50ms Inferenzzeit",
      ],
    },
  },
  {
    slug: "rental-platform",
    titleKey: "proj2Title",
    descKey: "proj2Desc",
    tech: "Python, FastAPI, PostgreSQL, AWS, ETL",
    githubLink: "https://github.com/Ocalak/Rental-House-Portal-FastAPI-React-Postgres-AWS-",
    metrics: [
      { value: "50K+", label: { en: "Records Processed", de: "Verarbeitete Datensätze" } },
      { value: "3", label: { en: "Data Sources Integrated", de: "Integrierte Datenquellen" } },
      { value: "15+", label: { en: "Analytical Endpoints", de: "Analytische Endpunkte" } },
      { value: "AWS", label: { en: "Cloud Infrastructure", de: "Cloud-Infrastruktur" }, badge: "RDS + S3" },
    ],
    technicalHighlights: {
      en: [
        "Designed PostgreSQL database schema optimized for analytical queries on rental listings",
        "Built ETL pipelines to ingest, clean, and transform property and booking data",
        "Developed data models for pricing analysis, occupancy forecasting, and market trend detection",
        "Created FastAPI endpoints serving analytical insights and aggregated metrics",
        "Deployed data infrastructure on AWS using RDS, S3, and EC2",
        "Implemented automated data quality checks and monitoring",
        "Applied statistical methods to identify pricing patterns and demand drivers",
      ],
      de: [
        "Entwurf eines PostgreSQL-Schemas optimiert für analytische Abfragen auf Mietangeboten",
        "Aufbau von ETL-Pipelines zur Aufnahme, Bereinigung und Transformation von Immobiliendaten",
        "Entwicklung von Datenmodellen für Preisanalyse, Belegungsprognose und Markttrendserkennung",
        "Erstellung von FastAPI-Endpunkten für analytische Insights und aggregierte Metriken",
        "Bereitstellung der Dateninfrastruktur auf AWS mit RDS, S3 und EC2",
        "Implementierung automatisierter Datenqualitätsprüfungen und Monitoring",
        "Anwendung statistischer Methoden zur Identifikation von Preismustern und Nachfragetreibern",
      ],
    },
    businessImpact: {
      en: [
        "Provides actionable insights for rental pricing optimization",
        "Automates data collection and quality assurance for property listings",
        "Enables data-driven decision-making for property managers",
      ],
      de: [
        "Liefert handlungsrelevante Einblicke zur Mietpreisoptimierung",
        "Automatisiert Datenerfassung und Qualitätssicherung für Immobilienangebote",
        "Ermöglicht datengestützte Entscheidungsfindung für Immobilienverwalter",
      ],
    },
  },
  {
    slug: "lernenweirdeutsch-agent",
    titleKey: "agentTitle",
    descKey: "agentDesc",
    tech: "Python, FastAPI, Claude AI, MoviePy, Edge TTS, Cloudinary, Meta Graph API, YouTube Data API, Docker",
    githubLink: "https://github.com/Ocalak/lernenweirdeutsch-agent",
    metrics: [
      { value: "Full Auto", label: { en: "Pipeline", de: "Pipeline" }, badge: "End-to-End" },
      { value: "Claude AI", label: { en: "Content Engine", de: "Content-Engine" }, badge: "claude-opus-4-6" },
      { value: "9:16 HD", label: { en: "Video Format", de: "Videoformat" }, badge: "1080×1920" },
      { value: "2 Platforms", label: { en: "Distribution", de: "Distribution" }, badge: "Instagram + YouTube" },
      { value: "Daily", label: { en: "Scheduling", de: "Zeitplanung" }, badge: "Automated" },
      { value: "60s", label: { en: "Video Length", de: "Videolänge" }, badge: "Short-form" },
    ],
    technicalHighlights: {
      en: [
        "Built a webhook-driven FastAPI agent that triggers a full content-to-publish pipeline from a single blog post.",
        "Integrated Claude claude-opus-4-6 with extended thinking to generate platform-optimized Instagram captions and YouTube Short scripts.",
        "Created a custom video generator using MoviePy and Pillow that renders branded 1080×1920 frames with TTS narration via Edge TTS.",
        "Automated video upload to Cloudinary (required for Instagram Reels API) and multi-platform posting via Meta Graph API and YouTube Data API v3.",
        "Solved FastAPI asyncio event loop conflicts for TTS generation inside an async web server.",
        "Scheduled daily execution via macOS launchd with round-robin blog post rotation and run-state tracking.",
      ],
      de: [
        "Entwicklung eines webhook-gesteuerten FastAPI-Agenten, der aus einem einzigen Blog-Post eine vollständige Content-to-Publish-Pipeline auslöst.",
        "Integration von Claude claude-opus-4-6 mit erweitertem Denken zur Generierung plattformoptimierter Instagram-Captions und YouTube-Short-Skripte.",
        "Erstellung eines benutzerdefinierten Video-Generators mit MoviePy und Pillow, der gebrandete 1080×1920-Frames mit TTS-Narration via Edge TTS rendert.",
        "Automatisierter Video-Upload zu Cloudinary und Multi-Plattform-Veröffentlichung via Meta Graph API und YouTube Data API v3.",
        "Lösung von FastAPI-asyncio-Event-Loop-Konflikten für TTS-Generierung in einem asynchronen Webserver.",
        "Tägliche Ausführung via macOS launchd mit rotierender Blog-Post-Auswahl und Statusverfolgung.",
      ],
    },
    businessImpact: {
      en: [
        "Eliminates 2–3 hours of manual social media work per post through full end-to-end automation.",
        "Enables consistent daily publishing across Instagram Reels and YouTube Shorts without human intervention.",
        "Scales content distribution for a language learning brand with zero per-post effort.",
      ],
      de: [
        "Eliminiert 2–3 Stunden manuelle Social-Media-Arbeit pro Beitrag durch vollständige Automatisierung.",
        "Ermöglicht konsistente tägliche Veröffentlichungen auf Instagram Reels und YouTube Shorts ohne menschliches Eingreifen.",
        "Skaliert die Content-Distribution für eine Sprachlernmarke ohne Aufwand pro Beitrag.",
      ],
    },
  },
  {
    slug: "econometrics-with-r",
    titleKey: "proj5Title",
    descKey: "proj5Desc",
    tech: "R, Econometrics, Statistics",
    githubLink: "https://github.com/Ocalak/EconometricsWithR",
    metrics: [
      { value: "Open Source", label: { en: "Contribution Type", de: "Beitragsart" } },
      { value: "5+", label: { en: "Chapters Improved", de: "Verbesserte Kapitel" } },
      { value: "Bug Fixes", label: { en: "Code Quality", de: "Codequalität" } },
      { value: "Updated", label: { en: "Literature References", de: "Literaturverweise" } },
    ],
    technicalHighlights: {
      en: [
        "Contributed to the open-source 'Econometrics with R' project",
        "Fixed bugs and improved existing R code for econometric analyses",
        "Enhanced documentation and literature references for better clarity",
        "Covered topics including regression analysis, instrumental variables, and panel data methods",
        "Improved code reproducibility and added better error handling",
        "Strengthened statistical methodology explanations with updated references",
      ],
      de: [
        "Beitrag zum Open-Source-Projekt 'Econometrics with R'",
        "Fehlerbehebung und Verbesserung bestehenden R-Codes für ökonometrische Analysen",
        "Verbesserung der Dokumentation und Literaturverweise",
        "Themen wie Regressionsanalyse, Instrumentalvariablen und Paneldaten-Methoden",
        "Verbesserte Code-Reproduzierbarkeit und Fehlerbehandlung",
        "Stärkung der statistischen Methodenerklärungen mit aktualisierten Referenzen",
      ],
    },
    businessImpact: {
      en: [
        "Improves educational resources for econometrics students worldwide",
        "Enhances reproducibility of statistical analyses in R",
        "Contributes to the open-source data science community",
      ],
      de: [
        "Verbessert Bildungsressourcen für Ökonometrie-Studierende weltweit",
        "Erhöht die Reproduzierbarkeit statistischer Analysen in R",
        "Leistet Beitrag zur Open-Source Data-Science-Community",
      ],
    },
  },
];
