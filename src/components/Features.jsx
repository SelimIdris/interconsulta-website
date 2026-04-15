import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslation } from 'react-i18next';

gsap.registerPlugin(ScrollTrigger);

export default function Features() {
  const containerRef = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".feature-row", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 30,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const features = [
    { title: t('features.f1.title', "Persönliche Betreuung"), num: "01", desc: t('features.f1.desc', "Sie kommunizieren direkt mit Entscheidungsträgern, keine mühsamen internen Wege.") },
    { title: t('features.f2.title', "Fachkompetenz"), num: "02", desc: t('features.f2.desc', "Langjährige Erfahrung in der Revision von komplexen Unternehmensstrukturen.") },
    { title: t('features.f3.title', "Diskrete Zusammenarbeit"), num: "03", desc: t('features.f3.desc', "Absolute Vertraulichkeit und Schutz Ihrer geschäftskritischen Daten.") },
    { title: t('features.f4.title', "Lokale Verankerung"), num: "04", desc: t('features.f4.desc', "Mitten in Zürich, nah bei unseren Mandanten in der ganzen Schweiz.") }
  ];

  return (
    <section id="vorteile" ref={containerRef} className="py-24 bg-background border-t border-borderAccent">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
        
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-heading font-medium text-textDark tracking-tight">
            {t('features.headline', 'Ihre Vorteile')}
          </h2>
        </div>

        <div className="flex flex-col">
          {features.map((feat, idx) => (
            <div key={idx} className="feature-row flex flex-col md:flex-row items-baseline py-10 border-b border-borderAccent group cursor-default">
              <div className="w-full md:w-1/4 font-sans text-accent font-light text-xl mb-4 md:mb-0 transition-transform group-hover:translate-x-2">
                {feat.num}.
              </div>
              <div className="w-full md:w-1/3">
                <h3 className="font-heading text-2xl font-medium text-textDark group-hover:text-accent transition-colors">
                  {feat.title}
                </h3>
              </div>
              <div className="w-full md:w-5/12 mt-4 md:mt-0">
                <p className="font-sans text-textDark/60 font-light text-lg leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
