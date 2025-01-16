// src/components/layout/Header.jsx
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      
      // Determine if we've scrolled past the threshold
      setScrolled(currentScrollPos > 20);
      
      // Handle header visibility
      setVisible((prevScrollPos > currentScrollPos) || currentScrollPos < 10);
      
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const headerBaseStyle = "fixed w-full z-50 transition-all duration-300";
  const headerScrollStyle = scrolled ? "py-4 bg-white/90 backdrop-blur-sm shadow-sm" : "py-6";
  const headerVisibilityStyle = visible ? "translate-y-0" : "-translate-y-full";

  return (
    <header className={`${headerBaseStyle} ${headerScrollStyle} ${headerVisibilityStyle}`}>
      <nav className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        <Link 
          to="/" 
          className="font-display text-2xl tracking-wider hover:opacity-70 transition-opacity"
        >
          artimestudio
        </Link>
        
        <div className="flex gap-8 items-center">
          {[
            { path: '/canvas-art', label: 'Canvas Art' },
            { path: '/interior-design', label: 'Interior Design' }
          ].map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className="relative py-2"
            >
              <span className={`transition-opacity ${
                location.pathname === path ? 'opacity-100' : 'opacity-50 hover:opacity-70'
              }`}>
                {label}
              </span>
              {location.pathname === path && (
                <motion.div
                  layoutId="underline"
                  className="absolute bottom-0 left-0 w-full h-px bg-black"
                />
              )}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;