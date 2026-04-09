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
    energyTitle: "GridOps Energy Forecasting Dashboard",
    energyDesc: "End-to-end ML pipeline and FastAPI dashboard for real-time electrical grid anomaly detection.",
    proj1Title: "Short-Term Load Forecasting with Neural Networks",
    proj1Desc: "Improved electricity demand prediction using weather-aware neural networks and explainable AI.",
    proj1Details: "Developed a feedforward neural network for short-term electricity load forecasting.|Integrated weather data (temperature, humidity, wind) as external features to improve accuracy.|Applied SHAP (SHapley Additive exPlanations) for model interpretability and feature importance.|Compared performance against ARIMA and linear regression baselines.|Achieved significant RMSE reduction over traditional approaches.|Implemented data preprocessing pipeline with outlier detection and normalization.",
    proj2Title: "Rental Data Pipeline & Analytics (FastAPI + PostgreSQL + AWS)",
    proj2Desc: "Designed data pipelines and analytics backend for a rental platform, focusing on data modeling, ETL, and cloud deployment.",
    proj2Details: "Designed and implemented PostgreSQL database schema optimized for analytical queries on rental listings.|Built ETL pipelines to ingest, clean, and transform property and booking data.|Developed data models for pricing analysis, occupancy forecasting, and market trend detection.|Created FastAPI endpoints serving analytical insights and aggregated metrics.|Deployed data infrastructure on AWS using RDS, S3, and EC2.|Implemented automated data quality checks and monitoring.|Applied statistical methods to identify pricing patterns and demand drivers.",
    proj5Title: "Econometrics with R",
    proj5Desc: "Improved code, fixed bugs, and enhanced literature for an open-source econometrics resource in R.",
    proj5Details: "Contributed to the open-source 'Econometrics with R' project.|Fixed bugs and improved existing R code for econometric analyses.|Enhanced documentation and literature references for better clarity.|Covered topics including regression analysis, instrumental variables, and panel data methods.|Improved code reproducibility and added better error handling.|Strengthened statistical methodology explanations with updated references.",
    agentTitle: "AI Social Media Automation Agent",
    agentDesc: "End-to-end pipeline that turns a blog post into a branded video and publishes it to Instagram Reels and YouTube Shorts — fully automated with Claude AI.",
    germanTitle: "Practical German Learning Platform",
    germanDesc: "An interactive platform for learning professional and daily German, featuring situational exercises and progress tracking.",
    germanDetails: "Developed an interactive platform focused on practical German for work and daily life (A1-C1).|Implemented situational learning modules covering work emails, calls, and appointments.|Designed a progress tracking system to monitor learning milestones and vocabulary acquisition.|Optimized content delivery for a seamless user experience across devices.|Integrated interactive exercises to reinforce grammar and vocabulary 'on demand'.|Built a clean, modern interface emphasizing ease of use and immediate engagement.",
    viewOnGithub: "View on GitHub →",
    visitWebsite: "Visit Website →",
    viewDetails: "View Details →",
    backToHome: "← Back to Home",
    impressum: "Legal Notice",
    datenschutz: "Privacy Policy",
    cookieSettings: "Cookie Settings",
    skillsTitle: "Skills",
    skillAI: "AI & Machine Learning",
    skillData: "Data Analytics",
    skillAutomation: "AI Automation",
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
    energyTitle: "GridOps Energieprognose-Dashboard",
    energyDesc: "End-to-End ML-Pipeline und FastAPI-Dashboard für die Echtzeit-Anomalieerkennung im Stromnetz.",
    proj1Title: "Kurzfristige Lastprognose mit Neuronalen Netzen",
    proj1Desc: "Verbesserte Vorhersage des Strombedarfs mit wetterbewussten neuronalen Netzen und erklärbarer KI.",
    proj1Details: "Entwicklung eines Feedforward-Neuronalen Netzes zur kurzfristigen Lastprognose.|Integration von Wetterdaten (Temperatur, Luftfeuchtigkeit, Wind) als externe Features.|Anwendung von SHAP für Modellinterpretierbarkeit und Feature-Importance-Analyse.|Vergleich der Leistung mit ARIMA- und linearen Regressionsbaselines.|Signifikante RMSE-Reduktion gegenüber traditionellen Ansätzen.|Implementierung einer Datenvorverarbeitungspipeline mit Ausreißererkennung und Normalisierung.",
    proj2Title: "Miet-Datenpipeline & Analytik (FastAPI + PostgreSQL + AWS)",
    proj2Desc: "Datenpipelines und Analytik-Backend für eine Mietplattform mit Fokus auf Datenmodellierung, ETL und Cloud-Deployment.",
    proj2Details: "Entwurf und Implementierung eines PostgreSQL-Schemas optimiert für analytische Abfragen.|Aufbau von ETL-Pipelines zur Aufnahme, Bereinigung und Transformation von Immobilien- und Buchungsdaten.|Entwicklung von Datenmodellen für Preisanalyse, Belegungsprognose und Markttrendserkennung.|Erstellung von FastAPI-Endpunkten für analytische Insights und aggregierte Metriken.|Bereitstellung der Dateninfrastruktur auf AWS mit RDS, S3 und EC2.|Implementierung automatisierter Datenqualitätsprüfungen.|Anwendung statistischer Methoden zur Identifikation von Preismustern und Nachfragetreibern.",
    proj5Title: "Ökonometrie mit R",
    proj5Desc: "Code verbessert, Fehler behoben und Literatur für eine Open-Source-Ökonometrie-Ressource in R erweitert.",
    proj5Details: "Beitrag zum Open-Source-Projekt 'Econometrics with R'.|Fehlerbehebung und Verbesserung bestehenden R-Codes für ökonometrische Analysen.|Verbesserung der Dokumentation und Literaturverweise.|Themen wie Regressionsanalyse, Instrumentalvariablen und Paneldaten-Methoden.|Verbesserte Code-Reproduzierbarkeit und Fehlerbehandlung.|Stärkung der statistischen Methodenerklärungen mit aktualisierten Referenzen.",
    agentTitle: "KI-Social-Media-Automatisierungsagent",
    agentDesc: "Eine End-to-End-Pipeline, die einen Blog-Beitrag automatisch in ein gebrandetes Video verwandelt und auf Instagram Reels und YouTube Shorts veröffentlicht — vollautomatisch mit Claude AI.",
    germanTitle: "Praktische Deutsch-Lernplattform",
    germanDesc: "Eine interaktive Plattform zum Erlernen von beruflichem und täglichem Deutsch mit situationsbezogenen Übungen und Fortschrittskontrolle.",
    germanDetails: "Entwicklung einer interaktiven Plattform mit Fokus auf praktisches Deutsch für Beruf und Alltag (A1-C1).|Implementierung von situationsbezogenen Lernmodulen für E-Mails, Telefonate und Termine.|Entwurf eines Fortschrittskontrollsystems zur Überwachung von Lernmeilensteinen und Wortschatzerwerb.|Optimierung der Inhaltsbereitstellung für eine nahtlose Benutzererfahrung auf allen Geräten.|Integration interaktiver Übungen zur spielerischen Festigung von Grammatik und Wortschatz.|Erstellung einer modernen, übersichtlichen Benutzeroberfläche für maximale Benutzerfreundlichkeit.",
    viewOnGithub: "Auf GitHub ansehen →",
    visitWebsite: "Website besuchen →",
    viewDetails: "Details ansehen →",
    backToHome: "← Zurück zur Startseite",
    impressum: "Impressum",
    datenschutz: "Datenschutzerklärung",
    cookieSettings: "Cookie-Einstellungen",
    skillsTitle: "Fähigkeiten",
    skillAI: "KI & Maschinelles Lernen",
    skillData: "Datenanalyse",
    skillAutomation: "KI-Automatisierung",
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
