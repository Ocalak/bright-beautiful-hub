import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Github, Linkedin, Download } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpeg";
import Waves from "@/components/Waves";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center pt-16 overflow-hidden">
      {/* Liquid Ether Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 hero-gradient" />
        <Waves
          lineColor="rgba(0, 199, 252, 0.3)"
          waveSpeedX={0.02}
          waveSpeedY={0.01}
          waveAmpX={40}
          waveAmpY={20}
          xGap={12}
          yGap={36}
          friction={0.925}
          tension={0.005}
          maxCursorMove={120}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-8 flex justify-center">
            <div className="relative w-32 h-32 md:w-40 md:h-40">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-primary/40 shadow-lg">
                <img
                  src={profilePhoto}
                  alt="Öcal Kaptan — Data Scientist"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Online/available indicator */}
              <span className="absolute bottom-1 right-1 md:bottom-2 md:right-2 flex items-center gap-1.5 bg-background/90 backdrop-blur-sm border border-emerald-500/30 text-emerald-400 text-xs font-medium px-2 py-0.5 rounded-full shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Open to Work
              </span>
            </div>
          </div>
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary-foreground/80 text-sm font-medium backdrop-blur-sm">
            Data & AI
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-primary-foreground tracking-tight">
            {t("heroTitle")}
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/70 mb-3 font-medium">
            {t("heroSubtitle")}
          </p>
          <p className="max-w-2xl mx-auto text-primary-foreground/60 mb-10 leading-relaxed">
            {t("heroDesc")}
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="https://github.com/Ocalak"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View GitHub profile"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg accent-gradient text-primary-foreground font-semibold shadow-lg hover:opacity-90 transition-opacity duration-200 cursor-pointer"
            >
              <Github className="w-4 h-4" aria-hidden="true" />
              {t("github")}
            </a>
            <a
              href="https://www.linkedin.com/in/ocalkaptan123/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View LinkedIn profile"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary-foreground/20 text-primary-foreground/90 font-medium hover:bg-primary-foreground/10 transition-colors duration-200 cursor-pointer"
            >
              <Linkedin className="w-4 h-4" aria-hidden="true" />
              {t("linkedin")}
            </a>
            <a
              href="/cv.pdf"
              download="Ocal_Kaptan_CV.pdf"
              aria-label="Download CV as PDF"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary-foreground/20 text-primary-foreground/90 font-medium hover:bg-primary-foreground/10 transition-colors duration-200 cursor-pointer"
            >
              <Download className="w-4 h-4" aria-hidden="true" />
              {t("downloadCV")}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
