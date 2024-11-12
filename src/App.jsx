import { useAOS } from '@/hooks/useAOS';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from "./routes/AppRoutes";
import Preloader from '@/components/layouts/Preloader';
import { ToastContainer } from 'react-toastify';
import { useTheme } from '@/contexts/ThemeContext';
import { Analytics } from '@vercel/analytics/react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'devicon'
import 'react-toastify/dist/ReactToastify.css';

// Load this css at last
import "@/assets/css/app.css";
import "@/assets/img/images"

const App = () => {
  useAOS(); // Initialize AOS for animations
  const { isDarkMode } = useTheme(); // Access the current theme from context
  return (
    <>
      <Analytics />
      <Preloader />
      <BrowserRouter>
        <AppRoutes />
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
          transition:Bounce
        />
      </BrowserRouter>
    </>
  );
};

export default App;
