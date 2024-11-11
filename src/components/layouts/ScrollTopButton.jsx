import { useState, useEffect } from 'react';

const ScrollTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show the button when the scroll position is greater than 100px
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault(); // Prevent the default link behavior

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="container">
      <a
        href="#"
        id="scroll-top"
        className={`scroll-top d-flex align-items-center justify-content-center ${isVisible ? 'active' : ''}`}
        onClick={scrollToTop} // Smooth scroll to top
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </div>
  );
};

export default ScrollTopButton;
