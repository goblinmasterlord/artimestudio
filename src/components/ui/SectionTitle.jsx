import { motion } from 'framer-motion';

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

export default SectionTitle; 