// src/components/ui/Button.jsx
import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'default',
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-colors duration-300";
  
  const variants = {
    primary: "bg-black text-white hover:bg-opacity-90",
    secondary: "bg-white text-black border border-black hover:bg-black hover:text-white",
    text: "bg-transparent text-black hover:opacity-70"
  };
  
  const sizes = {
    small: "px-5 py-2.5 text-sm",
    default: "px-7 py-3.5 text-sm",
    large: "px-9 py-4.5 text-base"
  };

  return (
    <motion.button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;