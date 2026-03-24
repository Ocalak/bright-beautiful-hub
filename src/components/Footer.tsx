import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 bg-background py-10 mt-auto">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-muted-foreground">
            © {currentYear} Öcal Kaptan. All rights reserved.
          </div>
          <div className="flex gap-8">
            <Link
              to="/impressum"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {t("impressum" as any)}
            </Link>
            <Link
              to="/datenschutz"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {t("datenschutz" as any)}
            </Link>
            <button
              onClick={() => (window as any).klaro.show()}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {t("cookieSettings" as any)}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
