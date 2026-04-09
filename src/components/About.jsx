import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslation } from 'react-i18next';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const container = useRef(null);
  const { t } = useTranslation();

  useGSAP(() => {
    gsap.from('.about-content', {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: container.current,
        start: 'top 75%'
      }
    });
  }, { scope: container });

  return (
    <section ref={container} className="w-full py-24 lg:py-32 bg-background relative overflow-hidden" id="ueber-uns">

      {/* Background Graphic */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
           style={{ backgroundImage: 'radial-gradient(circle at center, #1E242B 2px, transparent 2px)', backgroundSize: '32px 32px' }}>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 w-full relative z-10 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

        {/* Abstract Portrait Placement */}
        <div className="w-full lg:w-5/12">
          <div className="about-content relative rounded-[2rem] overflow-hidden shadow-premium pt-[130%] bg-textDark">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: 'url("https://media.licdn.com/dms/image/v2/C5603AQGbFhX6JhiYlQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1519915476881?e=2147483647&v=beta&t=-KHqDaLCaDKJNZseVbIAKqtm33_foD2PrlkvxJWzd_k")' }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-textDark/80 via-textDark/20 to-transparent"></div>

            <div className="absolute bottom-8 left-8 right-8 text-white z-10">
              <span className="font-sans font-bold text-xl block mb-1">Claudio Piubel</span>
              <span className="font-mono text-[11px] uppercase tracking-widest block text-sandstone mb-3">{t('about.role')}</span>
              <a
                href="https://www.linkedin.com/in/claudio-piubel-67aa5110b?skipRedirect=true"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#0A66C2] hover:bg-[#0958a8] text-white text-[11px] font-sans font-semibold px-3 py-1.5 rounded-full transition-colors duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Story Text */}
        <div className="w-full lg:w-7/12 about-content">
          <span className="font-mono text-[11px] uppercase tracking-widest font-semibold mb-6 block text-sea">
            {t('about.label')}
          </span>
          <h2 className="font-sans font-bold text-[26px] sm:text-4xl lg:text-5xl xl:text-6xl text-textDark mb-8 leading-[1.1] tracking-tight">
            {t('about.headline')}
          </h2>

          <div className="font-sans max-w-xl">
            <p className="text-xl text-textDark font-medium leading-relaxed mb-6">
              {t('about.quote')}
            </p>
            <p className="text-lg text-textDark/70 leading-relaxed mb-8">
              {t('about.p1')}
            </p>
            <div className="h-[1px] w-16 bg-sea/30 mb-8"></div>
            <div className="flex items-center gap-4">
               <span className="font-mono text-[12px] uppercase tracking-widest text-sea font-semibold">{t('about.memberships')}</span>
               <div className="flex gap-4 opacity-70">
                 {/* Visual placeholders for expert bodies, adds immense trust visually without clutter */}
                 <span className="font-sans font-bold text-sm text-textDark">EXPERTsuisse</span>
                 <span className="font-sans text-sm text-textDark border-l border-textDark/20 pl-4">Zugelassener Revisionsexperte RAB</span>
               </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
