import { RouterProvider } from 'react-router';
import { router } from './routes';
import { useSmoothScroll } from './hooks/useSmoothScroll';

export default function App() {
  // Inicializace Lenis smooth scrollu
  useSmoothScroll();
  
  return <RouterProvider router={router} />;
}