import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const PageHeader = ({ 
  title, 
  description, 
  image,
  onScrollDown,
  align = 'center'
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: 'easeOut' }}
      >
        <motion.div 
          className="absolute inset-0 bg-black/30 mix-blend-multiply z-10"
          initial={{ opacity: 0.3 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 2 }}
        />
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          initial={{ filter: 'grayscale(100%) brightness(0.8)' }}
          animate={{ filter: 'grayscale(0%) brightness(1)' }}
          transition={{ duration: 2.5, ease: 'easeOut', delay: 0.2 }}
        />
      </motion.div>

      {/* Content */}
      <motion.div 
        className={`relative z-10 max-w-4xl mx-auto px-6 text-${align}`}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="font-display text-4xl md:text-6xl text-white mb-6"
          variants={itemVariants}
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p 
            className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            {description}
          </motion.p>
        )}
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.button
        onClick={onScrollDown}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white z-10 w-12 h-12 flex items-center justify-center rounded-full border border-white/20 hover:bg-white/10 transition-colors"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.6,
          delay: 1
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          animate={{ 
            y: [0, 5, 0],
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut"
          }}
        >
          <ArrowDown className="w-6 h-6" />
        </motion.div>
      </motion.button>

      {/* Decorative Elements */}
      <motion.div
        className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black/40 to-transparent z-[1]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      />
      <motion.div 
        className="absolute top-[15%] right-[15%] w-32 h-32 border border-white/10 z-10"
        animate={{ 
          y: [0, -10, 0], 
          rotate: [0, 5, 0],
          opacity: [0.1, 0.2, 0.1] 
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      />
        
      <motion.div 
        className="absolute bottom-[20%] left-[10%] w-24 h-24 border border-white/10 z-10"
        animate={{ 
          y: [0, 10, 0], 
          rotate: [0, -5, 0],
          opacity: [0.1, 0.3, 0.1] 
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1 
        }}
      />
    </section>
  );
};

export default PageHeader;
