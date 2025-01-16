import { useCallback, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Masonry from 'react-masonry-css';
import ProjectCard from './ProjectCard';

const MasonryGrid = ({ items }) => {
  const [visibleItems, setVisibleItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const breakpointColumns = {
    default: 3,
    1280: 3,
    1024: 2,
    640: 1
  };

  const loadItems = useCallback(() => {
    if (!items.length) return;
    
    setIsLoading(true);
    const chunkSize = 6; // Increased chunk size for smoother loading
    let currentIndex = 0;

    const loadNextChunk = () => {
      if (currentIndex >= items.length) {
        setIsLoading(false);
        return;
      }

      const nextChunk = items.slice(
        currentIndex,
        currentIndex + chunkSize
      );
      
      setVisibleItems(prev => [...prev, ...nextChunk]);
      currentIndex += chunkSize;

      if (currentIndex < items.length) {
        // Use requestIdleCallback for better performance if available
        if (window.requestIdleCallback) {
          window.requestIdleCallback(() => setTimeout(loadNextChunk, 150));
        } else {
          setTimeout(loadNextChunk, 150);
        }
      } else {
        setIsLoading(false);
      }
    };

    loadNextChunk();
  }, [items]);

  useEffect(() => {
    if (inView) {
      loadItems();
    }
  }, [inView, loadItems]);

  return (
    <div ref={ref}>
      <Masonry
        breakpointCols={breakpointColumns}
        className="flex w-auto -ml-8"
        columnClassName="pl-8 bg-clip-padding"
      >
        {visibleItems.map((item, index) => (
          <ProjectCard
            key={item.title} // Using title as key instead of index
            {...item}
            delay={Math.min(index * 0.1, 1)} // Cap the maximum delay
          />
        ))}
      </Masonry>
      {isLoading && (
        <div className="flex justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      )}
    </div>
  );
};

export default MasonryGrid;