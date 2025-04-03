import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const CrossPromotionBanner = () => {
  const location = useLocation();
  
  // Determine content based on current page
  const isCanvasArtPage = location.pathname.includes('canvas-art');
  
  const content = isCanvasArtPage
    ? {
        heading: "Szép otthon tervezés",
        description: "Megálmodom és megtervezem otthona belső tereit, hogy a funkcionalitás és az esztétikum tökéletes harmóniában legyen.",
        linkTo: "/interior-design",
        linkText: "Lakberendezés",
        bgImage: "/images/banners/interior-promo.jpg"
      }
    : {
        heading: "Egyedi festmények",
        description: "Festményeimmel egyedi hangulatot teremthet otthonában. Fedezze fel alkotásaimat vagy rendeljen személyre szabott művet.",
        linkTo: "/canvas-art",
        linkText: "Festmények",
        bgImage: "/images/banners/canvas-promo.jpg"
      };

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img 
          src={content.bgImage} 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-8">
        <div className="max-w-xl">
          <h2 className="font-display text-3xl md:text-4xl text-white mb-6">
            {content.heading}
          </h2>
          <p className="text-base text-white/90 mb-8">
            {content.description}
          </p>
          <Link 
            to={content.linkTo}
            className="inline-flex items-center px-7 py-3.5 text-sm bg-white text-black hover:bg-white/90 transition-colors group"
          >
            {content.linkText}
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
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