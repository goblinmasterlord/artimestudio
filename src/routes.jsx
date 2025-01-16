import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import CanvasArt from './pages/CanvasArt';
import InteriorDesign from './pages/InteriorDesign';

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
]);

export default router;