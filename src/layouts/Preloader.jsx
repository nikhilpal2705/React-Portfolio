import { useEffect, useState } from 'react';

const Preloader = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => setIsLoaded(true);

    window.addEventListener('load', handleLoad);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return !isLoaded && <div id="preloader"></div>;
};

export default Preloader;
