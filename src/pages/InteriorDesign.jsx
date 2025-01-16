// src/pages/InteriorDesign.jsx
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import MasonryGrid from '../components/portfolio/MasonryGrid';
import ContactSection from '../components/shared/ContactSection';
import { motion } from 'framer-motion';

const InteriorDesign = () => {
  const portfolioItems = [
    {
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6",
      title: "Modern Minimalist Living",
      description: "Residential Project - New York"
    },
    {
      image: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e",
      title: "Urban Loft",
      description: "Commercial Space - Chicago"
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
            <h1 className="font-display text-5xl mb-8">Interior Design</h1>
            <p className="max-w-2xl opacity-70 mb-16">
              Discover our portfolio of thoughtfully designed spaces, where we transform 
              interiors into harmonious environments that reflect your unique style.
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

export default InteriorDesign;