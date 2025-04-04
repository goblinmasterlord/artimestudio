import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const PageHeader = ({ 
  title, 
  description, 
  image,
  onScrollDown,
  align = 'center'
}) => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        <div className="absolute inset-0 bg-black/30 mix-blend-multiply z-10" />
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          initial={{ filter: 'grayscale(100%)' }}
          animate={{ filter: 'grayscale(0%)' }}
          transition={{ duration: 1.8, ease: 'easeOut', delay: 0.2 }}
        />
      </motion.div>

      {/* Content */}
      <div className={`relative z-10 max-w-4xl mx-auto px-6 text-${align}`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="font-display text-4xl md:text-6xl text-white mb-6">
            {title}
          </h1>
          {description && (
            <p className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
              {description}
            </p>
          )}
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.button
        onClick={onScrollDown}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.6,
          delay: 1,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.5
        }}
      >
        <ArrowDown className="w-8 h-8" />
      </motion.button>

      {/* Decorative Elements */}
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black/40 to-transparent z-[1]" />
      <div className="absolute top-0 right-0 w-64 h-64 border border-white/20 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-32 h-32 border border-white/20 translate-y-1/2 -translate-x-1/2" />
    </section>
  );
};

export default PageHeader;
