// src/components/animations/FadeIn.jsx
import { motion } from 'framer-motion';

const FadeIn = ({ 
  children, 
  delay = 0,
  direction = 'up',
  className = '',
  duration = 0.6 
}) => {
  const getDirectionVariants = () => {
    switch (direction) {
      case 'up':
        return { y: 20 };
      case 'down':
        return { y: -20 };
      case 'left':
        return { x: -20 };
      case 'right':
        return { x: 20 };
      default:
        return { y: 0 };
    }
  };

  return (
    <motion.div
      className={className}
      initial={{ 
        opacity: 0,
        ...getDirectionVariants()
      }}
      animate={{ 
        opacity: 1,
        y: 0,
        x: 0
      }}
      transition={{
        duration: duration,
        delay: delay,
        ease: 'easeOut'
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;