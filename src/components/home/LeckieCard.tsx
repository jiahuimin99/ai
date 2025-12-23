import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSoundEffect } from "@/hooks/useSoundEffect";

interface LeckieCardProps {
  id: string;
  label: string;
  quote: string;
  image: string;
}

const LeckieCard = ({ id, label, quote, image }: LeckieCardProps) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const { playHoverSound } = useSoundEffect();

  const handleClick = () => {
    navigate(`/chat/${id}`);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    playHoverSound();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`leckie-card group relative cursor-pointer ${isHovered ? "z-10" : "z-1"}`}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
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

      {/* Square Character Image Container */}
      <div
        className={`relative aspect-square w-28 md:w-32 lg:w-36 overflow-hidden rounded-xl
          transition-all duration-300
          ${isHovered ? "ring-2 ring-primary shadow-glow-lg" : ""}`}
      >
        <img 
          src={image} 
          alt={label}
          className="w-full h-full object-cover"
        />

        {/* Hover glow overlay */}
        <div className={`absolute inset-0 transition-opacity duration-300
          bg-gradient-to-t from-primary/30 to-transparent
          ${isHovered ? "opacity-100" : "opacity-0"}`} />
      </div>

      {/* Label */}
      <div className="py-2 text-center">
        <span className={`text-xs md:text-sm font-medium transition-colors duration-300
          ${isHovered ? "text-primary" : "text-foreground"}`}>
          {label}
        </span>
      </div>
    </div>
  );
};

export default LeckieCard;
