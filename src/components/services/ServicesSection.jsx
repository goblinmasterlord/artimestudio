import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, Home, Frame, Pencil } from 'lucide-react';
import Container from '../ui/Container';

const ServicesSection = ({ type = 'canvas' }) => {
  const [hoveredService, setHoveredService] = useState(null);

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
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
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
            <div className="h-px w-full bg-black/5 absolute top-1/3" />
            <div className="h-px w-full bg-black/5 absolute top-2/3" />
          </div>

          {/* Services Grid */}
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-px bg-black/5">
            {services[type].map((service, index) => (
              <motion.div
                key={service.title}
                className="group bg-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                onHoverStart={() => setHoveredService(index)}
                onHoverEnd={() => setHoveredService(null)}
              >
                <div className="relative h-full p-12 flex flex-col">
                  {/* Service Number */}
                  <motion.span 
                    className="absolute top-8 right-8 font-display text-8xl opacity-5"
                    initial={{ opacity: 0.05 }}
                    animate={{ 
                      opacity: hoveredService === index ? 0.1 : 0.05,
                      scale: hoveredService === index ? 1.1 : 1
                    }}
                  >
                    {service.displayNumber}
                  </motion.span>

                  {/* Icon */}
                  <motion.div 
                    className="mb-8"
                    animate={{ 
                      scale: hoveredService === index ? 1.1 : 1,
                      x: hoveredService === index ? 10 : 0
                    }}
                  >
                    <service.icon className="w-10 h-10" />
                  </motion.div>

                  {/* Content */}
                  <motion.div
                    animate={{ 
                      x: hoveredService === index ? 10 : 0
                    }}
                  >
                    <h3 className="font-display text-2xl mb-4">
                      {service.title}
                    </h3>
                    <p className="opacity-70 leading-relaxed">
                      {service.description}
                    </p>
                  </motion.div>

                  {/* Hover Indicator */}
                  <AnimatePresence>
                    {hoveredService === index && (
                      <motion.div
                        className="absolute bottom-0 left-0 w-full h-px bg-black"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        exit={{ scaleX: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </AnimatePresence>
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