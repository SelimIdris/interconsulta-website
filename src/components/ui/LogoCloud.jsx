import { cn } from "../../lib/utils";

const companies = [
  {
    name: "Apple",
    src: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  },
  {
    name: "Microsoft",
    src: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  },
  {
    name: "Amazon",
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    name: "Google",
    src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    name: "Meta",
    src: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
  },
  {
    name: "Samsung",
    src: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
  },
  {
    name: "Tesla",
    src: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
  },
  {
    name: "JPMorgan",
    src: "https://upload.wikimedia.org/wikipedia/commons/a/af/J_P_Morgan_Logo_2008_1.svg",
  },
];

export function LogoCloud({ className, ...props }) {
  return (
    <div
      className={cn(
        "grid grid-cols-2 md:grid-cols-4 border border-textDark/10",
        className
      )}
      {...props}
    >
      {companies.map((company, i) => (
        <div
          key={company.name}
          className={cn(
            "group flex items-center justify-center px-8 py-10 md:p-12 cursor-default transition-colors duration-300 hover:bg-sea/5",
            i % 4 !== 3 && "md:border-r border-textDark/10",
            i % 2 !== 1 && "border-r border-textDark/10 md:border-r-0",
            i < companies.length - 4 && "md:border-b border-textDark/10",
            i < companies.length - 2 && "border-b border-textDark/10 md:border-b-0",
          )}
        >
          <img
            src={company.src}
            alt={company.name}
            className="h-6 md:h-8 w-full max-w-[130px] object-contain select-none pointer-events-none
                       grayscale opacity-40
                       group-hover:grayscale-0 group-hover:opacity-100
                       transition-all duration-400"
          />
        </div>
      ))}
    </div>
  );
}
