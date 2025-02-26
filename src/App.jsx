import { RouterProvider } from 'react-router-dom';
import { useEffect } from 'react';
import router from './routes';
import ScrollToTopButton from './components/ui/ScrollToTopButton';

function App() {
  // Scroll restoration - ensures page starts at top when navigating
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
    
    // Add cleanup function to prevent memory leaks and duplicate elements
    return () => {
      // Clean up any potential event listeners or subscriptions
      document.querySelectorAll('main').forEach((element, index) => {
        if (index > 0) element.remove(); // Remove any duplicate main elements
      });
    };
  }, []);

  return (
    <>
      <RouterProvider router={router} />
      <ScrollToTopButton />
    </>
  );
}

export default App;