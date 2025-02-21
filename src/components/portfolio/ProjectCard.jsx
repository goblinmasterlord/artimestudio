import { memo } from 'react';
import { motion } from 'framer-motion';

const ProjectCard = memo(({ title, image, category, description, dimensions, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.215, 0.61, 0.355, 1]
      }}
      className="group relative overflow-hidden"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={image}
          srcSet={`${image}?w=300 300w, ${image}?w=600 600w, ${image}?w=900 900w`}
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/0 to-black/60" />
      </div>
      
      <div className="absolute inset-x-0 bottom-0 p-6 translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
        <div className="space-y-3 transform">
          <div className="flex items-center gap-3">
            <div className="h-px flex-1 bg-white/30" />
            <span className="text-sm text-white/70 font-medium">
              {category}
            </span>
            <div className="h-px flex-1 bg-white/30" />
          </div>
          
          <h3 className="font-display text-xl text-white">
            {title}
          </h3>
          
          <p className="text-sm text-white/80 line-clamp-2 opacity-0 transform translate-y-4 transition duration-500 group-hover:opacity-100 group-hover:translate-y-0">
            {description}
          </p>
          
          <div className="text-sm text-white/60">
            {dimensions}
          </div>
        </div>
      </div>
    </motion.div>
  );
});

ProjectCard.displayName = 'ProjectCard';

export default ProjectCard;