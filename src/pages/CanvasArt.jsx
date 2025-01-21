// src/pages/CanvasArt.jsx
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import MasonryGrid from '../components/portfolio/MasonryGrid';
import ContactSection from '../components/shared/ContactSection';
import Hero from '../components/sections/Hero';
import Container from '../components/ui/Container';
import ServicesSection from '../components/services/ServicesSection';
import FadeIn from '../components/animations/FadeIn';
import AboutSection from '../components/shared/AboutSection';

const CanvasArt = () => {
  const portfolioItems = [
    {
      image: "/images/canvas/abstract-harmony.jpg",
      title: "Absztrakt Harmónia",
      description: "Forma és szín dinamikus találkozása",
      category: "Absztrakt",
      dimensions: "90x120 cm"
    },
    {
      image: "/images/canvas/urban-rhythms.jpg",
      title: "Absztrakt Színek",
      description: "Színek és formák egyedi kombinációja",
      category: "Modern",
      dimensions: "60x90 cm"
    },
    {
      image: "/images/canvas/serenity.jpg",
      title: "Színek és formák",
      description: "Sok szép szín és forma együtt",
      category: "Minimalista",
      dimensions: "75x100 cm"
    },
    {
      image: "/images/canvas/natural-flow.jpg",
      title: "Még egy absztrakt",
      description: "Sok szép szín és forma együtt",
      category: "Absztrakt",
      dimensions: "100x150 cm"
    },
    {
      image: "/images/canvas/geometric-dreams.jpg",
      title: "Színkavalkád",
      description: "Sok szép szín és forma együtt",
      category: "Geometrikus",
      dimensions: "90x90 cm"
    }
  ];

  return (
    <div>
      <Header />
      <main>
        <Hero 
          title="Festmények"
          description="Készíttess olyan vászonfestményt, amelyik tökéletesen illeszkedik Hozzád és otthonodhoz."
          image="/images/hero/canvas-hero.jpg"
        />
        <section className="py-20">
          <Container>
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="font-display text-4xl mb-4">Alkotásaim</h2>
                <p className="opacity-70 max-w-2xl mx-auto">
                  Minden olajfestményem egyedi történetet mesél el és kifejetten illeszkedik Hozzád és otthonodhoz. Itt van néhány korábbi alkotásom.
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
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default CanvasArt;