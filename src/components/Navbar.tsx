import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import { Moon, Sun, Globe } from "lucide-react";

const Navbar = () => {
  const { lang, setLang } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <span className="text-lg font-semibold tracking-tight text-foreground">
          Portfolio
        </span>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setLang(lang === "en" ? "de" : "en")}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium bg-secondary text-secondary-foreground hover:bg-accent transition-colors"
            aria-label="Toggle language"
          >
            <Globe className="w-4 h-4" />
            {lang === "en" ? "DE" : "EN"}
          </button>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-accent transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
