import { ArrowUpRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Logo from './ui/Logo';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-surface text-textDark pt-24 pb-12 rounded-t-[3rem] mt-[-3rem] relative z-20 border-t border-borderAccent shadow-[0_-10px_40px_-15px_rgba(30,36,43,0.05)]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
        
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-24 cursor-default">
          
          <div className="lg:w-1/3">
             <div className="flex items-center gap-3 mb-6">
                <Logo />
             </div>
             
             <p className="font-sans text-textDark/60 font-light text-sm max-w-[250px] leading-relaxed">
               {t('footer.tagline', 'Ihre Verlässliche Schweizer Wirtschaftsprüfungsgesellschaft. Maßgeschneiderte Prüfung und Beratung.')}
             </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-20 w-full lg:w-2/3 lg:justify-end text-sm">
             <div>
                <h4 className="font-heading font-medium text-textDark/50 uppercase tracking-widest text-xs mb-6">{t('footer.nav', 'Navigation')}</h4>
                <ul className="flex flex-col gap-3 font-sans font-medium text-textDark/80">
                  <li><a href="/#ueber-uns" className="hover:text-accent transition-colors">{t('nav.about', 'Über uns')}</a></li>
                  <li><a href="/#leistungen" className="hover:text-accent transition-colors">{t('nav.services', 'Leistungen')}</a></li>
                  <li><a href="/#vorteile" className="hover:text-accent transition-colors">{t('nav.values', 'Vorteile')}</a></li>
                  <li><a href="/#ablauf" className="hover:text-accent transition-colors">{t('nav.process', 'Ablauf')}</a></li>
                </ul>
             </div>

             <div>
                <h4 className="font-heading font-medium text-textDark/50 uppercase tracking-widest text-xs mb-6">{t('footer.contact', 'Kontakt')}</h4>
                <ul className="flex flex-col gap-3 font-sans font-medium text-textDark/80">
                  <li><address className="not-italic font-light text-textDark/60">Waaggasse 5<br/>8001 Zürich</address></li>
                  <li><a href="mailto:info@interconsulta.ch" className="hover:text-accent transition-colors">[E-Mail]</a></li>
                  <li><a href="tel:+41440000000" className="hover:text-accent transition-colors">[Telefon]</a></li>
                </ul>
             </div>

             <div>
                <h4 className="font-heading font-medium text-textDark/50 uppercase tracking-widest text-xs mb-6">{t('footer.legal', 'Rechtliches')}</h4>
                <ul className="flex flex-col gap-3 font-sans font-medium text-textDark/80">
                  <li><a href="/impressum" className="hover:text-accent transition-colors flex items-center gap-1">{t('footer.impressum', 'Impressum')} <ArrowUpRight size={12} /></a></li>
                  <li><a href="/datenschutz" className="hover:text-accent transition-colors flex items-center gap-1">{t('footer.datenschutz', 'Datenschutz')} <ArrowUpRight size={12} /></a></li>
                </ul>
             </div>
          </div>
          
        </div>

        <div className="pt-8 border-t border-borderAccent flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-sans font-light text-textDark/40">
           <p>© {new Date().getFullYear()} InterConsulta Audit AG. {t('footer.rights', 'Alle Rechte vorbehalten.')}</p>
           <p>Zürich, Schweiz</p>
        </div>

      </div>
    </footer>
  );
}
