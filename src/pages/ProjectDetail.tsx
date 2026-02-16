import { useParams, Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { ArrowLeft, Github, TrendingUp, BarChart3, Cpu, Target, Lightbulb, CheckCircle2 } from "lucide-react";
import { projects } from "@/data/projects";
import Navbar from "@/components/Navbar";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { lang, t } = useLanguage();

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-foreground">Project not found.</p>
      </div>
    );
  }

  const sectionLabel = {
    achievements: { en: "Key Achievements", de: "Wichtige Ergebnisse" },
    comparison: { en: "Model Performance Comparison", de: "Modellleistungsvergleich" },
    features: { en: "Feature Importance Analysis (SHAP)", de: "Feature-Importance-Analyse (SHAP)" },
    featuresSubtitle: { en: "Top features contributing to prediction accuracy", de: "Wichtigste Features für die Vorhersagegenauigkeit" },
    highlights: { en: "Technical Highlights", de: "Technische Highlights" },
    impact: { en: "Business Impact", de: "Geschäftliche Wirkung" },
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 pt-28 pb-20">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          {t("backToHome")}
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Header */}
          <div className="mb-10">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 accent-gradient rounded-xl shadow-lg flex-shrink-0">
                <Cpu className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                  {t(project.titleKey as any)}
                </h1>
                <p className="text-lg text-muted-foreground mt-2 leading-relaxed">
                  {t(project.descKey as any)}
                </p>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tech.split(", ").map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 bg-foreground text-background text-sm font-medium rounded-full hover:bg-primary transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Metrics */}
          <div className="mb-10">
            <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              {sectionLabel.achievements[lang]}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {project.metrics.map((metric, i) => (
                <motion.div
                  key={i}
                  className="group relative overflow-hidden rounded-xl border border-border/50 bg-card p-4 hover:border-primary/50 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  <div className="absolute inset-0 bg-primary/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="relative z-10">
                    {metric.badge && (
                      <div className="mb-2 flex justify-end">
                        <span className="text-xs font-semibold text-primary bg-accent px-2 py-0.5 rounded-full">
                          {metric.badge}
                        </span>
                      </div>
                    )}
                    <div className="text-2xl font-bold text-foreground mb-1">{metric.value}</div>
                    <div className="text-sm text-muted-foreground">{metric.label[lang]}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Model Comparison */}
          {project.modelComparison && (
            <div className="mb-10 p-6 bg-card rounded-2xl border border-border/50 shadow-card">
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-primary" />
                {sectionLabel.comparison[lang]}
              </h2>
              <div className="space-y-3">
                {project.modelComparison.map((model) => (
                  <div
                    key={model.name}
                    className={`flex items-center justify-between p-3 rounded-lg transition-colors ${
                      model.isHighlighted
                        ? "bg-accent border-2 border-primary/50"
                        : "bg-muted/50 border border-border/50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {model.isHighlighted && (
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                      )}
                      <span className={`font-semibold ${model.isHighlighted ? "text-primary" : "text-foreground"}`}>
                        {model.name}
                      </span>
                    </div>
                    <div className="flex gap-6 text-sm">
                      {model.metrics.map((m) => (
                        <div key={m.label} className="text-right">
                          <div className="text-xs text-muted-foreground mb-1">{m.label}</div>
                          <div className={`font-bold ${model.isHighlighted ? "text-primary" : "text-foreground"}`}>
                            {m.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Feature Importance */}
          {project.featureImportance && (
            <div className="mb-10 p-6 bg-card rounded-2xl border border-border/50 shadow-card">
              <h2 className="text-xl font-bold text-foreground mb-1 flex items-center gap-2">
                <Cpu className="w-5 h-5 text-primary" />
                {sectionLabel.features[lang]}
              </h2>
              <p className="text-sm text-muted-foreground mb-6">{sectionLabel.featuresSubtitle[lang]}</p>
              <div className="space-y-4">
                {project.featureImportance.map((feature) => (
                  <div key={feature.name[lang]} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium text-foreground">{feature.name[lang]}</span>
                      <span className="font-bold text-foreground">{feature.percentage}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className="h-full accent-gradient rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${feature.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technical Highlights */}
          <div className="mb-10 p-6 bg-card rounded-2xl border border-border/50 shadow-card">
            <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Target className="w-5 h-5 text-primary" />
              {sectionLabel.highlights[lang]}
            </h2>
            <ul className="space-y-3">
              {project.technicalHighlights[lang].map((item, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-3 text-muted-foreground"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-sm leading-relaxed">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Business Impact */}
          <div className="mb-10 p-6 bg-accent/30 rounded-2xl border border-primary/20">
            <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-primary" />
              {sectionLabel.impact[lang]}
            </h2>
            <ul className="space-y-3">
              {project.businessImpact[lang].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* GitHub Link */}
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg accent-gradient text-primary-foreground font-semibold shadow-lg hover:opacity-90 transition-opacity"
          >
            <Github className="w-4 h-4" />
            {t("viewOnGithub")}
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail;
