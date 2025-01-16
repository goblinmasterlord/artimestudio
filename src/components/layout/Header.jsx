// src/components/layout/Header.jsx
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = () => {
  const location = useLocation();

  return (
    <header className="fixed w-full z-50 px-8 py-6">
      <nav className="flex justify-between items-center">
        <Link to="/" className="font-display text-2xl tracking-wider">
          artimestudio
        </Link>
        <div className="flex gap-8">
          <Link 
            to="/canvas-art" 
            className={`hover:opacity-70 transition-opacity ${
              location.pathname === '/canvas-art' ? 'opacity-100' : 'opacity-50'
            }`}
          >
            Canvas Art
          </Link>
          <Link 
            to="/interior-design"
            className={`hover:opacity-70 transition-opacity ${
              location.pathname === '/interior-design' ? 'opacity-100' : 'opacity-50'
            }`}
          >
            Interior Design
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;