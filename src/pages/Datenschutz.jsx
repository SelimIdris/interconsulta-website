import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useEffect } from 'react';

export default function Datenschutz() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-background min-h-screen relative selection:bg-sea selection:text-white">
      <Navbar />
      
      {/* Header */}
      <section className="pt-40 lg:pt-48 pb-16 lg:pb-20 px-6 md:px-12 lg:px-20 bg-background">
        <div className="max-w-4xl mx-auto">
          <span className="font-mono text-[11px] uppercase tracking-widest font-semibold mb-6 block text-sea">Rechtliches</span>
          <h1 className="font-sans font-bold text-4xl md:text-5xl lg:text-6xl text-textDark tracking-tight mb-4">Datenschutz</h1>
          <p className="font-serif italic text-xl md:text-2xl text-textDark/60">Transparenz und Sicherheit für Ihre Daten.</p>
        </div>
      </section>

      {/* Content */}
      <section className="pb-32 px-6 md:px-12 lg:px-20 bg-background">
        <div className="max-w-4xl mx-auto font-sans text-lg text-textDark/80 leading-relaxed">
          
          <h2 className="text-2xl font-bold text-textDark mt-8 mb-4">1. Datenschutzerklärung</h2>
          <p className="mb-6">
            Diese Datenschutzerklärung klärt Sie über die Art, den Umfang und Zweck der Verarbeitung von personenbezogenen Daten (nachfolgend kurz „Daten“) innerhalb unseres Onlineangebotes und der mit ihm verbundenen Webseiten, Funktionen und Inhalte auf. Im Hinblick auf die verwendeten Begrifflichkeiten, wie z.B. „Verarbeitung“ oder „Verantwortlicher“ verweisen wir auf die Definitionen im Art. 4 der Datenschutzgrundverordnung (DSGVO) sowie das revidierte Schweizer Datenschutzgesetz (revDSG).
          </p>

          <h2 className="text-2xl font-bold text-textDark mt-12 mb-4">2. Verantwortlicher</h2>
          <p className="mb-6">
            <strong>Inter Consulta Audit AG</strong><br />
            Waaggasse 5<br />
            8001 Zürich<br />
            Schweiz<br />
            E-Mail: <a href="mailto:info@interconsulta.ch" className="text-sea hover:text-[#19756F] hover:underline underline-offset-4 transition-colors">info@interconsulta.ch</a>
          </p>

          <h2 className="text-2xl font-bold text-textDark mt-12 mb-4">3. Arten der verarbeiteten Daten</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Bestandsdaten (z.B. Namen, Adressen).</li>
            <li>Kontaktdaten (z.B. E-Mail, Telefonnummern).</li>
            <li>Inhaltsdaten (z.B. Texteingaben in Formularen).</li>
            <li>Nutzungsdaten (z.B. besuchte Webseiten, Zugriffszeiten).</li>
            <li>Meta-/Kommunikationsdaten (z.B. IP-Adressen, Geräte-Informationen).</li>
          </ul>

          <h2 className="text-2xl font-bold text-textDark mt-12 mb-4">4. Zweck der Verarbeitung</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Zurverfügungstellung des Onlineangebotes, seiner Funktionen und Inhalte.</li>
            <li>Beantwortung von Kontaktanfragen und Kommunikation mit Nutzern.</li>
            <li>Sicherheitsmassnahmen und Schutz vor Missbrauch.</li>
          </ul>

          <h2 className="text-2xl font-bold text-textDark mt-12 mb-4">5. Massgebliche Rechtsgrundlagen</h2>
          <p className="mb-6">
            Die Verarbeitung personenbezogener Daten erfolgt auf Basis Ihrer Einwilligung, zur Erfüllung unserer vertraglichen und vorvertraglichen Pflichten, zur Erfüllung rechtlicher Verpflichtungen sowie zur Wahrung unserer berechtigten Interessen an einem sicheren und effizienten Betrieb unseres Onlineangebots.
          </p>

          <h2 className="text-2xl font-bold text-textDark mt-12 mb-4">6. Sicherheitsmassnahmen</h2>
          <p className="mb-6">
            Wir treffen technische und organisatorische Massnahmen, um ein dem Risiko angemessenes Schutzniveau zu gewährleisten. Dazu gehören die Sicherung der Vertraulichkeit, Integrität und Verfügbarkeit von Daten durch Zugangskontrollen sowie die verschlüsselte Übertragung von Daten (HTTPS/SSL).
          </p>

          <h2 className="text-2xl font-bold text-textDark mt-12 mb-4">7. Rechte der betroffenen Personen</h2>
          <p className="mb-6">
            Sie haben das Recht, Auskunft über Ihre von uns verarbeiteten Daten zu verlangen. Zudem haben Sie das Recht auf Berichtigung, Löschung oder Einschränkung der Verarbeitung Ihrer Daten. Eine erteilte Einwilligung zur Datenverarbeitung können Sie jederzeit mit Wirkung für die Zukunft widerrufen. Wenden Sie sich hierzu an den in Abschnitt 2 genannten Verantwortlichen.
          </p>

          <h2 className="text-2xl font-bold text-textDark mt-12 mb-4">8. Cookies</h2>
          <p className="mb-6">
            Als moderne Prüfgesellschaft verzichten wir weitestgehend auf aggressive Tracking-Mechanismen. Soweit für den technisch einwandfreien Betrieb dieser Webseite nötig, verwenden wir Cookies. Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben oder generell ausschliessen.
          </p>

        </div>
      </section>
      
      <Footer />
    </div>
  );
}
