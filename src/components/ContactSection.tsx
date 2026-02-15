import { useLanguage } from "@/contexts/LanguageContext";
import { Github, Linkedin, Mail } from "lucide-react";

const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <section className="hero-gradient py-16">
      <div className="max-w-3xl mx-auto text-center px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
          {t("contactTitle")}
        </h2>
        <a
          href={`mailto:${t("contactEmail")}`}
          className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors mb-6"
        >
          <Mail className="w-4 h-4" />
          {t("contactEmail")}
        </a>
        <div className="flex justify-center gap-4 mt-4">
          <a
            href="https://github.com/Ocalak/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg border border-primary-foreground/20 text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/ocalkaptan123/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg border border-primary-foreground/20 text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
