import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Lightning from "@/components/Lightning";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col relative">
      {/* Lightning Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Lightning hue={200} speed={1} intensity={1} size={1} />
        <div className="absolute inset-0 bg-background/80" />
      </div>

      <Navbar />
      <div className="flex-grow relative z-10">
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
