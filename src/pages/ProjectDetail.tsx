import { useParams, Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/projects";
import Navbar from "@/components/Navbar";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useLanguage();

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-foreground">Project not found.</p>
      </div>
    );
  }

  const details = t(project.detailsKey as any).split("|");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-3xl mx-auto px-6 pt-28 pb-20">
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
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t(project.titleKey as any)}
          </h1>

          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            {t(project.descKey as any)}
          </p>

          <div className="mb-8">
            <h2 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-2">
              {t("techStack")}
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.tech.split(", ").map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono font-medium text-primary/80 bg-accent/50 px-3 py-1.5 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-card rounded-xl p-6 border border-border/50 shadow-card mb-8">
            <ul className="space-y-3">
              {details.map((detail, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-sm leading-relaxed">{detail}</span>
                </li>
              ))}
            </ul>
          </div>

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
