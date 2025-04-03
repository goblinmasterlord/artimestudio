// src/pages/Home.jsx
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageTransition from '../components/animations/PageTransition';

const SplitSection = ({ path, image, title, position }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="split-image cursor-pointer relative overflow-hidden group"
      onClick={() => navigate(path)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div 
        className="w-full h-full bg-cover bg-center transform transition-transform duration-700 will-change-transform"
        style={{ backgroundImage: `url(${image})` }}
        whileHover={{ scale: 1.05 }}
      />
      <div className="absolute inset-0 bg-black/30 transition-opacity duration-700 group-hover:bg-black/40" />
      
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div 
          className="text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h2 className="text-white font-display text-3xl md:text-4xl lg:text-5xl tracking-wider mb-4">
            {title}
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="h-px w-16 bg-white mx-auto origin-left"
          />
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="flex items-center gap-2">
          <span className="text-xs uppercase tracking-wider">Felfedezés</span>
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </motion.div>
  );
};

const Home = () => {
  return (
    <PageTransition>
      <div className="grid md:grid-cols-split h-[100dvh]">
        <SplitSection
          path="/canvas-art"
          image="/images/hero/canvas-split.jpg"
          title="Festmények"
          position="left"
        />
        <SplitSection
          path="/interior-design"
          image="/images/hero/interior-split.jpg"
          title="Lakberendezés"
          position="right"
        />
      </div>
    </PageTransition>
  );
};

export default Home;