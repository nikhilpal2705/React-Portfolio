import { useEffect } from 'react';
import Typed from 'typed.js';

export const useTyped = (stringArray) => {
  useEffect(() => {
    const typed = new Typed('.typed', {
      strings: stringArray,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
      loop: true,
    });

    return () => typed.destroy(); // Cleanup on unmount
  }, [stringArray]); // Add stringArray as a dependency
};
