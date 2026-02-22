import React, { createContext, useContext, useState } from "react";

type Lang = "en" | "de";

const translations = {
  en: {
    heroTitle: "Öcal Kaptan",
    heroSubtitle: "Data Scientist | Data Analyst | AI/ML Engineer",
    heroDesc: "I build data-driven and AI-powered solutions to forecast trends, automate decisions, and extract insights from complex datasets.",
    github: "GitHub",
    linkedin: "LinkedIn",
    downloadCV: "Download CV",
    projectsTitle: "Key Projects",
    proj1Title: "Short-Term Load Forecasting with Neural Networks",
    proj1Desc: "Improved electricity demand prediction using weather-aware neural networks and explainable AI.",
    proj1Details: "Developed a feedforward neural network for short-term electricity load forecasting.|Integrated weather data (temperature, humidity, wind) as external features to improve accuracy.|Applied SHAP (SHapley Additive exPlanations) for model interpretability and feature importance.|Compared performance against ARIMA and linear regression baselines.|Achieved significant RMSE reduction over traditional approaches.|Implemented data preprocessing pipeline with outlier detection and normalization.",
    proj2Title: "Rental Data Pipeline & Analytics (FastAPI + PostgreSQL + AWS)",
    proj2Desc: "Designed data pipelines and analytics backend for a rental platform, focusing on data modeling, ETL, and cloud deployment.",
    proj2Details: "Designed and implemented PostgreSQL database schema optimized for analytical queries on rental listings.|Built ETL pipelines to ingest, clean, and transform property and booking data.|Developed data models for pricing analysis, occupancy forecasting, and market trend detection.|Created FastAPI endpoints serving analytical insights and aggregated metrics.|Deployed data infrastructure on AWS using RDS, S3, and EC2.|Implemented automated data quality checks and monitoring.|Applied statistical methods to identify pricing patterns and demand drivers.",
    proj3Title: "Financial KPI Dashboard",
    proj3Desc: "Interactive dashboard to analyze company financial metrics.",
    proj3Details: "Created an interactive dashboard for Kion Group's financial KPI analysis.|Built data pipelines to extract and transform financial data from multiple sources.|Implemented dynamic visualizations including revenue trends, profit margins, and cost breakdowns.|Used SQL for data aggregation and Python for advanced analytics.|Designed executive-level summary views and detailed drill-down capabilities.|Automated report generation for quarterly financial reviews.",
    proj5Title: "Econometrics with R",
    proj5Desc: "Improved code, fixed bugs, and enhanced literature for an open-source econometrics resource in R.",
    proj5Details: "Contributed to the open-source 'Econometrics with R' project.|Fixed bugs and improved existing R code for econometric analyses.|Enhanced documentation and literature references for better clarity.|Covered topics including regression analysis, instrumental variables, and panel data methods.|Improved code reproducibility and added better error handling.|Strengthened statistical methodology explanations with updated references.",
    viewOnGithub: "View on GitHub →",
    viewDetails: "View Details →",
    backToHome: "← Back to Home",
    skillsTitle: "Skills",
    skillAI: "AI & Machine Learning",
    skillData: "Data Analytics",
    skillTools: "Tools",
    contactTitle: "Get in Touch",
    contactEmail: "email@ocalkaptan.de",
    techStack: "Tech Stack",
  },
  de: {
    heroTitle: "Öcal Kaptan",
    heroSubtitle: "Data Scientist | Datenanalyst | KI/ML-Ingenieur",
    heroDesc: "Ich entwickle datengetriebene und KI-gestützte Lösungen zur Vorhersage von Trends, Automatisierung von Entscheidungen und Gewinnung von Erkenntnissen aus komplexen Datensätzen.",
    github: "GitHub",
    linkedin: "LinkedIn",
    downloadCV: "Lebenslauf",
    projectsTitle: "Wichtige Projekte",
    proj1Title: "Kurzfristige Lastprognose mit Neuronalen Netzen",
    proj1Desc: "Verbesserte Vorhersage des Strombedarfs mit wetterbewussten neuronalen Netzen und erklärbarer KI.",
    proj1Details: "Entwicklung eines Feedforward-Neuronalen Netzes zur kurzfristigen Lastprognose.|Integration von Wetterdaten (Temperatur, Luftfeuchtigkeit, Wind) als externe Features.|Anwendung von SHAP für Modellinterpretierbarkeit und Feature-Importance-Analyse.|Vergleich der Leistung mit ARIMA- und linearen Regressionsbaselines.|Signifikante RMSE-Reduktion gegenüber traditionellen Ansätzen.|Implementierung einer Datenvorverarbeitungspipeline mit Ausreißererkennung und Normalisierung.",
    proj2Title: "Miet-Datenpipeline & Analytik (FastAPI + PostgreSQL + AWS)",
    proj2Desc: "Datenpipelines und Analytik-Backend für eine Mietplattform mit Fokus auf Datenmodellierung, ETL und Cloud-Deployment.",
    proj2Details: "Entwurf und Implementierung eines PostgreSQL-Schemas optimiert für analytische Abfragen.|Aufbau von ETL-Pipelines zur Aufnahme, Bereinigung und Transformation von Immobilien- und Buchungsdaten.|Entwicklung von Datenmodellen für Preisanalyse, Belegungsprognose und Markttrendserkennung.|Erstellung von FastAPI-Endpunkten für analytische Insights und aggregierte Metriken.|Bereitstellung der Dateninfrastruktur auf AWS mit RDS, S3 und EC2.|Implementierung automatisierter Datenqualitätsprüfungen.|Anwendung statistischer Methoden zur Identifikation von Preismustern und Nachfragetreibern.",
    proj3Title: "Finanzkennzahlen-Dashboard",
    proj3Desc: "Interaktives Dashboard zur Analyse finanzieller Unternehmenskennzahlen.",
    proj3Details: "Erstellung eines interaktiven Dashboards für die Finanzkennzahlen-Analyse der Kion Group.|Aufbau von Datenpipelines zur Extraktion und Transformation von Finanzdaten.|Implementierung dynamischer Visualisierungen inkl. Umsatztrends und Kostenaufschlüsselungen.|Verwendung von SQL für Datenaggregation und Python für erweiterte Analysen.|Gestaltung von Management-Übersichten und detaillierten Drill-Down-Ansichten.|Automatisierung der Berichtserstellung für vierteljährliche Finanzreviews.",
    proj5Title: "Ökonometrie mit R",
    proj5Desc: "Code verbessert, Fehler behoben und Literatur für eine Open-Source-Ökonometrie-Ressource in R erweitert.",
    proj5Details: "Beitrag zum Open-Source-Projekt 'Econometrics with R'.|Fehlerbehebung und Verbesserung bestehenden R-Codes für ökonometrische Analysen.|Verbesserung der Dokumentation und Literaturverweise.|Themen wie Regressionsanalyse, Instrumentalvariablen und Paneldaten-Methoden.|Verbesserte Code-Reproduzierbarkeit und Fehlerbehandlung.|Stärkung der statistischen Methodenerklärungen mit aktualisierten Referenzen.",
    viewOnGithub: "Auf GitHub ansehen →",
    viewDetails: "Details ansehen →",
    backToHome: "← Zurück zur Startseite",
    skillsTitle: "Fähigkeiten",
    skillAI: "KI & Maschinelles Lernen",
    skillData: "Datenanalyse",
    skillTools: "Werkzeuge",
    contactTitle: "Kontakt",
    contactEmail: "email@ocalkaptan.de",
    techStack: "Technologien",
  },
};

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: keyof typeof translations.en) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Lang>("en");
  const t = (key: keyof typeof translations.en) => translations[lang][key];
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
