import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import { X, ArrowRight, Maximize2, Clock, Grid, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';

const ProjectCard = ({ project, index, onClick }) => {
  const isLarge = index === 0 || index === 3;
  
  return (
    <motion.div
      layout
      className={`group cursor-pointer ${isLarge ? 'md:col-span-2' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0, once: true }}
      viewport={{ once: true, margin: "50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={onClick}
    >
      <div className="relative overflow-hidden rounded-sm">
        <div className={`relative ${isLarge ? 'aspect-[16/9]' : 'aspect-[3/4]'}`}>
          <img 
            src={project.image} 
            alt={project.title}
            loading="lazy"
            decoding="async"
            className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-105 will-change-transform"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/0 opacity-0 group-hover:opacity-100 transition-all duration-300" />
          
          {/* Content */}
          <div className="absolute inset-0 p-8 flex flex-col justify-end transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            <p className="text-sm uppercase tracking-wider text-white/80 mb-2">{project.category}</p>
            <h3 className="font-display text-2xl text-white mb-3">{project.title}</h3>
            <p className="text-sm text-white/80 line-clamp-2">{project.description}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectModal = ({ project, onClose }) => {
  const navigate = useNavigate();
  
  if (!project) return null;

  const handleContactClick = () => {
    onClose();
    // Use a small timeout to allow the modal to close smoothly before navigation
    setTimeout(() => {
      navigate('/contact');
    }, 300);
  };

  return (
    <motion.div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div 
        className="bg-white w-full max-w-6xl max-h-[90vh] overflow-y-auto"
        initial={{ scale: 0.95, y: 20, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.95, y: 20, opacity: 0 }}
        transition={{ type: "spring", duration: 0.5 }}
        onClick={e => e.stopPropagation()}
      >
        <div className="grid lg:grid-cols-2 min-h-[600px]">
          {/* Image Section */}
          <div className="relative h-full">
            <div className="sticky top-0 h-full">
              <img 
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Details Section */}
          <div className="p-12 space-y-8 bg-white relative">
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm p-2 hover:bg-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <p className="text-sm uppercase tracking-wider opacity-70 mb-2">{project.category}</p>
              <h3 className="font-display text-4xl mb-4">{project.title}</h3>
              <p className="opacity-70 leading-relaxed text-lg">{project.description}</p>
            </div>

            {/* Project Details */}
            <div className="space-y-4 py-6 border-y">
              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 opacity-70 mt-1" />
                <div>
                  <h4 className="font-medium mb-1">Elkészítés ideje</h4>
                  <p className="opacity-70">{project.completionDate}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Grid className="w-5 h-5 opacity-70 mt-1" />
                <div>
                  <h4 className="font-medium mb-1">Méret</h4>
                  <p className="opacity-70">{project.dimensions}</p>
                </div>
              </div>
              {project.location && (
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 opacity-70 mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">Helyszín</h4>
                    <p className="opacity-70">{project.location}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Call to Action */}
            <motion.button
              onClick={handleContactClick}
              className="inline-flex items-center gap-2 text-sm font-medium bg-black text-white px-6 py-3 hover:gap-3 transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Kapcsolatfelvétel</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProjectsSection = ({ title, description, items }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="py-20">
      <Container>
        <SectionTitle 
          title={title}
          description={description}
        />

        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-[1400px] mx-auto"
        >
          {items.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </motion.div>

        <AnimatePresence>
          {selectedProject && (
            <ProjectModal 
              project={selectedProject} 
              onClose={() => setSelectedProject(null)} 
            />
          )}
        </AnimatePresence>
      </Container>
    </section>
  );
};

export default ProjectsSection; 