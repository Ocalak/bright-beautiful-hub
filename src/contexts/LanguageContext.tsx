import React, { createContext, useContext, useState } from "react";

type Lang = "en" | "de";

const translations = {
  en: {
    heroTitle: "Your Name",
    heroSubtitle: "Data Scientist | Data Analyst | AI/ML Engineer",
    heroDesc: "I build data-driven and AI-powered solutions to forecast trends, automate decisions, and extract insights from complex datasets.",
    github: "GitHub",
    linkedin: "LinkedIn",
    downloadCV: "Download CV",
    projectsTitle: "Key Projects",
    proj1Title: "Short-Term Load Forecasting with Neural Networks",
    proj1Desc: "Improved electricity demand prediction using weather-aware neural networks and explainable AI.",
    proj2Title: "Rental Platform (FastAPI + React + AWS)",
    proj2Desc: "Full-stack rental platform deployed on AWS.",
    proj3Title: "Financial KPI Dashboard",
    proj3Desc: "Interactive dashboard to analyze company financial metrics.",
    proj4Title: "Bitcoin Price Forecasting",
    proj4Desc: "Compared time-series models for cryptocurrency prediction.",
    viewOnGithub: "View on GitHub →",
    skillsTitle: "Skills",
    skillAI: "AI & Machine Learning",
    skillData: "Data Analytics",
    skillTools: "Tools",
    contactTitle: "Get in Touch",
    contactEmail: "your@email.com",
  },
  de: {
    heroTitle: "Dein Name",
    heroSubtitle: "Data Scientist | Datenanalyst | KI/ML-Ingenieur",
    heroDesc: "Ich entwickle datengetriebene und KI-gestützte Lösungen zur Vorhersage von Trends, Automatisierung von Entscheidungen und Gewinnung von Erkenntnissen aus komplexen Datensätzen.",
    github: "GitHub",
    linkedin: "LinkedIn",
    downloadCV: "Lebenslauf",
    projectsTitle: "Wichtige Projekte",
    proj1Title: "Kurzfristige Lastprognose mit Neuronalen Netzen",
    proj1Desc: "Verbesserte Vorhersage des Strombedarfs mit wetterbewussten neuronalen Netzen und erklärbarer KI.",
    proj2Title: "Mietplattform (FastAPI + React + AWS)",
    proj2Desc: "Full-Stack Mietplattform auf AWS bereitgestellt.",
    proj3Title: "Finanzkennzahlen-Dashboard",
    proj3Desc: "Interaktives Dashboard zur Analyse finanzieller Unternehmenskennzahlen.",
    proj4Title: "Bitcoin-Preisprognose",
    proj4Desc: "Vergleich von Zeitreihenmodellen für Kryptowährungsvorhersagen.",
    viewOnGithub: "Auf GitHub ansehen →",
    skillsTitle: "Fähigkeiten",
    skillAI: "KI & Maschinelles Lernen",
    skillData: "Datenanalyse",
    skillTools: "Werkzeuge",
    contactTitle: "Kontakt",
    contactEmail: "your@email.com",
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
