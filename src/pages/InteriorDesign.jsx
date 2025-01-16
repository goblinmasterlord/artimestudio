// src/pages/InteriorDesign.jsx
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import MasonryGrid from '../components/portfolio/MasonryGrid';
import ContactSection from '../components/shared/ContactSection';
import Hero from '../components/sections/Hero';
import Container from '../components/ui/Container';
import ServicesSection from '../components/services/ServicesSection';
import AboutSection from '../components/shared/AboutSection';
const InteriorDesign = () => {
  const portfolioItems = [
    {
      image: "/images/interior/modern-living.jpg",
      title: "Modern Minimalista Otthon",
      description: "Forma és funkció harmonikus találkozása",
      category: "Lakás",
      dimensions: "232 m²"
    },
    {
      image: "/images/interior/urban-loft.jpg",
      title: "Városi Loft",
      description: "Ipari elemek találkozása a modern kényelemmel",
      category: "Lakás",
      dimensions: "297 m²"
    },
    {
      image: "/images/interior/workspace.jpg",
      title: "Nyugodt Munkakörnyezet",
      description: "Produktív környezet természetes elemekkel",
      category: "Iroda",
      dimensions: "167 m²"
    },
    {
      image: "/images/interior/penthouse.jpg",
      title: "Luxus Penthouse",
      description: "Kifinomult életstílus a legmagasabb szinten",
      category: "Lakás",
      dimensions: "418 m²"
    }
  ];

  return (
    <div>
      <Header />
      <main>
        <Hero 
          title="Lakberendezés"
          description="Segítek otthonod olyan harmonikus térré alakítani, amely tökéletesen tükrözi az egyéni stílusodat és igényeidet."
          image="/images/hero/interior-hero.jpg"
        />
        <section className="py-20">
          <Container>
            <MasonryGrid items={portfolioItems} />
          </Container>
        </section>
        <ServicesSection type="interior" />
        <ContactSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default InteriorDesign;