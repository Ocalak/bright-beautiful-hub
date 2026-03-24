import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Datenschutz = () => {
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
          <h1 className="text-3xl font-bold mb-8 text-foreground">Datenschutzerklärung</h1>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-primary">1. Allgemeine Hinweise</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Der Schutz Ihrer persönlichen Daten ist uns wichtig. Diese Website verarbeitet personenbezogene Daten ausschließlich im Rahmen der gesetzlichen Bestimmungen (DSGVO).
            </p>
          </section>

          <hr className="border-border/50 my-8" />

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-primary">2. Verantwortlicher</h2>
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
            <h2 className="text-xl font-semibold mb-4 text-primary">3. Erhebung und Speicherung personenbezogener Daten</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Beim Besuch dieser Website werden automatisch Informationen durch den Server erfasst (z. B. IP-Adresse, Browsertyp, Betriebssystem, Uhrzeit des Zugriffs). Diese Daten sind technisch erforderlich, um die Website bereitzustellen und die Stabilität zu gewährleisten.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-primary">4. Cookies</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Diese Website verwendet Cookies. Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden und keinen Schaden anrichten.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-primary">5. Google Analytics</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Diese Website nutzt Google Analytics, einen Webanalysedienst der Google Ireland Limited.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mt-4">
              Google Analytics verwendet Cookies, die eine Analyse der Benutzung der Website ermöglichen. Die dadurch erzeugten Informationen über Ihre Benutzung dieser Website werden in der Regel an einen Server von Google übertragen und dort gespeichert.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mt-4 font-medium italic">
              Die IP-Anonymisierung ist auf dieser Website aktiviert.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mt-4">
              Die Nutzung erfolgt ausschließlich auf Grundlage Ihrer Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO. Sie können Ihre Einwilligung jederzeit über das Cookie-Banner widerrufen.
            </p>
            <p className="mt-4">
              Weitere Informationen finden Sie unter: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-xs">https://policies.google.com/privacy</a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-primary">6. Hosting über Lovable</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Diese Website wird über Lovable betrieben. Zum Zweck der Bereitstellung und Sicherheit der Website werden dabei personenbezogene Daten (z. B. IP-Adressen) verarbeitet.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-primary">7. Ihre Rechte</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf:
            </p>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-4">
              <li>Auskunft über Ihre gespeicherten personenbezogenen Daten</li>
              <li>Berichtigung unrichtiger Daten</li>
              <li>Löschung Ihrer Daten</li>
              <li>Einschränkung der Verarbeitung</li>
              <li>Widerspruch gegen die Verarbeitung</li>
              <li>Datenübertragbarkeit</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-primary">8. Widerruf Ihrer Einwilligung</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Sie können eine bereits erteilte Einwilligung jederzeit widerrufen.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-primary">9. Beschwerderecht</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Sie haben das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-primary">10. SSL- bzw. TLS-Verschlüsselung</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Diese Seite nutzt aus Sicherheitsgründen eine SSL- bzw. TLS-Verschlüsselung, um die Übertragung vertraulicher Inhalte zu schützen.
            </p>
          </section>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default Datenschutz;
