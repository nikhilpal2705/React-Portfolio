import { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#hero');

  // Toggle menu visibility for mobile
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Handle scroll spy
  const navmenulinks = [
    '#hero',
    '#about',
    '#resume',
    '#portfolio',
    '#services',
    '#contact',
  ];

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY + 200;

      navmenulinks.forEach((link) => {
        const section = document.querySelector(link);
        if (section) {
          if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
            setActiveLink(link);
          }
        }
      });
    };

    // Listen for scroll events
    window.addEventListener('scroll', handleScroll);

    // Trigger on load to set the initial active link
    handleScroll();

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array means it runs once on mount

  // Scroll to the section based on the URL hash
  useEffect(() => {
    if (window.location.hash) {
      const sectionId = window.location.hash;
      const section = document.querySelector(sectionId);
      if (section) {
        setTimeout(() => {
          const scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop, 10),
            behavior: 'smooth',
          });
        }, 100);
      }
    }
  }, []); // This effect runs once on mount

  return (
    <header id="header" className={`header d-flex flex-column justify-content-center ${isMenuOpen ? 'header-show' : ''}`}>
      <i className={`header-toggle d-xl-none bi ${isMenuOpen ? 'bi-x' : 'bi-list'}`} onClick={toggleMenu}></i>
      <nav id="navmenu" className="navmenu">
        <ul>
          <li><a href="#hero" className={activeLink === '#hero' ? 'active' : ''} onClick={() => { setIsMenuOpen(false) }}><i className="bi bi-house navicon"></i><span>Home</span></a></li>
          <li><a href="#about" className={activeLink === '#about' ? 'active' : ''} onClick={() => { setIsMenuOpen(false) }}><i className="bi bi-person navicon"></i><span>About</span></a></li>
          <li><a href="#resume" className={activeLink === '#resume' ? 'active' : ''} onClick={() => { setIsMenuOpen(false) }}><i className="bi bi-file-earmark-text navicon"></i><span>Resume</span></a></li>
          <li><a href="#portfolio" className={activeLink === '#portfolio' ? 'active' : ''} onClick={() => { setIsMenuOpen(false) }}><i className="bi bi-images navicon"></i><span>Portfolio</span></a></li>
          <li><a href="#services" className={activeLink === '#services' ? 'active' : ''} onClick={() => { setIsMenuOpen(false) }}><i className="bi bi-hdd-stack navicon"></i><span>Services</span></a></li>
          {/* <li><a href="#contact" className={activeLink === '#contact' ? 'active' : ''} onClick={() => { setIsMenuOpen(false) }}><i className="bi bi-envelope navicon"></i><span>Contact</span></a></li> */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
