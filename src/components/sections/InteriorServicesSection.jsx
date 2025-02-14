import { motion } from 'framer-motion';
import { Palette, Lightbulb, Ruler } from 'lucide-react';
import Container from '../ui/Container';

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
  return (
    <motion.div
      className="relative bg-gradient-to-br from-black/[0.02] to-black/[0.04] p-8 lg:p-12 group overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/40 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-30 transition-opacity duration-700" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-black/5 rounded-full blur-2xl transform translate-x-1/2 translate-y-1/2" />
      
      <div className="relative">
        <div className="inline-flex items-center justify-center w-14 h-14 bg-black/[0.03] mb-8 transform-gpu transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
          <Icon className="w-7 h-7" />
        </div>

        <h3 className="font-display text-2xl mb-4 group-hover:translate-x-1 transition-transform duration-300">
          {title}
        </h3>
        
        <p className="opacity-70 leading-relaxed mb-8">
          {description}
        </p>

        <ul className="space-y-4">
          {features.map((feature, idx) => (
            <motion.li 
              key={idx} 
              className="flex items-start gap-4"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.2 + (idx * 0.1) }}
            >
              <div className="w-6 h-6 bg-black/[0.03] flex items-center justify-center flex-shrink-0 mt-0.5 transform-gpu transition-transform duration-500 group-hover:rotate-3">
                <div className="w-1.5 h-1.5 bg-black" />
              </div>
              <span className="opacity-70 group-hover:opacity-90 transition-opacity">
                {feature}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const InteriorServicesSection = () => {
  const services = [
    {
      icon: Ruler,
      title: "Teljes Lakberendezés",
      description: "Átfogó lakberendezési szolgáltatás, amely az első koncepciótól a megvalósításig minden részletre kiterjed.",
      features: [
        "Részletes koncepció és tervek készítése",
        "Anyag- és bútorválasztás",
        "Kivitelezés koordinálása",
        "Styling és dekoráció",
        "Műszaki dokumentáció"
      ]
    },
    {
      icon: Palette,
      title: "Részleges Tervezés",
      description: "Egy-egy helyiség vagy funkció újragondolása, felújítása vagy átalakítása az igényeidnek megfelelően.",
      features: [
        "Helyiségek újratervezése",
        "Bútorozási javaslatok",
        "Színkoncepció kidolgozása",
        "Világítástechnika",
        "3D látványtervek"
      ]
    },
    {
      icon: Lightbulb,
      title: "Konzultáció",
      description: "Szakmai tanácsadás és ötletelés, hogy magabiztosan hozhass döntéseket a tered kialakításában.",
      features: [
        "Személyes vagy online konzultáció",
        "Stílus és koncepció tanácsadás",
        "Színek és anyagok",
        "Bútorozási tippek",
        "Shopping lista"
      ]
    }
  ];

  return (
    <section className="py-32">
      <Container>
        <SectionTitle 
          title="Szolgáltatások"
          description="Válaszd ki a számodra legmegfelelőbb szolgáltatást, hogy együtt megvalósíthassuk az elképzeléseidet."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default InteriorServicesSection; 