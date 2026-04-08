import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const container = useRef(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const navLinks = [
    { name: t('nav.values'),  href: "/#werte" },
    { name: t('nav.about'),   href: "/#ueber-uns" },
    { name: t('nav.process'), href: "/#vorgehen" },
    { name: t('nav.services'),href: "/#leistungen-detail" }
  ];

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav
      ref={container}
      className="fixed top-0 left-0 w-full z-50 bg-background/95 backdrop-blur-xl shadow-sm py-4"
    >
      <div className="w-full flex items-center justify-between px-6 lg:px-20 max-w-[1400px] mx-auto">

        {/* Logo */}
        <a href="/" className="flex items-center group cursor-pointer hover:opacity-80 transition-opacity">
          <div className="flex flex-col relative tracking-tight">
            <div className="font-sans font-extrabold text-[22px] md:text-[24px] text-textDark leading-none mb-1 group-hover:text-sea transition-colors duration-500">
              INTER CONSULTA
            </div>
            <div className="font-sans font-bold text-[10px] md:text-[11px] tracking-[0.3em] text-sea uppercase leading-none self-end pr-0.5">
              Audit AG
            </div>
          </div>
        </a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-8 font-sans text-[14px] font-medium text-textDark/80">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-textDark transition-colors">
              {link.name}
            </a>
          ))}

          {/* Language switcher */}
          <div className="flex items-center gap-1 border border-textDark/15 rounded-full px-3 py-1.5 ml-2">
            {['de', 'fr', 'en'].map((lang, idx) => (
              <span key={lang} className="flex items-center">
                <button
                  onClick={() => changeLanguage(lang)}
                  className={`text-[11px] font-mono font-semibold uppercase tracking-widest transition-colors cursor-pointer ${
                    i18n.language === lang ? 'text-sea' : 'text-textDark/35 hover:text-textDark/70'
                  }`}
                >
                  {lang}
                </button>
                {idx < 2 && <span className="text-textDark/20 mx-1.5 text-[10px]">/</span>}
              </span>
            ))}
          </div>

          <a href="/#kontakt" className="px-6 py-2.5 bg-textDark text-white rounded-full hover:bg-sea transition-colors shadow-soft font-semibold ml-2">
            {t('nav.contact')}
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-textDark p-2 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-xl shadow-premium border-t border-textDark/5 transition-all duration-300 overflow-hidden flex flex-col ${isMobileMenuOpen ? 'max-h-[450px] py-6 opacity-100' : 'max-h-0 py-0 opacity-0'}`}>
        <div className="flex flex-col items-center gap-4 px-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={closeMenu}
              className="text-lg font-sans font-medium text-textDark w-full text-center py-3 border-b border-textDark/5 hover:bg-textDark/5 transition-colors"
            >
              {link.name}
            </a>
          ))}
          {/* Language switcher mobile */}
          <div className="flex items-center gap-4 mt-2">
            {['de', 'fr', 'en'].map((lang) => (
              <button
                key={lang}
                onClick={() => { changeLanguage(lang); closeMenu(); }}
                className={`text-[13px] font-mono font-semibold uppercase tracking-widest transition-colors ${
                  i18n.language === lang ? 'text-sea' : 'text-textDark/40 hover:text-textDark/70'
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
          <a
            href="/#kontakt"
            onClick={closeMenu}
            className="w-full text-center px-6 py-4 mt-2 bg-textDark text-white rounded-full hover:bg-sea transition-colors font-semibold shadow-sm"
          >
            {t('nav.contact')}
          </a>
        </div>
      </div>
    </nav>
  );
}
