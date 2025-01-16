// src/components/sections/Hero.jsx
import { motion } from 'framer-motion';
import Container from '../ui/Container';

const Hero = ({ title, description, image, align = 'left' }) => {
  return (
    <section className="pt-32 pb-20">
      <Container>
        <div className={`flex flex-col ${align === 'center' ? 'items-center text-center' : ''}`}>
          <motion.h1 
            className="font-display text-6xl mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {title}
          </motion.h1>
          {description && (
            <motion.p 
              className="max-w-2xl text-lg opacity-70"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {description}
            </motion.p>
          )}
          {image && (
            <motion.div 
              className="w-full mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <img 
                src={image} 
                alt={title} 
                className="w-full h-[60vh] object-cover"
              />
            </motion.div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default Hero;