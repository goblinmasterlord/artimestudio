import React from 'react';
import { motion } from 'framer-motion';
import Container from '../ui/Container';
import aboutImage from '/images/about/about-image.jpg';

const AboutSection = () => {
  return (
    <section className="py-32 bg-black/[0.02]">
      <Container className="px-8 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileHover={{ scale: 1.02 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative max-w-md mx-auto lg:mx-0"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <img 
                src={aboutImage} 
                alt="Portrait" 
                className="object-cover w-full h-full"
              />
              {/* Decorative elements */}
              <motion.div 
                className="absolute -top-4 -right-4 w-16 h-16 border border-black"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              />
              <motion.div 
                className="absolute -bottom-4 -left-4 w-24 h-24 border border-black"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              />
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Small decorative line */}
            <div className="w-12 h-px bg-black mb-8" />
            
            <div className="max-w-lg">
              <h2 className="font-display text-4xl mb-8">Az artimestudio-ról</h2>
              
              <div className="space-y-6 text-base opacity-70 leading-relaxed">
                <p>
                  Az artimestudio egy olyan kreatív műhely, ahol a művészet és a design 
                  találkozik. Célunk, hogy egyedi és személyre szabott megoldásokat 
                  kínáljunk ügyfeleinknek, legyen szó akár festményről, akár lakberendezésről.
                </p>
                
                <p>
                  Minden projektünk egy közös utazás, ahol az Ön elképzelései és a mi 
                  szakértelmünk együtt hozza létre azt a tökéletes végeredményt, ami 
                  nem csak szép, de funkcionális és időtálló is.
                </p>
                
              </div>
              
              {/* Signature SVG placeholder */}
              <motion.div 
                className="mt-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <svg 
                  viewBox="0 0 200 60" 
                  className="w-48 h-auto"
                >
                  <path 
                    d="M10 30C40 30 40 10 70 10C100 10 100 50 130 50C160 50 160 30 190 30" 
                    stroke="black" 
                    strokeWidth="2" 
                    fill="none"
                  />
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;