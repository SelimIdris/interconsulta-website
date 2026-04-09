import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslation } from 'react-i18next';

gsap.registerPlugin(ScrollTrigger);

export default function Features() {
  const containerRef = useRef(null);
  const { t } = useTranslation();

  useGSAP(() => {
    const sections = gsap.utils.toArray('.value-block');
    sections.forEach((sec, i) => {
      gsap.from(sec, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sec,
          start: 'top 85%',
        }
      });
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="w-full py-24 lg:py-32 bg-white" id="werte">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 w-full relative z-10">

        <div className="mb-20 md:w-4/5 max-w-4xl">
          <span className="font-mono text-[11px] uppercase tracking-widest font-semibold mb-6 block text-sea">
            {t('features.label')}
          </span>
          <h2 className="font-sans font-bold text-[26px] sm:text-4xl lg:text-5xl xl:text-6xl text-textDark mb-6 leading-[1.1] tracking-tight">
            {t('features.headline')}
          </h2>
          <p className="font-serif italic text-2xl md:text-3xl lg:text-4xl text-textDark/60 leading-relaxed">
            {t('features.sub')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">

          <div className="value-block flex flex-col">
            <span className="font-sans text-[64px] lg:text-[80px] text-background font-extrabold mb-2 leading-none -ml-1">01</span>
            <div className="h-0.5 w-12 bg-burntOrange mb-8"></div>
            <h3 className="font-sans font-bold text-2xl text-textDark mb-4">{t('features.v1title')}</h3>
            <p className="font-sans text-lg text-textDark/70 leading-relaxed">
              {t('features.v1desc')}
            </p>
          </div>

          <div className="value-block flex flex-col">
            <span className="font-sans text-[64px] lg:text-[80px] text-background font-extrabold mb-2 leading-none -ml-1">02</span>
            <div className="h-0.5 w-12 bg-sandstone mb-8"></div>
            <h3 className="font-sans font-bold text-2xl text-textDark mb-4">{t('features.v2title')}</h3>
            <p className="font-sans text-lg text-textDark/70 leading-relaxed">
              {t('features.v2desc')}
            </p>
          </div>

          <div className="value-block flex flex-col">
            <span className="font-sans text-[64px] lg:text-[80px] text-background font-extrabold mb-2 leading-none -ml-1">03</span>
            <div className="h-0.5 w-12 bg-lagoon mb-8"></div>
            <h3 className="font-sans font-bold text-2xl text-textDark mb-4">{t('features.v3title')}</h3>
            <p className="font-sans text-lg text-textDark/70 leading-relaxed">
              {t('features.v3desc')}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
