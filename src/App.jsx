import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer, Bounce } from 'react-toastify';
import { useAOS } from '@/hooks/useAOS';
import { Analytics } from '@vercel/analytics/react';
import { useTheme } from './hooks/useTheme';

// Import the AppRoutes component (which handles lazy loading of routes)
import AppRoutes from './routes/AppRoutes';

// Import global styles
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Load additional CSS and inages at last
import "@/assets/css/index.css";

// Load Components
import ScrollToTop from './components/layouts/scrollToTop';
import Preloader from './components/layouts/Preloader';

const App = () => {
  useAOS(); // Initialize AOS for animations
  const { isDarkMode } = useTheme(); // Access the current theme from context
  return (
    <>
      <Analytics />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<Preloader />}>
          <AppRoutes />
        </Suspense>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover
          theme={isDarkMode ? "dark" : "light"}
          transition={Bounce}
          // limit={2}
        />
      </BrowserRouter>
    </>
  );
};

export default App;
