import { PlusIcon } from "lucide-react";
import { cn } from "../../lib/utils";

export function LogoCloud({ className, ...props }) {
  return (
    <div
      className={cn(
        "relative grid grid-cols-2 border-x border-textDark/10 md:grid-cols-4",
        className
      )}
      {...props}
    >
      <div className="-translate-x-1/2 -top-px pointer-events-none absolute left-1/2 w-[calc(100%+2px)] border-t border-textDark/10" />

      {/* UBS */}
      <LogoCard
        className="relative border-r border-b border-textDark/10 bg-background"
        logo={{
          src: "https://upload.wikimedia.org/wikipedia/commons/7/7b/UBS_Logo.svg",
          alt: "UBS",
        }}
      >
        <PlusIcon
          className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6 text-textDark/30"
          strokeWidth={1}
        />
      </LogoCard>

      {/* Novartis */}
      <LogoCard
        className="border-b border-textDark/10 md:border-r"
        logo={{
          src: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Novartis_logo.svg",
          alt: "Novartis",
        }}
      />

      {/* Credit Suisse */}
      <LogoCard
        className="relative border-r border-b border-textDark/10 md:bg-white"
        logo={{
          src: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Credit_Suisse_logo.svg",
          alt: "Credit Suisse",
        }}
      >
        <PlusIcon
          className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6 text-textDark/30"
          strokeWidth={1}
        />
        <PlusIcon
          className="-bottom-[12.5px] -left-[12.5px] absolute z-10 hidden size-6 md:block text-textDark/30"
          strokeWidth={1}
        />
      </LogoCard>

      {/* Roche */}
      <LogoCard
        className="relative border-b border-textDark/10 bg-white md:bg-background"
        logo={{
          src: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Hoffmann-La_Roche_logo.svg",
          alt: "Roche",
        }}
      />

      {/* Nestlé */}
      <LogoCard
        className="relative border-r border-b border-textDark/10 bg-white md:border-b-0 md:bg-background"
        logo={{
          src: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Nestle_Logo_2015.svg",
          alt: "Nestlé",
        }}
      >
        <PlusIcon
          className="-right-[12.5px] -bottom-[12.5px] md:-left-[12.5px] absolute z-10 size-6 text-textDark/30 md:hidden"
          strokeWidth={1}
        />
      </LogoCard>

      {/* Lindt */}
      <LogoCard
        className="border-b border-textDark/10 bg-background md:border-r md:border-b-0 md:bg-white"
        logo={{
          src: "https://upload.wikimedia.org/wikipedia/commons/6/64/Lindt_%26_Spr%C3%BCngli_Logo.svg",
          alt: "Lindt",
        }}
      />

      {/* Schindler */}
      <LogoCard
        className="border-r border-textDark/10"
        logo={{
          src: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Schindler_Group_logo.svg",
          alt: "Schindler",
        }}
      />

      {/* Swatch */}
      <LogoCard
        className="bg-white"
        logo={{
          src: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Swatch_Logo.svg",
          alt: "Swatch",
        }}
      />

      <div className="-translate-x-1/2 -bottom-px pointer-events-none absolute left-1/2 w-[calc(100%+2px)] border-b border-textDark/10" />
    </div>
  );
}

function LogoCard({ logo, className, children, ...props }) {
  return (
    <div
      className={cn(
        "flex items-center justify-center px-6 py-10 md:p-12 hover:bg-sea/5 transition-colors duration-300",
        className
      )}
      {...props}
    >
      <img
        alt={logo.alt}
        className="pointer-events-none h-6 md:h-8 select-none grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 object-contain w-full max-w-[140px]"
        src={logo.src}
      />
      {children}
    </div>
  );
}
