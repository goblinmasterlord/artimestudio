import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

const PageTransition = ({ children }) => {
  const pageRef = useRef(null);
  
  // Scroll to top when component mounts (new page loads)
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Cleanup function to prevent duplicate content
    return () => {
      // Ensure any animations are completed and elements are properly removed
      if (pageRef.current) {
        const mainElements = pageRef.current.querySelectorAll('main');
        if (mainElements.length > 1) {
          // Keep only the first main element
          for (let i = 1; i < mainElements.length; i++) {
            mainElements[i].remove();
          }
        }
      }
    };
  }, []);

  return (
    <motion.div
      ref={pageRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="page-transition-wrapper"
    >
      {children}
    </motion.div>
  );
};

export default PageTransition; 