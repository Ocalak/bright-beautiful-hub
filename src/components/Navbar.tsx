import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import { Moon, Sun, Globe } from "lucide-react";
import StaggeredMenu from "@/components/StaggeredMenu";

const Navbar = () => {
  const { lang, setLang, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const menuItems = [
    { label: t("projectsTitle"), link: "#projects" },
    { label: t("skillsTitle"), link: "#skills" },
    { label: t("contactTitle"), link: "#contact" },
  ];

  const socialItems = [
    { label: "GitHub", link: "https://github.com/Ocalak" },
    { label: "LinkedIn", link: "https://www.linkedin.com/in/ocalkaptan123/" },
  ];

  return (
    <StaggeredMenu
      isFixed
      position="right"
      colors={['#0a1628', '#0d2b3e', '#00c7fc']}
      items={menuItems}
      socialItems={socialItems}
      displaySocials={true}
      displayItemNumbering={true}
      accentColor="#00c7fc"
      menuButtonColor={theme === 'dark' ? '#ffffff' : '#ffffff'}
      openMenuButtonColor={theme === 'dark' ? '#ffffff' : '#111111'}
      changeMenuColorOnOpen={true}
      closeOnClickAway={true}
      panelBackground={theme === 'dark' ? 'hsl(220 22% 12%)' : 'hsl(0 0% 100%)'}
      headerContent={
        <div className="flex items-center gap-2">
          <span className="text-lg font-semibold tracking-tight text-primary-foreground">
            Portfolio
          </span>
          <button
            onClick={() => setLang(lang === "en" ? "de" : "en")}
            className="flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium bg-primary-foreground/10 text-primary-foreground/80 hover:bg-primary-foreground/20 transition-colors backdrop-blur-sm"
            aria-label="Toggle language"
          >
            <Globe className="w-3.5 h-3.5" />
            {lang === "en" ? "DE" : "EN"}
          </button>
          <button
            onClick={toggleTheme}
            className="p-1.5 rounded-md bg-primary-foreground/10 text-primary-foreground/80 hover:bg-primary-foreground/20 transition-colors backdrop-blur-sm"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon className="w-3.5 h-3.5" /> : <Sun className="w-3.5 h-3.5" />}
          </button>
        </div>
      }
    />
  );
};

export default Navbar;
