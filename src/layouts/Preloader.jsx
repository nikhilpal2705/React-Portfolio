import React, { useEffect, useState } from 'react';

const Preloader = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    window.addEventListener('load', () => setIsLoaded(true));
  }, []);

  return !isLoaded && <div id="preloader"></div>;
};

export default Preloader;
