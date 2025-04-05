// src/components/animations/FadeIn.jsx
import { motion } from 'framer-motion';

const defaultVariants = {
  hidden: { 
    opacity: 0,
    y: 20
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

// Element that fades in on scroll or initial render
const FadeIn = ({ 
  children, 
  delay = 0, 
  duration = 0.6, 
  threshold = 0.1,
  distance = 20,
  direction = 'up',
  staggerChildren = 0.1,
  className = "",
  ...props 
}) => {
  // Calculate the initial position based on direction
  const getInitialPosition = () => {
    switch(direction) {
      case 'up': return { y: distance };
      case 'down': return { y: -distance };
      case 'left': return { x: distance };
      case 'right': return { x: -distance };
      default: return { y: distance };
    }
  };

  const customVariants = {
    hidden: {
      opacity: 0,
      ...getInitialPosition()
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: "easeOut",
        staggerChildren,
        when: "beforeChildren"
      }
    }
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, threshold }}
      variants={customVariants}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;