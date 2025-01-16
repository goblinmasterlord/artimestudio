// src/pages/CanvasArt.jsx
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import MasonryGrid from '../components/portfolio/MasonryGrid';
import ContactSection from '../components/shared/ContactSection';
import { motion } from 'framer-motion';

const CanvasArt = () => {
  const portfolioItems = [
    {
      image: "https://images.unsplash.com/photo-1580136579312-94651dfd596d",
      title: "Abstract Harmony",
      description: "Acrylic on canvas, 36x48 inches"
    },
    {
      image: "https://images.unsplash.com/photo-1585385819171-99204906f1d1",
      title: "Urban Rhythms",
      description: "Oil on canvas, 24x36 inches"
    },
    // Add more items
  ];

  return (
    <div>
      <Header />
      <main>
        <motion.section 
          className="pt-32 pb-16 px-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-7xl mx-auto">
            <h1 className="font-display text-5xl mb-8">Canvas Art</h1>
            <p className="max-w-2xl opacity-70 mb-16">
              Explore our collection of original canvas paintings, each piece 
              carefully crafted to bring unique artistic expression to your space.
            </p>
            <MasonryGrid items={portfolioItems} />
          </div>
        </motion.section>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default CanvasArt;