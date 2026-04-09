import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { ExternalLink, ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { sideProjects } from "@/data/projects";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Lightning from "@/components/Lightning";

const OtherProjects = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background flex flex-col relative">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Lightning hue={200} speed={1} intensity={1} size={1} />
        <div className="absolute inset-0 bg-background/80" />
      </div>

      <Navbar />

      <div className="flex-grow relative z-10 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mb-6"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              {t("backToHome")}
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mt-4">
              {t("otherProjectsTitle")}
            </h1>
            <p className="text-muted-foreground mt-3 max-w-xl">
              {t("otherProjectsSubtitle")}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {sideProjects.map((project, i) => (
              <motion.div
                key={project.slug}
                className="group bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover border border-border/50 transition-all duration-300 hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors pr-4">
                    {t(project.titleKey as any)}
                  </h3>
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
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default OtherProjects;
