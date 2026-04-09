import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const container = useRef(null);
  const { t } = useTranslation();

  useGSAP(() => {
    gsap.from('.hero-reveal', {
      y: 30,
      opacity: 0,
      duration: 1.2,
      stagger: 0.1,
      ease: 'power3.out',
      delay: 0.1
    });

    gsap.from('.hero-video-wrapper', {
      opacity: 0,
      clipPath: 'inset(0 100% 0 0)',
      duration: 1.5,
      ease: 'power3.inOut',
      delay: 0.3
    });
  }, { scope: container });

  return (
    <section ref={container} className="relative w-full min-h-[100dvh] flex items-center bg-background overflow-hidden pt-32 lg:pt-40 pb-16 lg:pb-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 w-full relative z-10 flex flex-col lg:flex-row items-center gap-16 lg:gap-16">
      
        {/* Left Content - Typography */}
        <div className="w-full lg:w-[55%] flex flex-col justify-center">
          <span className="hero-reveal font-mono text-[12px] uppercase tracking-widest font-semibold mb-6 block text-sea flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-sea animate-pulse"></div>
            {t('hero.badge')}
          </span>

          <h1 className="hero-reveal text-left mb-8">
            <span className="block font-sans font-bold text-[28px] sm:text-4xl md:text-5xl lg:text-[72px] text-textDark tracking-tight mb-2 leading-[1.05]">
              {t('hero.headline1')}<br />{t('hero.headline2')}
            </span>
            <span className="block font-serif italic text-[28px] sm:text-4xl md:text-5xl lg:text-[72px] text-sea leading-[1.1] mt-2">
              {t('hero.italic')}
            </span>
          </h1>
          
          <p className="hero-reveal font-sans text-lg text-textDark/70 mb-10 max-w-md leading-relaxed">
            {t('hero.sub')}
          </p>

          <div className="hero-reveal flex items-center gap-6">
            <a href="#kontakt" className="bg-textDark text-white px-8 py-3.5 rounded-full font-sans font-medium text-[15px] transition-all duration-300 hover:bg-sea shadow-sm hover:shadow-md hover:-translate-y-[2px]">
              {t('hero.cta')}
            </a>
          </div>
        </div>

        {/* Right Content - Video Timelapse */}
        <div className="w-full lg:w-[45%] h-[50vh] lg:h-[75vh] flex justify-end items-center">
          <div className="hero-video-wrapper w-full h-full max-h-[800px] relative rounded-[2rem] overflow-hidden shadow-premium bg-sea/5">
            {/* YouTube Embed Scaled massively to guarantee no black borders anywhere */}
            <div className="absolute top-1/2 left-1/2 w-[300%] h-[300%] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <iframe
                title="Paradeplatz Zurich Timelapse"
                src="https://www.youtube-nocookie.com/embed/wOPwaFmC7QI?autoplay=1&mute=1&loop=1&playlist=wOPwaFmC7QI&controls=0&showinfo=0&rel=0&modestbranding=1&disablekb=1&playsinline=1"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                className="w-full h-full object-cover opacity-90"
              ></iframe>
            </div>
            {/* Overlay to integrate the video smoothly into the brand color palette */}
            <div className="absolute inset-0 bg-sea/10 mix-blend-multiply pointer-events-none"></div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
