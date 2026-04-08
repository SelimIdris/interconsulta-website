import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const container = useRef(null);

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
              <span className="font-mono text-[11px] uppercase tracking-widest block text-sandstone">Zugelassener Revisionsexperte RAB</span>
            </div>
          </div>
        </div>

        {/* Story Text */}
        <div className="w-full lg:w-7/12 about-content">
          <span className="font-mono text-[11px] uppercase tracking-widest font-semibold mb-6 block text-sea">
            Über uns
          </span>
          <h2 className="font-sans font-bold text-4xl lg:text-5xl xl:text-6xl text-textDark mb-8 leading-[1.1] tracking-tight">
            Revision als strategischer Mehrwert für Ihr Unternehmen.
          </h2>
          
          <div className="font-sans max-w-xl">
            <p className="text-xl text-textDark font-medium leading-relaxed mb-6">
              «Eine Prüfung ist weit mehr als die blosse Erfüllung von Artikel 727 OR – sie ist ein zentrales Gütesiegel für Ihr Unternehmen.»
            </p>
            <p className="text-lg text-textDark/70 leading-relaxed mb-8">
              Wir verbinden fundierte Methodik (Swiss GAAP FER, OR) mit echtem unternehmerischem Verständnis. Durch den unkomplizierten Austausch auf Management-Stufe sichern wir Prozesse ab und schaffen strukturelles Vertrauen für die Zukunft.
            </p>
            <div className="h-[1px] w-16 bg-sea/30 mb-8"></div>
            <div className="flex items-center gap-4">
               <span className="font-mono text-[12px] uppercase tracking-widest text-sea font-semibold">Mitgliedschaften</span>
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
