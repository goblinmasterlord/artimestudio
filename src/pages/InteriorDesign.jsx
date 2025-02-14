// src/pages/InteriorDesign.jsx
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ContactSection from '../components/shared/ContactSection';
import Hero from '../components/sections/Hero';
import Container from '../components/ui/Container';
import ProjectsSection from '../components/sections/ProjectsSection';
import InteriorServicesSection from '../components/sections/InteriorServicesSection';
import CrossPromotionBanner from '../components/sections/CrossPromotionBanner';

const InteriorDesign = () => {
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

  return (
    <div>
      <Header />
      <main className="overflow-hidden">
        <Hero 
          title="Lakberendezés"
          description="Segítek otthonod olyan harmonikus térré alakítani, amely tökéletesen tükrözi az egyéni stílusodat és igényeidet."
          image="/images/hero/interior-hero.jpg"
        />
        
        <InteriorServicesSection />

        <ProjectsSection
          title="Kiemelt Projektek"
          description="Fedezd fel néhány közelmúltbeli projektünket, amelyek tökéletesen példázzák tervezési filozófiánkat és megközelítésünket."
          items={featuredProjects}
        />

        <CrossPromotionBanner 
          title="Egyedi Festmények"
          description="Fedezd fel egyedi vászonfestményeimet, amelyek tökéletesen kiegészítik a lakberendezési projekteket és egyedi karaktert adnak a tereknek."
          image="/images/banners/canvas-promo.jpg"
          linkTo="/canvas-art"
          linkText="Festmények felfedezése"
        />

        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default InteriorDesign;