import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Brain, BarChart3, Wrench } from "lucide-react";

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
      titleKey: "skillTools" as const,
      icon: Wrench,
      skills: ["Python, R, SQL", "FastAPI, React", "Git, Docker", "AWS"],
    },
  ];

  return (
    <section className="py-20 bg-secondary/50">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t("skillsTitle")}
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.titleKey}
              className="bg-card rounded-xl p-6 shadow-card border border-border/50 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent mb-4">
                <cat.icon className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="font-semibold text-card-foreground mb-4">{t(cat.titleKey)}</h3>
              <ul className="space-y-2">
                {cat.skills.map((skill) => (
                  <li key={skill} className="text-sm text-muted-foreground">
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
