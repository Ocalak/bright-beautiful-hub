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
  metrics: ProjectMetric[];
  modelComparison?: ModelComparison[];
  featureImportance?: FeatureImportance[];
  technicalHighlights: { en: string[]; de: string[] };
  businessImpact: { en: string[]; de: string[] };
}

export const projects: ProjectDetail[] = [
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
    slug: "financial-dashboard",
    titleKey: "proj3Title",
    descKey: "proj3Desc",
    tech: "Python, SQL, Dashboarding",
    githubLink: "https://ocalak.github.io/kion-group-dashboard/",
    metrics: [
      { value: "6+", label: { en: "KPI Categories", de: "KPI-Kategorien" } },
      { value: "4", label: { en: "Data Sources", de: "Datenquellen" } },
      { value: "Auto", label: { en: "Report Generation", de: "Berichtserstellung" }, badge: "Quarterly" },
      { value: "Drill-down", label: { en: "Interactive Analysis", de: "Interaktive Analyse" } },
    ],
    technicalHighlights: {
      en: [
        "Created an interactive dashboard for Kion Group's financial KPI analysis",
        "Built data pipelines to extract and transform financial data from multiple sources",
        "Implemented dynamic visualizations including revenue trends, profit margins, and cost breakdowns",
        "Used SQL for data aggregation and Python for advanced analytics",
        "Designed executive-level summary views and detailed drill-down capabilities",
        "Automated report generation for quarterly financial reviews",
      ],
      de: [
        "Erstellung eines interaktiven Dashboards für die Finanzkennzahlen-Analyse der Kion Group",
        "Aufbau von Datenpipelines zur Extraktion und Transformation von Finanzdaten",
        "Implementierung dynamischer Visualisierungen inkl. Umsatztrends und Kostenaufschlüsselungen",
        "Verwendung von SQL für Datenaggregation und Python für erweiterte Analysen",
        "Gestaltung von Management-Übersichten und detaillierten Drill-Down-Ansichten",
        "Automatisierung der Berichtserstellung für vierteljährliche Finanzreviews",
      ],
    },
    businessImpact: {
      en: [
        "Streamlines quarterly financial reporting for executives",
        "Enables rapid identification of cost anomalies and revenue trends",
        "Reduces manual reporting effort through automation",
      ],
      de: [
        "Vereinfacht vierteljährliche Finanzberichte für die Geschäftsleitung",
        "Ermöglicht schnelle Erkennung von Kostenanomalien und Umsatztrends",
        "Reduziert manuellen Berichtsaufwand durch Automatisierung",
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
