import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    titleKey: "proj1Title" as const,
    descKey: "proj1Desc" as const,
    tech: "Python, Neural Networks, SHAP",
    link: "https://github.com/Ocalak/FeedForward-Neural-Network",
  },
  {
    titleKey: "proj2Title" as const,
    descKey: "proj2Desc" as const,
    tech: "FastAPI, React, PostgreSQL, AWS",
    link: "https://github.com/Ocalak/Rental-House-Portal-FastAPI-React-Postgres-AWS-",
  },
  {
    titleKey: "proj3Title" as const,
    descKey: "proj3Desc" as const,
    tech: "Python, SQL, Dashboarding",
    link: "https://github.com/Ocalak/kion-group-dashboard",
  },
  {
    titleKey: "proj4Title" as const,
    descKey: "proj4Desc" as const,
    tech: "Python, Time Series",
    link: "https://github.com/Ocalak/Forecasting-Bitcoin",
  },
];

const ProjectsSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {t("projectsTitle")}
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.a
              key={project.titleKey}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover border border-border/50 transition-all duration-300 hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors pr-4">
                  {t(project.titleKey)}
                </h3>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
              </div>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {t(project.descKey)}
              </p>
              <p className="text-xs font-mono font-medium text-primary/80 bg-accent/50 inline-block px-3 py-1 rounded-full">
                {project.tech}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
