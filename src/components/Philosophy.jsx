import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslation } from 'react-i18next';

gsap.registerPlugin(ScrollTrigger);

export default function Philosophy() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const { t } = useTranslation();

  useGSAP(() => {
    const lines = textRef.current.children;
    gsap.from(lines, {
      y: 20,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 75%',
      }
    });
  }, { scope: sectionRef });

  // 100vw ensures this element stretches to fill completely.
  return (
    <section ref={sectionRef} className="w-full py-24 lg:py-40 bg-sea overflow-hidden flex items-center justify-center">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 w-full relative z-10 text-center" ref={textRef}>
        <span className="font-mono text-[11px] uppercase tracking-widest font-semibold mb-6 block text-sandstone/80">
          {t('philosophy.label')}
        </span>
        <p className="font-sans font-medium text-lg lg:text-xl text-white/80 mb-6 max-w-2xl mx-auto">
          {t('philosophy.intro')}
        </p>
        <h2 className="font-serif italic text-4xl md:text-5xl lg:text-6xl text-white leading-[1.2] max-w-4xl mx-auto">
          {t('philosophy.statement')}
        </h2>
      </div>
    </section>
  );
}
