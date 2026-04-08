import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useEffect } from 'react';

export default function Impressum() {
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
          <h1 className="font-sans font-bold text-4xl md:text-5xl lg:text-6xl text-textDark tracking-tight mb-4">Impressum</h1>
          <p className="font-serif italic text-xl md:text-2xl text-textDark/60">Angaben gemäss Art. 328b OR und revDSG.</p>
        </div>
      </section>

      {/* Content */}
      <section className="pb-32 px-6 md:px-12 lg:px-20 bg-background">
        <div className="max-w-4xl mx-auto font-sans text-lg text-textDark/80 leading-relaxed">

          <h2 className="text-2xl font-bold text-textDark mt-8 mb-4">Gesellschaft</h2>
          <p className="mb-6">
            <strong>Inter Consulta Audit AG</strong><br />
            Waaggasse 5<br />
            8001 Zürich<br />
            Schweiz
          </p>

          <h2 className="text-2xl font-bold text-textDark mt-12 mb-4">Kontakt</h2>
          <p className="mb-6">
            E-Mail: <a href="mailto:info@interconsulta.ch" className="text-sea hover:underline underline-offset-4 transition-colors">info@interconsulta.ch</a><br />
            Telefon: <a href="tel:[Telefon]" className="text-sea hover:underline underline-offset-4 transition-colors">[Telefon]</a>
          </p>

          <h2 className="text-2xl font-bold text-textDark mt-12 mb-4">Verantwortliche Person</h2>
          <p className="mb-6">
            Claudio Piubel<br />
            Zugelassener Revisionsexperte RAB
          </p>

          <h2 className="text-2xl font-bold text-textDark mt-12 mb-4">Handelsregister</h2>
          <p className="mb-6">
            Inter Consulta Audit AG ist im Handelsregister des Kantons Zürich eingetragen.<br />
            UID: [UID-Nummer]<br />
            HR-Nummer: [CHE-Nummer]
          </p>

          <h2 className="text-2xl font-bold text-textDark mt-12 mb-4">Aufsichtsbehörde</h2>
          <p className="mb-6">
            Inter Consulta Audit AG ist als Revisionsunternehmen bei der Eidgenössischen Revisionsaufsichtsbehörde (RAB) zugelassen.<br />
            <a href="https://www.rab-asr.ch" target="_blank" rel="noopener noreferrer" className="text-sea hover:underline underline-offset-4 transition-colors">www.rab-asr.ch</a>
          </p>

          <h2 className="text-2xl font-bold text-textDark mt-12 mb-4">Haftungsausschluss</h2>
          <p className="mb-6">
            Die Inter Consulta Audit AG übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen Richtigkeit, Genauigkeit, Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen auf dieser Webseite. Haftungsansprüche gegen die Inter Consulta Audit AG wegen Schäden materieller oder immaterieller Art, welche aus dem Zugriff oder der Nutzung der Webseite entstanden sind, werden ausgeschlossen.
          </p>

          <h2 className="text-2xl font-bold text-textDark mt-12 mb-4">Urheberrecht</h2>
          <p className="mb-6">
            Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien auf der Webseite gehören ausschliesslich der Inter Consulta Audit AG oder den speziell genannten Rechtsinhabern. Für die Reproduktion jeglicher Elemente ist die schriftliche Zustimmung der Urheberrechtsträger im Voraus einzuholen.
          </p>

        </div>
      </section>

      <Footer />
    </div>
  );
}
