import { Link } from "react-router-dom";
import { Lightbulb, TrendingUp, ThumbsUp } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-8 py-4 text-sm bg-background/80 backdrop-blur-md border-b border-border/50">
      <Link to="/" className="text-foreground font-medium hover:text-primary transition-colors">
        毒舌审校员
      </Link>
      <nav className="flex items-center gap-5">
        <Link to="/concept" className="nav-link flex items-center gap-1.5">
          <Lightbulb className="w-4 h-4" />
          <span className="hidden sm:inline">创作理念</span>
        </Link>
        <Link to="/evolution" className="nav-link flex items-center gap-1.5">
          <TrendingUp className="w-4 h-4" />
          <span className="hidden sm:inline">未来演进</span>
        </Link>
        <a
          href="https://www.example.com"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link flex items-center gap-1.5"
        >
          <ThumbsUp className="w-4 h-4" />
          <span className="hidden sm:inline">求点赞评论</span>
        </a>
      </nav>
    </header>
  );
};

export default Header;
