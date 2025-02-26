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
    
    <h2 className="font-display text-5xl mb-6">{title}</h2>
    <p className="text-lg opacity-70 max-w-2xl mx-auto">
      {description}
    </p>
  </motion.div>
);

const ServiceCard = ({ icon: Icon, title, description, features, index }) => {
  const navigate = useNavigate();
  
  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <motion.div
      className="group relative bg-white border border-black/5 p-8 lg:p-12 overflow-hidden cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      whileHover={{ y: -8 }}
      onClick={handleContactClick}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.02)_25%,rgba(0,0,0,0.02)_50%,transparent_50%,transparent_75%,rgba(0,0,0,0.02)_75%)] bg-[length:8px_8px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Icon */}
      <div className="relative mb-8">
        <motion.div 
          className="relative w-16 h-16 bg-black/5 flex items-center justify-center"
          whileHover={{ rotate: 90 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
        >
          <Icon className="w-8 h-8" />
          <motion.div 
            className="absolute inset-0 bg-black/5"
            initial={{ scale: 0.8 }}
            whileHover={{ scale: 1.2, opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative">
        <motion.h3 
          className="font-display text-2xl mb-4 transition-all duration-300 group-hover:translate-x-2"
          initial={{ opacity: 0.7 }}
          whileHover={{ opacity: 1 }}
        >
          {title}
        </motion.h3>
        <p className="text-lg opacity-70 mb-8 leading-relaxed transition-all duration-300 group-hover:opacity-90 group-hover:translate-x-2">
          {description}
        </p>

        {/* Features */}
        <ul className="space-y-4">
          {features.map((feature, i) => (
            <motion.li 
              key={i}
              className="flex items-center gap-4 text-sm transition-all duration-300"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * i }}
              style={{ 
                transitionDelay: `${i * 50}ms`,
              }}
              whileHover={{ x: 5 }}
            >
              <motion.div 
                className="w-2 h-2 bg-black/40 rounded-full transition-all duration-300 group-hover:bg-black/70"
                whileHover={{ scale: 1.5 }}
              />
              <span className="opacity-70 group-hover:opacity-100 transition-all duration-300">
                {feature}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Hover Effects */}
      <motion.div 
        className="absolute inset-x-0 bottom-0 h-1 bg-black origin-left"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      />
      <motion.div 
        className="absolute inset-y-0 right-0 w-1 bg-black origin-bottom"
        initial={{ scaleY: 0 }}
        whileHover={{ scaleY: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      />
      
      {/* Subtle overlay on hover */}
      <motion.div 
        className="absolute inset-0 bg-black/0 pointer-events-none transition-colors duration-300 group-hover:bg-black/[0.01]"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
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