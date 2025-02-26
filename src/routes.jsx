import { createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';

// Implement code splitting with lazy loading
const Home = lazy(() => import('./pages/Home'));
const CanvasArt = lazy(() => import('./pages/CanvasArt'));
const InteriorDesign = lazy(() => import('./pages/InteriorDesign'));
const Contact = lazy(() => import('./pages/Contact'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/canvas-art',
    element: <CanvasArt />,
  },
  {
    path: '/interior-design',
    element: <InteriorDesign />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
]);

export default router;