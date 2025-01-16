// src/components/portfolio/MasonryGrid.jsx
import Masonry from 'react-masonry-css';
import { motion } from 'framer-motion';

const MasonryGrid = ({ items }) => {
  const breakpointColumns = {
    default: 3,
    1100: 2,
    700: 1
  };

  return (
    <Masonry
      breakpointCols={breakpointColumns}
      className="flex -ml-8 w-auto"
      columnClassName="pl-8 bg-clip-padding"
    >
      {items.map((item, index) => (
        <motion.div
          key={index}
          className="mb-8 relative group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className="relative overflow-hidden">
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
              <div className="text-white text-center p-4">
                <h3 className="font-display text-xl mb-2">{item.title}</h3>
                <p className="text-sm opacity-90">{item.description}</p>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </Masonry>
  );
};

export default MasonryGrid;