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
    proj2Title: "Rental Platform (FastAPI + React + AWS)",
    proj2Desc: "Full-stack rental platform deployed on AWS.",
    proj2Details: "Built a full-stack rental house portal with FastAPI backend and React frontend.|Designed and implemented PostgreSQL database schema for property listings, users, and bookings.|Deployed the application on AWS using EC2, S3, and RDS.|Implemented user authentication and authorization with JWT tokens.|Created RESTful API endpoints for CRUD operations on listings.|Added image upload functionality with AWS S3 integration.",
    proj3Title: "Financial KPI Dashboard",
    proj3Desc: "Interactive dashboard to analyze company financial metrics.",
    proj3Details: "Created an interactive dashboard for Kion Group's financial KPI analysis.|Built data pipelines to extract and transform financial data from multiple sources.|Implemented dynamic visualizations including revenue trends, profit margins, and cost breakdowns.|Used SQL for data aggregation and Python for advanced analytics.|Designed executive-level summary views and detailed drill-down capabilities.|Automated report generation for quarterly financial reviews.",
    proj4Title: "Bitcoin Price Forecasting",
    proj4Desc: "Compared time-series models for cryptocurrency prediction.",
    proj4Details: "Evaluated multiple time-series forecasting models for Bitcoin price prediction.|Implemented ARIMA, GARCH, and LSTM neural network models.|Performed comprehensive backtesting across different market conditions.|Analyzed model performance using MAE, RMSE, and directional accuracy metrics.|Explored feature engineering with trading volume, sentiment data, and technical indicators.|Published findings comparing model strengths in volatile vs. stable market periods.",
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
    proj2Title: "Mietplattform (FastAPI + React + AWS)",
    proj2Desc: "Full-Stack Mietplattform auf AWS bereitgestellt.",
    proj2Details: "Aufbau eines Full-Stack Miethaus-Portals mit FastAPI-Backend und React-Frontend.|Entwurf und Implementierung eines PostgreSQL-Datenbankschemas für Immobilienanzeigen, Nutzer und Buchungen.|Bereitstellung der Anwendung auf AWS mit EC2, S3 und RDS.|Implementierung von Benutzerauthentifizierung und -autorisierung mit JWT-Tokens.|Erstellung von RESTful-API-Endpunkten für CRUD-Operationen.|Bildupload-Funktionalität mit AWS S3-Integration.",
    proj3Title: "Finanzkennzahlen-Dashboard",
    proj3Desc: "Interaktives Dashboard zur Analyse finanzieller Unternehmenskennzahlen.",
    proj3Details: "Erstellung eines interaktiven Dashboards für die Finanzkennzahlen-Analyse der Kion Group.|Aufbau von Datenpipelines zur Extraktion und Transformation von Finanzdaten.|Implementierung dynamischer Visualisierungen inkl. Umsatztrends und Kostenaufschlüsselungen.|Verwendung von SQL für Datenaggregation und Python für erweiterte Analysen.|Gestaltung von Management-Übersichten und detaillierten Drill-Down-Ansichten.|Automatisierung der Berichtserstellung für vierteljährliche Finanzreviews.",
    proj4Title: "Bitcoin-Preisprognose",
    proj4Desc: "Vergleich von Zeitreihenmodellen für Kryptowährungsvorhersagen.",
    proj4Details: "Evaluierung mehrerer Zeitreihen-Prognosemodelle für die Bitcoin-Preisprognose.|Implementierung von ARIMA-, GARCH- und LSTM-Modellen.|Umfassendes Backtesting unter verschiedenen Marktbedingungen.|Analyse der Modellleistung mit MAE, RMSE und Richtungsgenauigkeit.|Feature-Engineering mit Handelsvolumen, Sentimentdaten und technischen Indikatoren.|Veröffentlichung von Vergleichsergebnissen in volatilen vs. stabilen Marktphasen.",
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
