import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface LeckieCardProps {
  id: string;
  label: string;
  quote: string;
}

const LeckieCard = ({ id, label, quote }: LeckieCardProps) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    navigate(`/chat/${id}`);
  };

  return (
    <div
      className="leckie-card group relative w-40 md:w-44 cursor-pointer"
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Quote Bubble */}
      <div
        className={`absolute left-1/2 -translate-x-1/2 bottom-full mb-3 z-20
          bg-secondary/95 backdrop-blur-sm rounded-lg px-4 py-3
          text-sm text-foreground text-center max-w-[260px] min-w-[180px]
          border border-primary/30 shadow-glow-sm
          transition-all duration-300 pointer-events-none
          ${isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
      >
        <p className="leading-relaxed">{quote}</p>
        {/* Bubble tail */}
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-0 h-0 
          border-l-[8px] border-l-transparent 
          border-r-[8px] border-r-transparent 
          border-t-[8px] border-t-secondary/95" />
      </div>

      {/* Character Image Container */}
      <div
        className={`relative h-56 md:h-64 bg-gradient-to-b from-secondary to-card 
          flex items-center justify-center overflow-hidden rounded-xl
          transition-all duration-300
          ${isHovered ? "ring-2 ring-primary shadow-glow" : ""}`}
      >
        {/* Placeholder for character image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={`w-24 h-24 rounded-full bg-muted/30 flex items-center justify-center
            transition-all duration-300 ${isHovered ? "scale-110 bg-primary/20" : ""}`}>
            <span className={`text-3xl font-medium transition-colors duration-300
              ${isHovered ? "text-primary" : "text-muted-foreground/50"}`}>
              {label.slice(0, 2)}
            </span>
          </div>
        </div>

        {/* Hover glow overlay */}
        <div className={`absolute inset-0 transition-opacity duration-300
          bg-gradient-to-t from-primary/15 to-transparent
          ${isHovered ? "opacity-100" : "opacity-0"}`} />
      </div>

      {/* Label */}
      <div className="py-4 text-center">
        <span className={`text-sm font-medium transition-colors duration-300
          ${isHovered ? "text-primary" : "text-foreground"}`}>
          {label}
        </span>
      </div>
    </div>
  );
};

export default LeckieCard;
