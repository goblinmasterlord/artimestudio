import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const CrossPromotionBanner = () => {
  const location = useLocation();
  
  // Determine content based on current page
  const isCanvasArtPage = location.pathname.includes('canvas-art');
  
  const content = isCanvasArtPage
    ? {
        heading: "Szép otthon tervezés",
        description: "Megálmodom és megtervezem otthona belső tereit, hogy a funkcionalitás és az esztétikum tökéletes harmóniában legyen.",
        linkTo: "/interior-design",
        linkText: "Lakberendezés",
        bgImage: "/images/banners/interior-promo.jpg"
      }
    : {
        heading: "Egyedi festmények",
        description: "Festményeimmel egyedi hangulatot teremthet otthonában. Fedezze fel alkotásaimat vagy rendeljen személyre szabott művet.",
        linkTo: "/canvas-art",
        linkText: "Festmények",
        bgImage: "/images/banners/canvas-promo.jpg"
      };

  // Animation variants
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
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        delay: 0.4,
        ease: "easeOut" 
      }
    },
    hover: { 
      y: -5, 
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      transition: { 
        duration: 0.3, 
        ease: "easeOut",
        y: {
          type: "spring",
          stiffness: 300,
          damping: 20
        }
      }
    },
    tap: { 
      scale: 0.98,
      transition: { 
        duration: 0.1 
      }
    }
  };

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <motion.div 
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        <div className="absolute inset-0 bg-black/40 z-10" />
        <motion.img 
          src={content.bgImage} 
          alt="" 
          className="w-full h-full object-cover"
          initial={{ filter: 'grayscale(100%)' }}
          animate={{ filter: 'grayscale(0%)' }}
          transition={{ duration: 1.8, ease: 'easeOut', delay: 0.2 }}
        />
      </motion.div>
      
      <motion.div 
        className="relative z-20 max-w-7xl mx-auto px-6 md:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, threshold: 0.1 }}
      >
        <div className="max-w-xl">
          <motion.h2 
            className="font-display text-3xl md:text-4xl text-white mb-6"
            variants={itemVariants}
          >
            {content.heading}
          </motion.h2>
          <motion.p 
            className="text-base text-white/90 mb-8"
            variants={itemVariants}
          >
            {content.description}
          </motion.p>
          <motion.div
            variants={itemVariants}
          >
            <Link 
              to={content.linkTo}
              className="inline-flex items-center px-7 py-3.5 text-sm bg-white text-black hover:bg-white/90 transition-colors group"
            >
              <span>{content.linkText}</span>
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/40 to-transparent" />
      <motion.div 
        className="absolute top-0 right-0 w-64 h-64 border border-white/20 -translate-y-1/2 translate-x-1/2"
        animate={{ 
          y: ['-50%', '-52%', '-50%'],
          opacity: [0.2, 0.3, 0.2] 
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 w-32 h-32 border border-white/20 translate-y-1/2 -translate-x-1/2"
        animate={{ 
          y: ['50%', '48%', '50%'],
          opacity: [0.2, 0.3, 0.2] 
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

export default CrossPromotionBanner; 