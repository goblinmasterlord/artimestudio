import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const PageNav = ({ items = [], logo = "artimestudio", secondaryCta = null }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Reset active section when location changes
  useEffect(() => {
    setActiveSection(null);
    // Close mobile menu when navigating
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setScrolled(currentScrollPos > 20);

      // Update active section based on scroll position only if items have id property
      if (items.length && items[0].id) {
        const sections = items.map(item => document.getElementById(item.id));
        const currentSection = sections.reduce((acc, section) => {
          if (!section) return acc;
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            return section.id;
          }
          return acc;
        }, null);
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [items]);

  const handleNavigation = (item) => {
    if (item.id) {
      // Scroll navigation
      const element = document.getElementById(item.id);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    } else if (item.path) {
      // Path navigation
      navigate(item.path);
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header 
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? 'py-3 bg-white/90 backdrop-blur-sm shadow-sm' : 'py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex justify-between items-center h-[50px]">
          <Link 
            to="/" 
            className="font-display text-xl md:text-2xl tracking-wider hover:opacity-70 transition-opacity"
          >
            {logo}
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 items-center">
            {items.map((item) => (
              <button
                key={item.id || item.path}
                onClick={() => handleNavigation(item)}
                className="relative py-2"
              >
                <span className={`transition-opacity ${
                  (item.id && activeSection === item.id) ? 'opacity-100' : 'opacity-50 hover:opacity-70'
                }`}>
                  {item.label}
                </span>
                {item.id && activeSection === item.id && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-0 left-0 w-full h-px bg-black"
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                )}
              </button>
            ))}
            
            {secondaryCta && (
              <Link 
                to={secondaryCta.path}
                className="px-6 py-2 border border-black text-black hover:bg-black hover:text-white transition-colors"
              >
                {secondaryCta.label}
              </Link>
            )}
            
            <Link 
              to="/contact"
              className="ml-4 px-6 py-2 bg-black text-white hover:bg-black/90 transition-colors"
            >
              Kapcsolat
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 -mr-2 text-gray-900"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
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
                <div className="p-8 flex-grow">
                  <div className="mb-8 space-y-2">
                    {items.map((item) => (
                      <button
                        key={item.id || item.path}
                        onClick={() => handleNavigation(item)}
                        className={`block w-full text-left text-lg py-3 relative ${
                          (item.id && activeSection === item.id)
                            ? 'text-gray-900' 
                            : 'text-gray-500 hover:text-gray-900'
                        }`}
                      >
                        {item.label}
                        {item.id && activeSection === item.id && (
                          <motion.div
                            layoutId="mobile-underline"
                            className="absolute bottom-0 left-0 w-8 h-px bg-black"
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                          />
                        )}
                      </button>
                    ))}
                  </div>

                  {secondaryCta && (
                    <Link 
                      to={secondaryCta.path}
                      className="inline-block w-full py-3 mb-4 border border-black text-black text-center hover:bg-black hover:text-white transition-colors"
                    >
                      {secondaryCta.label}
                    </Link>
                  )}

                  <Link 
                    to="/contact"
                    className="inline-block w-full py-3 bg-black text-white text-center hover:bg-black/90 transition-colors"
                  >
                    Kapcsolatfelvétel
                  </Link>
                </div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default PageNav; 