import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { featuredProjects } from "@/data/projects";

const ProjectsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-20 bg-background">
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
          {featuredProjects.map((project, i) => (
            <motion.div
              key={project.slug}
              className="group bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover border border-border/50 transition-all duration-300 hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors pr-4">
                  {t(project.titleKey as any)}
                </h3>
                {project.ongoing && (
                  <span className="flex items-center gap-1.5 shrink-0 text-xs font-medium text-emerald-500 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    {t("ongoing")}
                  </span>
                )}
              </div>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {t(project.descKey as any)}
              </p>
              <p className="text-xs font-mono font-medium text-primary/80 bg-accent/50 inline-block px-3 py-1 rounded-full mb-4">
                {project.tech}
              </p>
              <div className="flex items-center gap-4 pt-2 border-t border-border/50">
                <Link
                  to={`/project/${project.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  {t("viewDetails")}
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {project.githubLink.includes("github.com") ? "GitHub" : t("visitWebsite").replace(" →", "")}
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors border border-border/50 rounded-full px-5 py-2 hover:border-primary/50"
          >
            {t("seeAllProjects")}
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
