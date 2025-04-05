import { memo } from 'react';
import { motion } from 'framer-motion';

const ProjectCard = memo(({ title, image, category, description, dimensions, index }) => {
  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring",
        damping: 25,
        stiffness: 300,
        delay: Math.min(index * 0.1, 0.5),
      }
    },
    hover: {
      y: -5,
      transition: { 
        type: "spring",
        stiffness: 300,
        damping: 20 
      }
    }
  };

  const imageVariants = {
    hover: { 
      scale: 1.05,
      transition: { 
        duration: 0.7, 
        ease: [0.215, 0.61, 0.355, 1] 
      }
    }
  };

  const contentVariants = {
    initial: { 
      y: 10, 
      opacity: 0.9 
    },
    hover: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.3, 
        ease: "easeOut" 
      }
    }
  };

  const descriptionVariants = {
    initial: { 
      opacity: 0, 
      y: 10 
    },
    hover: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.3, 
        delay: 0.1,
        ease: "easeOut" 
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "-50px" }}
      className="group relative overflow-hidden"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <motion.img
          src={image}
          srcSet={`${image}?w=300 300w, ${image}?w=600 600w, ${image}?w=900 900w`}
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          alt={title}
          loading="lazy"
          decoding="async"
          fetchPriority={index < 6 ? "high" : "auto"}
          className="w-full h-full object-cover will-change-transform"
          variants={imageVariants}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/0 to-black/60" />
      </div>
      
      <motion.div 
        className="absolute inset-x-0 bottom-0 p-7"
        variants={contentVariants}
        initial="initial"
      >
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
          
          <motion.p 
            className="text-sm text-white/80 line-clamp-2"
            variants={descriptionVariants}
            initial="initial"
          >
            {description}
          </motion.p>
          
          <div className="text-sm text-white/60">
            {dimensions}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
});

ProjectCard.displayName = 'ProjectCard';

export default ProjectCard;