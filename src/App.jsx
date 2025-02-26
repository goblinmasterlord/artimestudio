import { RouterProvider } from 'react-router-dom';
import { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import router from './routes';
import ScrollToTopButton from './components/ui/ScrollToTopButton';

function App() {
  // Scroll restoration - ensures page starts at top when navigating
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
  }, []);

  return (
    <>
      <RouterProvider router={router} />
      <ScrollToTopButton />
    </>
  );
}

export default App;