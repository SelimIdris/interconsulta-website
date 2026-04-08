import { LogoCloud } from "./ui/LogoCloud";

export default function Partner() {
  return (
    <section className="w-full py-24 lg:py-32 bg-background border-t border-textDark/5" id="partner">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-20 w-full relative z-10">
        
        <div className="mb-16 md:w-4/5">
          <span className="font-mono text-[11px] uppercase tracking-widest font-semibold mb-6 block text-sea">
            Starke Partnerschaften
          </span>
          <h2 className="font-sans font-bold text-3xl lg:text-4xl xl:text-5xl text-textDark mb-4 leading-[1.1] tracking-tight">
            Wir wachsen mit den Besten.
          </h2>
          <p className="font-sans text-lg text-textDark/70 leading-relaxed max-w-2xl">
            Als moderne Prüfungsgesellschaft auditieren und beraten wir einige der namhaftesten Unternehmen. Vertrauen, das verpflichtet.
          </p>
        </div>

        <LogoCloud />
        
      </div>
    </section>
  );
}
