// src/pages/InteriorDesign.jsx
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import MasonryGrid from '../components/portfolio/MasonryGrid';
import ContactSection from '../components/shared/ContactSection';
import Hero from '../components/sections/Hero';
import Container from '../components/ui/Container';
import ServicesSection from '../components/services/ServicesSection';

const InteriorDesign = () => {
  const portfolioItems = [
    {
      image: "/images/interior/modern-living.jpg",
      title: "Modern Minimalist Living",
      description: "A harmonious blend of form and function",
      category: "Residential",
      dimensions: "2500 sq ft"
    },
    {
      image: "/images/interior/urban-loft.jpg",
      title: "Urban Loft",
      description: "Industrial elements meet contemporary comfort",
      category: "Commercial",
      dimensions: "3200 sq ft"
    },
    {
      image: "/images/interior/workspace.jpg",
      title: "Serene Workspace",
      description: "Productive environment with natural elements",
      category: "Office",
      dimensions: "1800 sq ft"
    },
    {
      image: "/images/interior/penthouse.jpg",
      title: "Luxury Penthouse",
      description: "Sophisticated living at its finest",
      category: "Residential",
      dimensions: "4500 sq ft"
    }
  ];

  return (
    <div>
      <Header />
      <main>
        <Hero 
          title="Interior Design"
          description="Transforming spaces into harmonious environments that reflect your unique style and needs."
          image="/images/hero/interior-hero.jpg"
        />
        <section className="py-20">
          <Container>
            <MasonryGrid items={portfolioItems} />
          </Container>
        </section>
        <ServicesSection type="interior" />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default InteriorDesign;