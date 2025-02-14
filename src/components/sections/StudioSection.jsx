import { motion } from 'framer-motion';
import Container from '../ui/Container';

const StudioSection = () => {
  const studioImages = [
    {
      src: '/images/studio/studio-1.jpg',
      alt: 'Art studio workspace',
      caption: 'Kreatív műhelyünk'
    },
    {
      src: '/images/studio/studio-2.jpg',
      alt: 'Paintings in progress',
      caption: 'Alkotás közben'
    },
    {
      src: '/images/studio/studio-3.jpg',
      alt: 'Studio materials',
      caption: 'Művészeti kellékek'
    }
  ];

  return (
    <section className="py-32 bg-black/[0.02]">
      <Container>
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-5xl mb-6">Műterem</h2>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">
            Fedezd fel műtermünket, ahol az alkotás varázsa születik. Egy hely, ahol a kreativitás és inspiráció találkozik.
          </p>
        </motion.div>

        <div className="grid grid-cols-12 gap-6 relative">
          {/* Large featured image */}
          <motion.div 
            className="col-span-12 lg:col-span-8 relative aspect-[16/9] overflow-hidden"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img 
              src={studioImages[0].src} 
              alt={studioImages[0].alt}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            <div className="absolute bottom-8 left-8 text-white">
              <p className="text-lg font-display">{studioImages[0].caption}</p>
            </div>
          </motion.div>

          {/* Smaller images column */}
          <div className="col-span-12 lg:col-span-4 space-y-6">
            {studioImages.slice(1).map((image, index) => (
              <motion.div 
                key={image.alt}
                className="relative aspect-square overflow-hidden"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (index + 1) * 0.2 }}
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="object-cover w-full h-full transform transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-sm font-display">{image.caption}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Decorative elements */}
          <motion.div 
            className="absolute -top-4 -right-4 w-24 h-24 border border-black hidden lg:block"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
          <motion.div 
            className="absolute -bottom-4 -left-4 w-32 h-32 border border-black hidden lg:block"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          />
        </div>
      </Container>
    </section>
  );
};

export default StudioSection; 