import { useAOS } from '@/hooks/useAOS';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from "./routes/AppRoutes";
import Preloader from '@/layouts/Preloader';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'aos/dist/aos.css';

// Load this css at last
import "@/assets/css/main.css";

const App = () => {
  useAOS(); // Initialize AOS for animations

  return (
    <>
      <Preloader />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  );
};

export default App;
