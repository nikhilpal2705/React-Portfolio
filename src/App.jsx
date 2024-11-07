import "./assets/css/main.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'aos/dist/aos.css';
import 'glightbox/dist/css/glightbox.min.css';
import 'swiper';

import Header from './layouts/Header';
import Footer from './layouts/Footer';
import ScrollTopButton from './layouts/ScrollTopButton';
import Preloader from "./layouts/Preloader"
import Hero from './components/Hero';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Contact from './components/Contact';
import { useAOS } from './hooks/useAOS';


const App = () => {
  useAOS(); // Initialize AOS for animations

  return (
    <>
      <Preloader />
      <Header />
      <main className="main">
        <Hero />
        <About />
        <Resume />
        <Portfolio />
        <Services />
        <Contact />
      </main>
      <Footer />
      <ScrollTopButton />
    </>
  );
};

export default App;
