import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="w-full bg-textDark text-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 pt-20 lg:pt-28 pb-10">

        {/* 3 Spalten gleichmässig */}
        <div className="flex flex-col lg:flex-row gap-12 mb-16">

          {/* Spalte 1: Brand */}
          <div className="flex-1">
            <div className="mb-6">
              <span className="font-sans font-extrabold text-[22px] tracking-tight text-white leading-none block mb-1">
                INTER CONSULTA
              </span>
              <span className="font-sans font-medium text-[11px] tracking-[0.25em] text-sea uppercase">
                Audit AG
              </span>
            </div>
            <p className="font-sans text-white/55 text-sm leading-relaxed mb-8 max-w-[280px]">
              {t('footer.tagline')}
            </p>
            <div className="font-mono text-[12px] text-white/40 uppercase tracking-widest mb-8 space-y-1">
              <div>Waaggasse 5</div>
              <div>8001 Zürich, Schweiz</div>
            </div>
            <a
              href="https://www.linkedin.com/in/claudio-piubel-67aa5110b?skipRedirect=true"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#0A66C2] hover:bg-[#0958a8] text-white text-[12px] font-sans font-semibold px-4 py-2 rounded-full transition-colors duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              Claudio Piubel · LinkedIn
            </a>
          </div>

          {/* Spalte 2: EXPERTsuisse zentriert */}
          <div className="flex-1 flex flex-col items-center justify-center text-center">
            <p className="font-mono text-[10px] text-white/30 uppercase tracking-[0.25em] mb-5">
              {t('footer.memberOf')}
            </p>
            <a
              href="https://www.expertsuisse.ch"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 hover:opacity-75 transition-opacity duration-300"
            >
              <span className="font-sans font-extrabold text-[30px] tracking-tight leading-none">
                EXPERT<span className="text-sandstone">suisse</span>
              </span>
              <span className="font-mono text-[10px] text-white/35 uppercase tracking-[0.18em] mt-2">
                Zugelassener Revisionsexperte RAB
              </span>
            </a>
          </div>

          {/* Spalte 3: Navigation */}
          <div className="flex-1 lg:flex lg:justify-end">
            <div>
              <h4 className="font-mono text-[11px] text-sandstone uppercase tracking-widest mb-6 font-semibold">
                {t('footer.nav')}
              </h4>
              <div className="flex flex-col gap-4">
                <a href="#werte" className="font-sans text-sm text-white/70 hover:text-white transition-colors">{t('nav.values')}</a>
                <a href="#ueber-uns" className="font-sans text-sm text-white/70 hover:text-white transition-colors">{t('nav.about')}</a>
                <a href="#vorgehen" className="font-sans text-sm text-white/70 hover:text-white transition-colors">{t('nav.process')}</a>
                <a href="#leistungen-detail" className="font-sans text-sm text-white/70 hover:text-white transition-colors">{t('nav.services')}</a>
                <a href="#kontakt" className="font-sans text-sm text-white/70 hover:text-white transition-colors">{t('nav.contact')}</a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-mono text-[11px] text-white/25 uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Inter Consulta Audit AG. {t('footer.rights')}
          </p>
          <div className="flex items-center gap-6">
            <Link to="/impressum" className="font-mono text-[11px] text-white/25 uppercase tracking-widest hover:text-white/55 transition-colors">{t('footer.impressum')}</Link>
            <Link to="/datenschutz" className="font-mono text-[11px] text-white/25 uppercase tracking-widest hover:text-white/55 transition-colors">{t('footer.datenschutz')}</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
