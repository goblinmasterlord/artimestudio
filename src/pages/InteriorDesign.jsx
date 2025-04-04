// src/pages/InteriorDesign.jsx
import Footer from '../components/layout/Footer';
import ProjectsSection from '../components/sections/ProjectsSection';
import InteriorServicesSection from '../components/sections/InteriorServicesSection';
import CrossPromotionBanner from '../components/sections/CrossPromotionBanner';
import PageNav from '../components/layout/PageNav';
import PageHeader from '../components/sections/PageHeader';
import PageTransition from '../components/animations/PageTransition';

const InteriorDesign = () => {
  const navigationItems = [
    { id: 'services', label: 'Szolgáltatások' },
    { id: 'projects', label: 'Portfólió' }
  ];

  const secondaryCta = {
    path: '/canvas-art',
    label: 'Festmények'
  };

  const featuredProjects = [
    {
      image: "/images/interior/modern-living.jpg",
      title: "Modern Minimalista Otthon",
      description: "Letisztult vonalak és természetes anyagok találkozása ebben a modern családi otthonban. A tér maximális kihasználása és a funkcionalitás mellett a design elemek harmóniája volt a fő szempont.",
      category: "Lakás",
      dimensions: "232 m²",
      completionDate: "2024 Január",
      location: "Budapest, II. kerület"
    },
    {
      image: "/images/interior/urban-loft.jpg",
      title: "Városi Loft",
      description: "Ipari elemek találkozása a modern kényelemmel ebben a belvárosi loftlakásban. Az eredeti építészeti elemek megtartása mellett modern és kényelmes életteret alakítottunk ki.",
      category: "Lakás",
      dimensions: "297 m²",
      completionDate: "2023 November",
      location: "Budapest, VII. kerület"
    },
    {
      image: "/images/interior/workspace.jpg",
      title: "Kreatív Munkakörnyezet",
      description: "Modern irodatér, ahol a produktivitás és a kreativitás találkozik. A különböző munkavégzési zónák és a közösségi terek harmonikus egyensúlya jellemzi a projektet.",
      category: "Iroda",
      dimensions: "167 m²",
      completionDate: "2023 Szeptember",
      location: "Budapest, XIII. kerület"
    },
    {
      image: "/images/interior/penthouse.jpg",
      title: "Luxus Penthouse",
      description: "Panorámás penthouse lakás, ahol a luxus és a funkcionalitás találkozik. A természetes fény maximális kihasználása és a páratlan kilátás határozta meg a tervezést.",
      category: "Lakás",
      dimensions: "418 m²",
      completionDate: "2023 December",
      location: "Budapest, II. kerület"
    },
    {
      image: "/images/interior/boutique-hotel.jpg",
      title: "Boutique Hotel",
      description: "Egyedi hangulatú boutique hotel, ahol minden szoba külön karaktert kapott. A közös terek elegáns és hívogató atmoszférája teremti meg a hotel különleges hangulatát.",
      category: "Hotel",
      dimensions: "850 m²",
      completionDate: "2024 Február",
      location: "Budapest, V. kerület"
    },
    {
      image: "/images/interior/restaurant.jpg",
      title: "Fine Dining Étterem",
      description: "Modern fine dining étterem, ahol a gasztronómiai élmény és a design tökéletes összhangban van. Az elegáns és intim hangulat megteremtése volt a fő cél.",
      category: "Étterem",
      dimensions: "320 m²",
      completionDate: "2023 Október",
      location: "Budapest, VI. kerület"
    }
  ];

  // Use only the first 3 projects
  const limitedProjects = featuredProjects.slice(0, 3);

  const handleScrollDown = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      const offset = 80;
      const elementPosition = servicesSection.getBoundingClientRect().top;
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
            title="Lakberendezés"
            description="Segítek otthonod olyan harmonikus térré alakítani, amely tökéletesen tükrözi az egyéni stílusodat és igényeidet."
            image="/images/hero/interior-hero.jpg"
            onScrollDown={handleScrollDown}
          />
          
          <div id="services">
            <InteriorServicesSection />
          </div>

          <div id="projects">
            <ProjectsSection
              title="Portfólió"
              description="Fedezd fel néhány közelmúltbeli projektemet, amelyek tökéletesen példázzák tervezési filozófiámat és megközelítését."
              items={limitedProjects}
            />
          </div>

          <CrossPromotionBanner 
            title="Egyedi Festmények"
            description="Fedezd fel egyedi vászonfestményeimet, amelyek tökéletesen kiegészítik a lakberendezési projekteket és egyedi karaktert adnak a tereknek."
            image="/images/banners/canvas-promo.jpg"
            linkTo="/canvas-art"
            linkText="Festmények felfedezése"
          />
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default InteriorDesign;