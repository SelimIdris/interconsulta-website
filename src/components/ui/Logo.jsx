export default function Logo({ className = "" }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Big Letter Block */}
      <span className="font-heading font-extrabold text-[40px] md:text-[46px] leading-none tracking-tighter text-textDark">
        I
      </span>
      
      {/* Divider */}
      <div className="h-[40px] md:h-[46px] w-[2px] bg-textDark/20"></div>
      
      {/* Text Group */}
      <div className="flex flex-col justify-center">
        <span className="font-heading font-extrabold text-[15px] md:text-[17px] leading-[1.1] tracking-wide text-textDark">
          INTERCONSULTA
        </span>
        <span className="font-heading font-medium text-[15px] md:text-[17px] leading-[1.1] tracking-wider text-textDark">
          AUDIT AG
        </span>
      </div>
    </div>
  );
}
