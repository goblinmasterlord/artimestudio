// src/components/services/ServiceCard.jsx
import { motion } from 'framer-motion';

const ServiceCard = ({ title, description, icon: Icon }) => {
  return (
    <motion.div 
      className="p-6 flex flex-col items-start"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      {Icon && <Icon className="w-8 h-8 mb-4" />}
      <h3 className="font-display text-xl mb-3">{title}</h3>
      <p className="opacity-70 leading-relaxed">{description}</p>
    </motion.div>
  );
};

// src/components/services/ServicesSection.jsx
import Container from '../ui/Container';
import { Palette, Home, Frame, Pencil } from 'lucide-react';

const ServicesSection = ({ type = 'canvas' }) => {
  const services = {
    canvas: [
      {
        icon: Palette,
        title: 'Custom Paintings',
        description: 'Commission unique pieces tailored to your vision and space. We work closely with you to create art that resonates with your style.'
      },
      {
        icon: Frame,
        title: 'Art Consultation',
        description: 'Expert guidance in selecting pieces that complement your space and reflect your personal aesthetic.'
      },
      {
        icon: Pencil,
        title: 'Artwork Series',
        description: 'Creation of cohesive art series for commercial spaces, hotels, or personal collections.'
      }
    ],
    interior: [
      {
        icon: Home,
        title: 'Interior Design',
        description: 'Full-service interior design solutions for residential and commercial spaces, focusing on creating harmonious environments.'
      },
      {
        icon: Palette,
        title: 'Color Consultation',
        description: 'Expert color scheme development to enhance your space and create the perfect atmosphere.'
      },
      {
        icon: Frame,
        title: 'Space Planning',
        description: 'Optimal layout design to maximize functionality and flow while maintaining aesthetic appeal.'
      }
    ]
  };

  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl mb-4">Our Services</h2>
          <p className="opacity-70 max-w-2xl mx-auto">
            {type === 'canvas' 
              ? 'Discover our range of artistic services, from custom commissions to art consultation.'
              : 'Transforming spaces with our comprehensive interior design services.'}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services[type].map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ServicesSection;