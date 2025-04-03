// src/components/layout/Header.jsx
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Mail, Phone, Instagram, Linkedin } from 'lucide-react';

const Header = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (mobileMenuOpen) return;
      
      const currentScrollPos = window.scrollY;
      setScrolled(currentScrollPos > 20);
      setVisible((prevScrollPos > currentScrollPos) || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, mobileMenuOpen]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const headerBaseStyle = "fixed w-full z-50 transition-all duration-300";
  const headerVisibilityStyle = visible ? "translate-y-0" : "-translate-y-full";

  const navigationLinks = [
    { path: '/canvas-art', label: 'Festmények' },
    { path: '/interior-design', label: 'Lakberendezés' }
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' }
  ];

  // Determine the secondary CTA based on current location
  const getCurrentCTA = () => {
    if (location.pathname === '/canvas-art') {
      return { path: '/interior-design', label: 'Lakberendezés' };
    }
    return { path: '/canvas-art', label: 'Festmények' };
  };

  const secondaryCta = getCurrentCTA();

  return (
    <>
      <header className={`${headerBaseStyle} py-3 bg-white/90 backdrop-blur-sm shadow-sm ${headerVisibilityStyle}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex justify-between items-center">
          <Link 
            to="/" 
            className="font-display text-lg md:text-xl tracking-wider hover:opacity-70 transition-opacity"
          >
            artimestudio
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 items-center">
            {navigationLinks.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className="relative py-2"
              >
                <span className={`text-sm transition-opacity ${
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
            <Link 
              to="/contact"
              className="px-6 py-2 text-sm border border-black text-black hover:bg-black hover:text-white transition-colors"
            >
              Kapcsolat
            </Link>
            <Link 
              to={secondaryCta.path}
              className="ml-4 px-6 py-2 text-sm bg-black text-white hover:bg-black/90 transition-colors"
            >
              {secondaryCta.label}
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 -mr-2 text-gray-900"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Mobile Menu */}
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 bottom-0 w-[320px] bg-white z-50 flex flex-col"
            >
              <div className="flex flex-col h-full">
                {/* Navigation Links */}
                <div className="p-8 flex flex-col h-full">
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="self-end p-2 -mr-4 -mt-4 text-gray-900"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                  
                  <Link 
                    to="/" 
                    className="font-display text-lg tracking-wider hover:opacity-70 transition-opacity mb-12"
                  >
                    artimestudio
                  </Link>
                  
                  <div className="flex flex-col gap-6 mb-auto">
                    {navigationLinks.map(({ path, label }) => (
                      <Link
                        key={path}
                        to={path}
                        className={`text-base ${
                          location.pathname === path 
                            ? 'text-gray-900' 
                            : 'text-gray-500 hover:text-gray-900'
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {label}
                      </Link>
                    ))}
                  </div>
                  
                  <div className="mt-8 space-y-4">
                    <Link 
                      to="/contact"
                      className="inline-block w-full py-3 text-sm border border-black text-black text-center hover:bg-black hover:text-white transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Kapcsolatfelvétel
                    </Link>
                    <Link 
                      to={secondaryCta.path}
                      className="inline-block w-full py-3 text-sm bg-black text-white text-center hover:bg-black/90 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {secondaryCta.label}
                    </Link>
                  </div>
                </div>

                <div className="p-8 border-t">
                  <div className="flex gap-6">
                    {socialLinks.map(({ icon: Icon, href, label }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-gray-900 transition-colors"
                        aria-label={label}
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;