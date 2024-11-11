import { useAOS } from '@/hooks/useAOS';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from "./routes/AppRoutes";
import Preloader from '@/components/layouts/Preloader';
import { ToastContainer } from 'react-toastify';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'aos/dist/aos.css';
import 'devicon'
import 'react-toastify/dist/ReactToastify.css';

// Load this css at last
import "@/assets/css/app.css";
import "@/assets/img/images"

const App = () => {
  useAOS(); // Initialize AOS for animations

  return (
    <>
      <Preloader />
      <BrowserRouter>
        <AppRoutes />
        <ToastContainer />
      </BrowserRouter>
    </>
  );
};

export default App;
