// src/pages/CanvasArt.jsx
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import MasonryGrid from '../components/portfolio/MasonryGrid';
import ContactSection from '../components/shared/ContactSection';
import Hero from '../components/sections/Hero';
import Container from '../components/ui/Container';
import ProjectsSection from '../components/sections/ProjectsSection';
import StudioSection from '../components/sections/StudioSection';
import FadeIn from '../components/animations/FadeIn';
import AboutSection from '../components/shared/AboutSection';
import CrossPromotionBanner from '../components/sections/CrossPromotionBanner';

const CanvasArt = () => {
  const featuredProjects = [
    {
      image: "/images/canvas/featured/project-1.jpg",
      title: "Absztrakt Kompozíció",
      category: "Egyedi Festmény",
      description: "Modern otthonba készült egyedi absztrakt alkotás, amely a tér központi elemévé vált. A festmény színvilága és kompozíciója tökéletesen illeszkedik a minimalista enteriőrbe, miközben egyedi karaktert ad a térnek.",
      dimensions: "120x180 cm",
      completionDate: "2023 Október",
      additionalImages: [
        "/images/canvas/featured/project-1-detail-1.jpg",
        "/images/canvas/featured/project-1-detail-2.jpg",
        "/images/canvas/featured/project-1-space.jpg"
      ],
      location: "Magánlakás, Budapest"
    },
    {
      image: "/images/canvas/featured/project-2.jpg",
      title: "Színek Harmóniája",
      category: "Sorozat",
      description: "Háromrészes festménysorozat, amely a természet színeit és formáit interpretálja újszerű módon. A sorozat darabjai külön-külön is megállják a helyüket, együtt azonban különleges harmóniát teremtenek.",
      dimensions: "3x (90x120 cm)",
      completionDate: "2023 December",
      additionalImages: [
        "/images/canvas/featured/project-2-detail-1.jpg",
        "/images/canvas/featured/project-2-detail-2.jpg",
        "/images/canvas/featured/project-2-space.jpg"
      ],
      location: "Irodaház, Budapest"
    },
    {
      image: "/images/canvas/featured/project-3.jpg",
      title: "Városi Ritmusok",
      category: "Nagymértű Festmény",
      description: "Irodaházba készült nagyméretű alkotás, amely a városi élet dinamikáját jeleníti meg. A festmény modern formavilága és energikus színhasználata új dimenzióba emeli a fogadóteret.",
      dimensions: "200x300 cm",
      completionDate: "2024 Január",
      additionalImages: [
        "/images/canvas/featured/project-3-detail-1.jpg",
        "/images/canvas/featured/project-3-detail-2.jpg",
        "/images/canvas/featured/project-3-space.jpg"
      ],
      location: "Vállalati Központ, Budapest"
    },
    {
      image: "/images/canvas/featured/project-4.jpg",
      title: "Természet Inspirálta",
      category: "Organikus Sorozat",
      description: "A természet organikus formáit és színeit megidéző alkotás, amely a modern építészeti környezetbe hoz élettel teli kontrasztot. A festmény különlegessége a rétegzett textúrák és a finom színátmenetek játéka.",
      dimensions: "150x200 cm",
      completionDate: "2024 Február",
      additionalImages: [
        "/images/canvas/featured/project-4-detail-1.jpg",
        "/images/canvas/featured/project-4-detail-2.jpg",
        "/images/canvas/featured/project-4-space.jpg"
      ],
      location: "Boutique Hotel, Budapest"
    }
  ];

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
      <main className="overflow-hidden">
        <Hero 
          title="Festmények"
          description="Készíttess olyan vászonfestményt, amelyik tökéletesen illeszkedik Hozzád és otthonodhoz."
          image="/images/hero/canvas-hero.jpg"
        />
        
        <ProjectsSection
          title="Kiemelt Projektek"
          description="Fedezd fel néhány közelmúltbeli projektünket, amelyek tökéletesen példázzák művészeti filozófiánkat és megközelítésünket."
          items={featuredProjects}
        />

        <section className="py-20">
          <Container>
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="font-display text-4xl mb-4">Alkotásaim</h2>
                <p className="text-lg opacity-70 max-w-2xl mx-auto">
                  Minden olajfestményem egyedi történetet mesél el és kifejetten illeszkedik Hozzád és otthonodhoz. Itt van néhány korábbi alkotásom.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <MasonryGrid items={portfolioItems} />
            </FadeIn>
          </Container>
        </section>

        <StudioSection />

        <CrossPromotionBanner 
          title="Lakberendezési Szolgáltatások"
          description="Fedezd fel lakberendezési szolgáltatásaimat, ahol a művészet és a design találkozik, hogy egyedi és harmonikus tereket alkossunk."
          image="/images/banners/interior-promo.jpg"
          linkTo="/interior-design"
          linkText="Lakberendezés felfedezése"
        />

        <ContactSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default CanvasArt;