import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CrossPromotionBanner = ({ 
  title, 
  description, 
  image, 
  linkTo, 
  linkText 
}) => {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-32">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-4xl md:text-5xl text-white mb-6">
              {title}
            </h2>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              {description}
            </p>

            <Link to={linkTo}>
              <motion.div
                className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 text-sm font-medium hover:bg-white/90 transition-all group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>{linkText}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/40 to-transparent" />
      <div className="absolute top-0 right-0 w-64 h-64 border border-white/20 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-32 h-32 border border-white/20 translate-y-1/2 -translate-x-1/2" />
    </section>
  );
};

export default CrossPromotionBanner; 