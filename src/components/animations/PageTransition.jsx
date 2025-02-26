import { motion } from 'framer-motion';
import { useEffect, useRef, useLayoutEffect } from 'react';

const PageTransition = ({ children }) => {
  const pageRef = useRef(null);
  
  // Use layout effect to ensure DOM manipulation happens before paint
  useLayoutEffect(() => {
    // Check for and remove any duplicate main elements immediately
    const mainElements = document.querySelectorAll('main');
    if (mainElements.length > 1) {
      console.log(`Found ${mainElements.length} main elements, cleaning up...`);
      // Keep only the most recent main element
      for (let i = 0; i < mainElements.length - 1; i++) {
        console.log(`Removing duplicate main element ${i}`);
        mainElements[i].remove();
      }
    }
  }, []);
  
  // Scroll to top when component mounts (new page loads)
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Add a unique identifier to the current main element
    if (pageRef.current) {
      const mainElement = pageRef.current.querySelector('main');
      if (mainElement) {
        mainElement.dataset.active = 'true';
        mainElement.classList.add('active-page-content');
      }
    }
    
    // Cleanup function to prevent duplicate content
    return () => {
      // Add a small delay to ensure animations complete before cleanup
      setTimeout(() => {
        const mainElements = document.querySelectorAll('main:not(.active-page-content)');
        mainElements.forEach(el => {
          console.log('Cleaning up inactive main element');
          el.remove();
        });
      }, 300); // Match this with the exit animation duration
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
      onAnimationComplete={(definition) => {
        // After animation completes, check again for duplicates
        if (definition === "animate") {
          const mainElements = document.querySelectorAll('main');
          if (mainElements.length > 1) {
            // Keep only the active main element
            mainElements.forEach(el => {
              if (!el.classList.contains('active-page-content')) {
                el.remove();
              }
            });
          }
        }
      }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition; 