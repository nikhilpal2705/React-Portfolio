import { useAOS } from '@/hooks/useAOS';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from "./routes/AppRoutes";
import Preloader from '@/components/layouts/Preloader';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'aos/dist/aos.css';
import 'devicon'

// Load this css at last
import "@/assets/css/style.css";

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
