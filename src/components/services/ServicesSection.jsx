import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, Home, Frame, Pencil } from 'lucide-react';
import Container from '../ui/Container';

const ServicesSection = ({ type = 'canvas' }) => {
  const [hoveredService, setHoveredService] = useState(null);

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (index) => ({ 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring",
        damping: 25,
        stiffness: 300,
        delay: index * 0.15,
      }
    }),
    hover: {
      y: -5,
      backgroundColor: 'rgba(255, 255, 255, 1)',
      boxShadow: '0 10px 40px rgba(0, 0, 0, 0.05)',
      transition: { 
        type: "spring",
        stiffness: 300,
        damping: 20 
      }
    }
  };

  const textVariants = {
    initial: { x: 0 },
    hover: { 
      x: 10,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  const iconVariants = {
    initial: { scale: 1, x: 0 },
    hover: { 
      scale: 1.1, 
      x: 10,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const services = {
    canvas: [
      {
        icon: Palette,
        title: 'Egyedi festmények',
        description: 'Személyre szabott alkotásokat készítek az elképzeléseid alapján. Együtt dolgozunk, hogy a stílusodhoz tökéletesen illő műalkotás szülessen.',
        displayNumber: '01'
      },
      {
        icon: Frame,
        title: 'Művészeti tanácsadás',
        description: 'Segítek kiválasztani azokat az alkotásokat, amelyek a legjobban illenek az otthonodba és személyiségedhez.',
        displayNumber: '02'
      },
      {
        icon: Pencil,
        title: 'Festménysorozatok',
        description: 'Egységes művészeti sorozatokat alkotok otthonodba vagy üzleti teredbe, hogy tökéletes harmóniát teremtsek.',
        displayNumber: '03'
      }
    ],
    interior: [
      {
        icon: Home,
        title: 'Lakberendezés',
        description: 'Teljes körű lakberendezési szolgáltatást nyújtok, hogy otthonod vagy üzleti tered harmonikus, egyedi és funkcionális legyen.',
        displayNumber: '01'
      },
      {
        icon: Palette,
        title: 'Színtanácsadás',
        description: 'Segítek megtalálni a tökéletes színvilágot, amely kellemes hangulatot teremt és tükrözi egyéniségedet.',
        displayNumber: '02'
      },
      {
        icon: Frame,
        title: 'Térszervezés',
        description: 'Optimális elrendezést tervezek, hogy a teret maximálisan kihasználd, miközben megőrizzük az esztétikai harmóniát.',
        displayNumber: '03'
      }
    ]
  };

  return (
    <section className="py-32">
      <Container>
        <motion.div 
          className="mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="max-w-lg">
            <h2 className="font-display text-5xl mb-6">
              Szolgáltatások
            </h2>
            <p className="opacity-70 text-lg">
              {type === 'canvas' 
                ? 'Fedezd fel művészeti szolgáltatásaimat az egyedi alkotásoktól a művészeti tanácsadásig.'
                : 'Segítek, hogy otthonod tökéletesen tükrözze egyéniségedet a lakberendezési szolgáltatásaimmal.'}
            </p>
          </div>
        </motion.div>

        <div className="relative">
          {/* Background Lines */}
          <div className="absolute inset-0 w-full h-full">
            <motion.div 
              className="h-px w-full bg-black/5 absolute top-1/3"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
            <motion.div 
              className="h-px w-full bg-black/5 absolute top-2/3"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            />
          </div>

          {/* Services Grid */}
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-px bg-black/5">
            {services[type].map((service, index) => (
              <motion.div
                key={service.title}
                className="group relative bg-white cursor-pointer overflow-hidden"
                variants={cardVariants}
                custom={index}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true, margin: "-50px" }}
                onHoverStart={() => setHoveredService(index)}
                onHoverEnd={() => setHoveredService(null)}
              >
                <div className="relative h-full p-12 flex flex-col">
                  {/* Service Number */}
                  <motion.span 
                    className="absolute top-8 right-8 font-display text-8xl opacity-5 pointer-events-none"
                    animate={{ 
                      opacity: hoveredService === index ? 0.1 : 0.05,
                      scale: hoveredService === index ? 1.1 : 1,
                      transition: { duration: 0.4, ease: "easeOut" }
                    }}
                  >
                    {service.displayNumber}
                  </motion.span>

                  {/* Icon */}
                  <motion.div 
                    className="mb-8"
                    variants={iconVariants}
                  >
                    <service.icon className="w-10 h-10" />
                  </motion.div>

                  {/* Content */}
                  <motion.div
                    variants={textVariants}
                  >
                    <h3 className="font-display text-2xl mb-4">
                      {service.title}
                    </h3>
                    <p className="opacity-70 leading-relaxed">
                      {service.description}
                    </p>
                  </motion.div>

                  {/* Hover bottom line */}
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-black/80"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  />

                  {/* Hover background effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/[0.02] to-transparent pointer-events-none"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ServicesSection;