import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Impressum = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 pt-32 pb-20">
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
          className="prose prose-invert max-w-none"
        >
          <h1 className="text-3xl font-bold mb-8">Impressum</h1>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-primary">Angaben gemäß § 5 TMG</h2>
            <p className="text-muted-foreground">
              Öcal Kaptan<br />
              Bertastr. 19<br />
              47226 Duisburg<br />
              Deutschland
            </p>
            <p className="mt-4">
              E-Mail: <a href="mailto:email@ocalkaptan.de" className="text-primary hover:underline">email@ocalkaptan.de</a>
            </p>
          </section>

          <hr className="border-border/50 my-8" />

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-primary">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <p className="text-muted-foreground">
              Öcal Kaptan<br />
              Bertastr. 19<br />
              47226 Duisburg
            </p>
          </section>

          <hr className="border-border/50 my-8" />

          <section className="mb-8">
            <h3 className="text-lg font-semibold mb-2">Haftung für Inhalte</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-lg font-semibold mb-2">Haftung für Links</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-lg font-semibold mb-2">Urheberrecht</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.
            </p>
          </section>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default Impressum;
