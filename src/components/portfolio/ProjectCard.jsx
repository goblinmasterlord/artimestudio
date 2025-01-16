import { memo, useState } from 'react';
import { motion } from 'framer-motion';

const ProjectCard = memo(({ 
  image, 
  title, 
  description, 
  category, 
  dimensions,
  delay = 0 
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div 
      className="mb-8 relative group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5,
        delay,
        ease: [0.25, 0.1, 0.25, 1.0]
      }}
    >
      <div className="relative overflow-hidden bg-gray-100">
        {/* Image wrapper for aspect ratio */}
        <div className="relative pt-[133%]"> {/* 4:3 aspect ratio */}
          {!imageError && (
            <img 
              src={image} 
              alt={title}
              loading="lazy"
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
              className={`
                absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 
                ease-out will-change-transform group-hover:scale-105
                ${imageLoaded ? 'opacity-100' : 'opacity-0'}
              `}
            />
          )}
          
          {/* Loading state */}
          {!imageLoaded && !imageError && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
              <div className="animate-pulse w-full h-full bg-gray-200" />
            </div>
          )}

          {/* Error state */}
          {imageError && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
              <div className="text-gray-400 text-sm">Image not available</div>
            </div>
          )}
        </div>

        {/* Overlay */}
        <div 
          className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-30"
          aria-hidden="true"
        />

        {/* Content */}
        <div className="absolute inset-0 p-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="text-white text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <p className="text-sm uppercase tracking-wider mb-2">{category}</p>
            <h3 className="font-display text-2xl mb-2">{title}</h3>
            <p className="text-sm opacity-90">{description}</p>
            {dimensions && (
              <p className="text-sm mt-2 opacity-75">{dimensions}</p>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
});

ProjectCard.displayName = 'ProjectCard';

export default ProjectCard;