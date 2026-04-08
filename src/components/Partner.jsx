import { LogoCloud } from "./ui/LogoCloud";
import { useTranslation } from 'react-i18next';

export default function Partner() {
  const { t } = useTranslation();

  return (
    <section className="w-full py-24 lg:py-32 bg-background border-t border-textDark/5" id="partner">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-20 w-full relative z-10">

        <div className="mb-16 md:w-4/5">
          <span className="font-mono text-[11px] uppercase tracking-widest font-semibold mb-6 block text-sea">
            {t('partner.label')}
          </span>
          <h2 className="font-sans font-bold text-3xl lg:text-4xl xl:text-5xl text-textDark mb-4 leading-[1.1] tracking-tight">
            {t('partner.headline')}
          </h2>
          <p className="font-sans text-lg text-textDark/70 leading-relaxed max-w-2xl">
            {t('partner.sub')}
          </p>
        </div>

        <LogoCloud />

      </div>
    </section>
  );
}
