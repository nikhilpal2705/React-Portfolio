import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const useAOS = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: 'ease-in-out',
      offset: 70,
      once: true,
      mirror: false,
      anchorPlacement: 'top-bottom',
    });

    window.addEventListener('load', AOS.refresh);

    return () => {
      window.removeEventListener('load', AOS.refresh);
    };
  }, []);
};
