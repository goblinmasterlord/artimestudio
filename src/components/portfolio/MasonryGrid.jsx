import { useCallback, useEffect, useState, memo, useMemo } from 'react';
import { useInView } from 'react-intersection-observer';
import Masonry from 'react-masonry-css';
import ProjectCard from './ProjectCard';

const MasonryGrid = memo(({ items }) => {
  const [visibleItems, setVisibleItems] = useState([]);
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
    rootMargin: '200px 0px'
  });

  // Optimized breakpoint columns for better layout
  const breakpointColumns = useMemo(() => ({
    default: 3,
    1536: 3,
    1280: 3,
    1024: 2,
    768: 2,
    640: 1,
    480: 1
  }), []);

  // Improved masonry props with consistent spacing
  const masonryProps = useMemo(() => ({
    breakpointCols: breakpointColumns,
    className: "flex -mx-4 w-auto", // Negative margin to offset padding
    columnClassName: "px-4 space-y-8 mb-8" // Consistent vertical and horizontal spacing
  }), [breakpointColumns]);

  // Progressive loading of items for better performance
  useEffect(() => {
    if (inView && items.length > 0) {
      // Initial batch of items
      const initialBatchSize = 6;
      
      if (visibleItems.length === 0) {
        // Load initial batch immediately
        setVisibleItems(items.slice(0, initialBatchSize));
        
        // Load the rest after a short delay
        if (items.length > initialBatchSize) {
          const timer = setTimeout(() => {
            setVisibleItems(items);
          }, 300);
          return () => clearTimeout(timer);
        }
      } else if (visibleItems.length < items.length) {
        // Load any remaining items
        setVisibleItems(items);
      }
    }
  }, [inView, items, visibleItems.length]);

  if (!items.length) return null;

  return (
    <div 
      ref={ref} 
      className="max-w-[1400px] mx-auto px-4 sm:px-6 transform-gpu will-change-transform"
    >
      {inView && (
        <Masonry {...masonryProps}>
          {visibleItems.map((item, index) => (
            <ProjectCard
              key={`${item.title}-${index}`}
              {...item}
              index={index}
            />
          ))}
        </Masonry>
      )}
    </div>
  );
});

MasonryGrid.displayName = 'MasonryGrid';

export default MasonryGrid;