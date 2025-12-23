import { Link, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface HeaderProps {
  showBack?: boolean;
}

const Header = ({ showBack = false }: HeaderProps) => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header className="flex justify-between items-center px-6 md:px-8 py-5 text-sm">
      <div>
        {showBack && !isHome && (
          <Link to="/" className="back-link flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            <span>返回首页</span>
          </Link>
        )}
      </div>
      <nav className="flex items-center gap-6">
        <Link to="/concept" className="nav-link">
          创作理念
        </Link>
        <Link to="/evolution" className="nav-link">
          未来演进
        </Link>
        <a
          href="https://www.example.com"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link"
        >
          求点赞评论
        </a>
      </nav>
    </header>
  );
};

export default Header;
