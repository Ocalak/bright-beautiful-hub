import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Brain, BarChart3, Wrench, Zap } from "lucide-react";

const SkillsSection = () => {
  const { t } = useLanguage();

  const categories = [
    {
      titleKey: "skillAI" as const,
      icon: Brain,
      skills: ["Neural Networks", "Time Series Forecasting", "Supervised Learning", "Feature Engineering", "Explainable AI (SHAP)"],
    },
    {
      titleKey: "skillData" as const,
      icon: BarChart3,
      skills: ["Econometrics", "Statistical Modeling", "Hypothesis Testing", "Monte Carlo Simulation", "Data Visualization"],
    },
    {
      titleKey: "skillAutomation" as const,
      icon: Zap,
      skills: ["Claude AI", "n8n", "Airtable", "Zapier"],
    },
    {
      titleKey: "skillTools" as const,
      icon: Wrench,
      skills: ["Python, R, SQL", "FastAPI, React", "Git, Docker", "AWS"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/50">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t("skillsTitle")}
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.titleKey}
              className="bg-card rounded-xl p-5 shadow-card border border-border/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-accent shrink-0">
                  <cat.icon className="w-4 h-4 text-accent-foreground" aria-hidden="true" />
                </div>
                <h3 className="font-semibold text-card-foreground text-sm leading-tight">{t(cat.titleKey)}</h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-md font-mono"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
