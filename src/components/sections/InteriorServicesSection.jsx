import { motion } from 'framer-motion';
import { Palette, Lightbulb, Ruler } from 'lucide-react';
import Container from '../ui/Container';
import { useNavigate } from 'react-router-dom';

const SectionTitle = ({ title, description }) => (
  <motion.div 
    className="text-center mb-20"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <div className="flex items-center justify-center gap-3 mb-8">
      <div className="w-12 h-px bg-black/20" />
      <div className="w-2 h-2 bg-black/20 transform rotate-45" />
      <div className="w-12 h-px bg-black/20" />
    </div>
    
    <h2 className="font-display text-4xl mb-6">{title}</h2>
    <p className="text-base opacity-70 max-w-2xl mx-auto">
      {description}
    </p>
  </motion.div>
);

const ServiceCard = ({ icon: Icon, title, description, features, index }) => {
  const navigate = useNavigate();
  
  const handleContactClick = () => {
    navigate('/contact');
  };

  // Card animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring",
        damping: 25,
        stiffness: 300,
        delay: index * 0.15,
      }
    },
    hover: {
      y: -5,
      borderColor: 'rgba(0, 0, 0, 0.2)',
      boxShadow: '0 10px 40px rgba(0, 0, 0, 0.06)',
      transition: { 
        type: "spring",
        stiffness: 300,
        damping: 20 
      }
    }
  };

  // Icon animation variants
  const iconVariants = {
    initial: { backgroundColor: 'rgba(0, 0, 0, 0.05)' },
    hover: { 
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      transition: { duration: 0.3 }
    }
  };

  // Feature item variants
  const featureVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.3 + (i * 0.1),
        duration: 0.5,
        ease: "easeOut"
      }
    }),
    hover: {
      x: 5,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  return (
    <motion.div
      className="group relative bg-white border border-black/5 p-8 lg:p-12 overflow-hidden cursor-pointer"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "-50px" }}
      onClick={handleContactClick}
    >
      {/* Icon */}
      <div className="relative mb-8">
        <motion.div 
          className="relative w-14 h-14 flex items-center justify-center"
          variants={iconVariants}
        >
          <motion.div
            className="absolute inset-0 bg-black/5"
            initial={{ opacity: 1 }}
            whileHover={{ 
              opacity: 0.7, 
              scale: 1.1,
              transition: { duration: 0.4 } 
            }}
          />
          <motion.div 
            className="relative z-10"
            whileHover={{ 
              scale: 1.2,
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 10
              }
            }}
          >
            <Icon className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative">
        <motion.h3 
          className="font-display text-xl mb-4"
          initial={{ opacity: 0.9 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {title}
        </motion.h3>
        <motion.p 
          className="text-base opacity-70 mb-8 leading-relaxed"
          whileHover={{ opacity: 0.9 }}
          transition={{ duration: 0.3 }}
        >
          {description}
        </motion.p>

        {/* Features */}
        <ul className="space-y-4">
          {features.map((feature, i) => (
            <motion.li 
              key={i}
              className="flex items-center gap-4 text-xs"
              custom={i}
              variants={featureVariants}
            >
              <motion.div 
                className="w-1.5 h-1.5 bg-black/40 rounded-full"
                whileHover={{ scale: 1.5, backgroundColor: "rgba(0, 0, 0, 0.7)" }}
                transition={{ duration: 0.2 }}
              />
              <span className="opacity-70 group-hover:opacity-100 transition-all duration-300">
                {feature}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Hover Effects - Bottom line */}
      <motion.div 
        className="absolute inset-x-0 bottom-0 h-[2px] bg-black/80 origin-left"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />
      
      {/* Hover background effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black/[0.02] to-transparent"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      />
    </motion.div>
  );
};

const InteriorServicesSection = () => {
  const services = [
    {
      icon: Palette,
      title: "Koncepció és Tervezés",
      description: "Az Ön igényeire és stílusára szabott egyedi lakberendezési koncepció kidolgozása.",
      features: [
        "Személyre szabott tervezés",
        "3D látványtervek",
        "Színkoncepció kidolgozása",
        "Anyaghasználati javaslatok"
      ]
    },
    {
      icon: Ruler,
      title: "Térkialakítás",
      description: "A tér optimális kihasználása és a funkciók harmonikus elrendezése.",
      features: [
        "Alaprajzi tervezés",
        "Bútorozási terv",
        "Világítástechnika",
        "Tárolási megoldások"
      ]
    },
    {
      icon: Lightbulb,
      title: "Projekt Menedzsment",
      description: "A teljes lakberendezési folyamat koordinálása és felügyelete.",
      features: [
        "Kivitelezők koordinálása",
        "Költségvetés kezelése",
        "Ütemterv készítése",
        "Minőségellenőrzés"
      ]
    }
  ];

  return (
    <section className="py-32 bg-white">
      <Container>
        <SectionTitle 
          title="Szolgáltatások"
          description="Válaszd ki a számodra legmegfelelőbb szolgáltatást, hogy együtt megvalósíthassuk az elképzeléseidet."
        />

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default InteriorServicesSection; 