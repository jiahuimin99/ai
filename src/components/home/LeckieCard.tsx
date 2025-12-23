import { useNavigate } from "react-router-dom";

interface LeckieCardProps {
  id: string;
  label: string;
  quote: string;
  imagePlaceholder?: string;
}

const LeckieCard = ({ id, label, quote, imagePlaceholder }: LeckieCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/chat/${id}`);
  };

  return (
    <div
      className="leckie-card group-hover-dim w-40 md:w-44 cursor-pointer"
      onClick={handleClick}
    >
      {/* Quote Bubble */}
      <div className="quote-bubble z-10">
        <p className="leading-relaxed">{quote}</p>
      </div>

      {/* Character Image Container */}
      <div className="relative h-56 md:h-64 bg-gradient-to-b from-secondary to-card flex items-center justify-center overflow-hidden">
        {/* Placeholder for character image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-24 h-24 rounded-full bg-muted/30 flex items-center justify-center">
            <span className="text-3xl font-medium text-muted-foreground/50">
              {label.slice(0, 2)}
            </span>
          </div>
        </div>

        {/* Hover glow effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-primary/10 to-transparent" />
      </div>

      {/* Label */}
      <div className="py-4 text-center">
        <span className="text-sm font-medium text-foreground">{label}</span>
      </div>
    </div>
  );
};

export default LeckieCard;
