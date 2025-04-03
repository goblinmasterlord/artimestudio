// src/pages/CanvasArt.jsx
import Footer from '../components/layout/Footer';
import MasonryGrid from '../components/portfolio/MasonryGrid';
import Container from '../components/ui/Container';
import ProjectsSection from '../components/sections/ProjectsSection';
import FadeIn from '../components/animations/FadeIn';
import AboutSection from '../components/shared/AboutSection';
import CrossPromotionBanner from '../components/sections/CrossPromotionBanner';
import PageNav from '../components/layout/PageNav';
import PageHeader from '../components/sections/PageHeader';
import PageTransition from '../components/animations/PageTransition';
import { useState, useEffect } from 'react';
import featuredProjectsData from '../data/featuredProjects.json';
import portfolioItemsData from '../data/portfolioItems.json';

const CanvasArt = () => {
  const [featuredProjects, setFeaturedProjects] = useState([]);
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const navigationItems = [
    { id: 'about', label: 'Stúdió' },
    { id: 'featured', label: 'Projektek' },
    { id: 'portfolio', label: 'Alkotások' }
  ];

  const secondaryCta = {
    path: '/interior-design',
    label: 'Lakberendezés'
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setFeaturedProjects(featuredProjectsData.slice(0, 3));
      setPortfolioItems(portfolioItemsData);
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, []);

  const handleScrollDown = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      const offset = 80;
      const elementPosition = aboutSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <PageTransition>
      <div>
        <PageNav items={navigationItems} secondaryCta={secondaryCta} />
        <main className="overflow-hidden">
          <PageHeader 
            title="Festmények"
            description="Készíttess olyan vászonfestményt, amelyik tökéletesen illeszkedik Hozzád és otthonodhoz."
            image="/images/hero/canvas-hero.jpg"
            onScrollDown={handleScrollDown}
          />
          
          <div id="about">
            <AboutSection />
          </div>

          {isLoading ? (
            <div className="text-center py-20">
              <p>Loading...</p>
            </div>
          ) : (
            <>
              <div id="featured">
                <ProjectsSection
                  title="Projektek"
                  description="Fedezd fel néhány közelmúltbeli projektemet, amelyek tökéletesen példázzák művészeti filozófiámat és megközelítését."
                  items={featuredProjects}
                />
              </div>

              <div id="portfolio" className="py-20">
                <Container>
                  <FadeIn>
                    <div className="text-center mb-16">
                      <h2 className="font-display text-3xl mb-4">Alkotásaim</h2>
                      <p className="text-base opacity-70 max-w-2xl mx-auto">
                        Minden olajfestményem egyedi történetet mesél el és kifejetten illeszkedik Hozzád és otthonodhoz. Itt van néhány korábbi alkotásom.
                      </p>
                    </div>
                  </FadeIn>
                  <FadeIn delay={0.2}>
                    <MasonryGrid items={portfolioItems} />
                  </FadeIn>
                </Container>
              </div>
            </>
          )}

          <CrossPromotionBanner 
            title="Lakberendezési Szolgáltatások"
            description="Fedezd fel lakberendezési szolgáltatásaimat, ahol a művészet és a design találkozik, hogy egyedi és harmonikus tereket alkossunk."
            image="/images/banners/interior-promo.jpg"
            linkTo="/interior-design"
            linkText="Lakberendezés felfedezése"
          />
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default CanvasArt;