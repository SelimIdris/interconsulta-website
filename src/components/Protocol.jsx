import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslation } from 'react-i18next';

gsap.registerPlugin(ScrollTrigger);

export default function Protocol() {
  const containerRef = useRef(null);
  const { t } = useTranslation();

  const steps = [
    {
      number: '01',
      title: t('protocol.s1title'),
      desc: t('protocol.s1desc'),
    },
    {
      number: '02',
      title: t('protocol.s2title'),
      desc: t('protocol.s2desc'),
    },
    {
      number: '03',
      title: t('protocol.s3title'),
      desc: t('protocol.s3desc'),
    }
  ];

  useGSAP(() => {
    gsap.from('.protocol-item', {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 75%'
      }
    });

    gsap.from('.protocol-line', {
      scaleY: 0,
      transformOrigin: 'top center',
      duration: 1.5,
      ease: 'power3.inOut',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 60%'
      }
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="w-full py-24 lg:py-32 bg-white" id="vorgehen">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 w-full relative z-10 flex flex-col md:flex-row gap-16 lg:gap-24">

        {/* Left Side: Title */}
        <div className="w-full lg:w-5/12">
          <span className="font-mono text-[11px] uppercase tracking-widest font-semibold mb-6 block text-sea">
            {t('protocol.label')}
          </span>
          <h2 className="font-sans font-bold text-[26px] sm:text-4xl lg:text-5xl xl:text-6xl text-textDark mb-6 leading-[1.1] tracking-tight">
            {t('protocol.headline')}
          </h2>
          <p className="font-sans text-lg text-textDark/70 leading-relaxed max-w-sm">
            {t('protocol.sub')}
          </p>
        </div>

        {/* Right Side: Timeline */}
        <div className="w-full lg:w-7/12 flex flex-col gap-12 relative">
          {/* Timeline continuous line */}
          <div className="protocol-line absolute left-6 md:left-8 top-6 bottom-6 w-[2px] bg-sea/10"></div>

          {steps.map((step, index) => (
            <div key={index} className="protocol-item flex gap-8 md:gap-12 relative z-10">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white border-2 border-sea/10 flex flex-shrink-0 items-center justify-center font-mono text-[14px] md:text-[18px] text-sea font-bold shadow-sm z-20">
                {step.number}
              </div>
              <div className="bg-background rounded-[2rem] p-8 md:p-10 hover:shadow-soft transition-shadow duration-300 w-full">
                <h3 className="font-sans font-bold text-2xl text-textDark mb-3">
                  {step.title}
                </h3>
                <p className="font-sans text-lg text-textDark/70 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
