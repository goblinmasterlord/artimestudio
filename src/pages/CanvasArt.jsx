// src/pages/CanvasArt.jsx
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import MasonryGrid from '../components/portfolio/MasonryGrid';
import ContactSection from '../components/shared/ContactSection';
import Hero from '../components/sections/Hero';
import Container from '../components/ui/Container';
import ServicesSection from '../components/services/ServicesSection';
import FadeIn from '../components/animations/FadeIn';

const CanvasArt = () => {
  const portfolioItems = [
    {
      image: "/images/canvas/abstract-harmony.jpg",
      title: "Abstract Harmony",
      description: "A dynamic exploration of form and color",
      category: "Abstract",
      dimensions: "36x48 inches"
    },
    {
      image: "/images/canvas/urban-rhythms.jpg",
      title: "Urban Rhythms",
      description: "Contemporary interpretation of city life",
      category: "Contemporary",
      dimensions: "24x36 inches"
    },
    {
      image: "/images/canvas/serenity.jpg",
      title: "Serenity",
      description: "Minimalist expression of peace",
      category: "Minimalist",
      dimensions: "30x40 inches"
    },
    {
      image: "/images/canvas/natural-flow.jpg",
      title: "Natural Flow",
      description: "Organic patterns in motion",
      category: "Abstract",
      dimensions: "40x60 inches"
    },
    {
      image: "/images/canvas/geometric-dreams.jpg",
      title: "Geometric Dreams",
      description: "Mathematical precision meets artistic freedom",
      category: "Geometric",
      dimensions: "36x36 inches"
    }
  ];

  return (
    <div>
      <Header />
      <main>
        <Hero 
          title="Canvas Art"
          description="Explore our collection of original canvas paintings, each piece carefully crafted to bring unique artistic expression to your space."
          image="/images/hero/canvas-hero.jpg"
        />
        <section className="py-20">
          <Container>
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="font-display text-4xl mb-4">Our Portfolio</h2>
                <p className="opacity-70 max-w-2xl mx-auto">
                  Each piece tells a unique story, crafted with passion and attention to detail.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <MasonryGrid items={portfolioItems} />
            </FadeIn>
          </Container>
        </section>
        <ServicesSection type="canvas" />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default CanvasArt;