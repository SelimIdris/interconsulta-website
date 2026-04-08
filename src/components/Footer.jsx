import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full bg-textDark text-white pt-24 lg:pt-32 pb-12 border-t-8 border-sea">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 w-full relative z-10">
        
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-24 mb-24">
          <div className="w-full lg:w-1/3">
            <div className="flex flex-col mb-8">
              <span className="font-sans font-extrabold text-[24px] tracking-tight text-white leading-none mb-1">
                INTER CONSULTA
              </span>
              <span className="font-sans font-medium text-[12px] tracking-[0.25em] text-sea uppercase leading-none">
                Audit AG
              </span>
            </div>
            <p className="font-sans text-white/60 text-lg leading-relaxed max-w-sm mb-10">
              Unabhängige Revisionsdienstleistungen und persönliche Beratung in der Schweiz. Gezielt, verlässlich und professionell.
            </p>
            <div className="flex flex-col gap-2 font-mono text-[13px] text-white/50 uppercase tracking-widest">
              <span>Waaggasse 5</span>
              <span>8001 Zürich</span>
            </div>
          </div>

          <div className="w-full lg:w-2/3 flex flex-wrap gap-12 lg:gap-24 lg:justify-end">
            <div className="flex flex-col gap-5">
              <h4 className="font-mono text-[11px] text-sandstone uppercase tracking-widest mb-2 font-semibold">Navigation</h4>
              <a href="#werte" className="font-sans text-base text-white/80 hover:text-white transition-colors">Werte</a>
              <a href="#ueber-uns" className="font-sans text-base text-white/80 hover:text-white transition-colors">Über uns</a>
              <a href="#vorgehen" className="font-sans text-base text-white/80 hover:text-white transition-colors">Vorgehen</a>
              <a href="#leistungen-detail" className="font-sans text-base text-white/80 hover:text-white transition-colors">Leistungen</a>
              <a href="#kontakt" className="font-sans text-base text-white/80 hover:text-white transition-colors">Kontakt</a>
            </div>
            <div className="flex flex-col gap-5">
              <h4 className="font-mono text-[11px] text-sandstone uppercase tracking-widest mb-2 font-semibold">Rechtliches</h4>
              <a href="#" className="font-sans text-base text-white/80 hover:text-white transition-colors">Impressum</a>
              <Link to="/datenschutz" className="font-sans text-base text-white/80 hover:text-white transition-colors">Datenschutz</Link>
              <a href="#" className="font-sans text-base text-white/80 hover:text-white transition-colors">AGB</a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-mono text-[12px] text-white/40 uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Inter Consulta Audit AG. Alle Rechte vorbehalten.
          </p>
        </div>

      </div>
    </footer>
  );
}
