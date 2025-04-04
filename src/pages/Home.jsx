// src/pages/Home.jsx
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageTransition from '../components/animations/PageTransition';

const CategoryButton = ({ path, title, delay = 0 }) => {
  const navigate = useNavigate();

  return (
    <motion.button
      onClick={() => navigate(path)}
      className="group relative overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20 py-5 px-8 w-full max-w-sm mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5, backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
      whileTap={{ scale: 0.98 }}
    >
      <motion.div 
        className="absolute inset-0 bg-white/5"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      
      <motion.h3 
        className="font-display text-2xl text-white mb-2 relative z-10"
        initial={{ y: 0 }}
        whileHover={{ y: -2 }}
        transition={{ duration: 0.3 }}
      >
        {title}
      </motion.h3>
      
      <div className="flex items-center gap-2 text-white/70 relative z-10">
        <motion.span 
          className="text-xs uppercase tracking-wider"
          initial={{ x: 0 }}
          whileHover={{ x: -4 }}
          transition={{ duration: 0.3 }}
        >
          Felfedezés
        </motion.span>
        <motion.div
          initial={{ x: -4, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          whileHover={{ x: 4 }}
          transition={{ duration: 0.3 }}
        >
          <ArrowRight className="w-4 h-4" />
        </motion.div>
      </div>
      
      {/* Bottom glowing border */}
      <motion.div 
        className="absolute bottom-0 left-0 h-[2px] w-full bg-white/80 origin-left"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Animated spotlight effect */}
      <motion.div 
        className="absolute -inset-full h-full w-full rounded-full opacity-30 blur-3xl bg-gradient-to-br from-white/30 to-transparent"
        initial={{ scale: 0, opacity: 0 }}
        whileHover={{ scale: 1, opacity: 0.15 }}
        transition={{ duration: 0.4 }}
      />
    </motion.button>
  );
};

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  return (
    <PageTransition>
      <div className="relative h-[100dvh] flex flex-col items-center justify-center overflow-hidden">
        {/* Background Image with parallax on mouse movement */}
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
        >
          <motion.div 
            className="absolute inset-0 bg-black/50 z-10"
            initial={{ opacity: 0.3 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 2 }}
          />
          <motion.img
            src="/images/hero/interior-split.jpg"
            alt="Artimestudio"
            className="w-full h-full object-cover"
            initial={{ filter: 'grayscale(100%) brightness(0.8)' }}
            animate={{ 
              filter: 'grayscale(0%) brightness(1)',
              scale: 1
            }}
            whileHover={{ scale: 1.02 }}
            transition={{ 
              duration: 2.5, 
              ease: "easeOut",
              scale: {
                duration: 5,
                ease: "easeOut"
              }
            }}
          />
        </motion.div>
        
        {/* Content */}
        <motion.div 
          className="relative z-10 text-center px-6 max-w-xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="font-display text-4xl md:text-6xl lg:text-7xl text-white mb-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Artimestudio
          </motion.h1>
          
          <motion.div
            className="h-px w-24 bg-white mx-auto my-10"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          />
          
          <motion.div
            className="flex flex-col md:flex-row gap-6 justify-center mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <CategoryButton 
              path="/canvas-art"
              title="Festmények"
              delay={0.8}
            />
            <CategoryButton 
              path="/interior-design"
              title="Lakberendezés"
              delay={1}
            />
          </motion.div>
        </motion.div>
        
        {/* Decorative elements */}
        <motion.div
          className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black/60 to-transparent z-[1]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
        
        {/* Subtle floating shapes */}
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
      </div>
    </PageTransition>
  );
};

export default Home;