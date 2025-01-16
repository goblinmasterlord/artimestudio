import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const SplitSection = ({ path, image, title, position }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="split-image cursor-pointer"
      onClick={() => navigate(path)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div 
        className="w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="image-overlay" />
      <div className="absolute inset-0 flex items-center justify-center">
        <h2 className="text-white font-display text-5xl tracking-wider">
          {title}
        </h2>
      </div>
    </motion.div>
  );
};

const Home = () => {
  return (
    <div className="grid grid-cols-split h-screen">
      <SplitSection
        path="/canvas-art"
        image="https://images.unsplash.com/photo-1581349485608-9469926a8e5e?auto=format&fit=crop&q=80"
        title="Canvas Art"
        position="left"
      />
      <SplitSection
        path="/interior-design"
        image="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80"
        title="Interior Design"
        position="right"
      />
    </div>
  );
};

export default Home;