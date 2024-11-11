import { useState, useEffect, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#hero');

  // Toggle menu visibility for mobile with useCallback
  const toggleMenu = useCallback(() => setIsMenuOpen(prevState => !prevState), []);

  // Define menu links with useMemo to avoid re-creating array on each render
  const navmenulinks = useMemo(() => [
    { id: '#hero', label: 'Home', icon: 'bi-house' },
    { id: '#about', label: 'About', icon: 'bi-person' },
    { id: '#skills', label: 'Skills', icon: 'bi-book' },
    { id: '#resume', label: 'Resume', icon: 'bi-file-earmark-text' },
    { id: '#portfolio', label: 'Portfolio', icon: 'bi-images' },
    { id: '#services', label: 'Services', icon: 'bi-hdd-stack' },
    { id: '#contact', label: 'Contact', icon: 'bi-envelope' },
  ], []);

  // Debounce scroll event handler to improve performance
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY + 200; // (use 260 if Contact form is hidden else use 200);

      for (const link of navmenulinks) {
        const section = document.querySelector(link.id);
        if (section && position >= section.offsetTop && position <= section.offsetTop + section.offsetHeight) {
          setActiveLink(link.id);
          break;
        }
      }
    };

    // Using debounce technique for scroll event
    const debouncedHandleScroll = () => {
      clearTimeout(handleScroll.timer);
      handleScroll.timer = setTimeout(handleScroll, 10);
    };

    // Listen for scroll events
    window.addEventListener('scroll', debouncedHandleScroll);

    // Trigger on load to set the initial active link
    handleScroll();

    // Cleanup on component unmount
    return () => window.removeEventListener('scroll', debouncedHandleScroll);
  }, [navmenulinks]);

  // Smooth scroll to section on load if there's a hash in URL
  useEffect(() => {
    if (window.location.hash) {
      const section = document.querySelector(window.location.hash);
      if (section) {
        setTimeout(() => {
          const scrollMarginTop = parseInt(getComputedStyle(section).scrollMarginTop, 10) || 0;
          window.scrollTo({
            top: section.offsetTop - scrollMarginTop,
            behavior: 'smooth',
          });
        }, 100);
      }
    }
  }, []); // This effect runs once on mount

  // Menu Item component for readability and reuse
  const MenuItem = ({ id, label, icon }) => (
    <li>
      <a
        href={"/" + id}
        className={activeLink == id ? 'active' : ''}
        onClick={() => setIsMenuOpen(false)}
      >
        <i className={`bi ${icon} navicon`}></i>
        <span>{label}</span>
      </a>
    </li>
  );

  // Define prop types for MenuItem
  MenuItem.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  };

  return (
    <header id="header" className={`header d-flex flex-column justify-content-center ${isMenuOpen ? 'header-show' : ''}`}>
      <div className="container">
        <i className={`header-toggle d-xl-none bi ${isMenuOpen ? 'bi-x' : 'bi-list'}`} onClick={toggleMenu}></i>
        <nav id="navmenu" className="navmenu">
          <ul>
            {navmenulinks.map(link => (
              <MenuItem key={link.id} {...link} />
            ))}
          </ul>
        </nav>
    </div >
    </header>
  );
};

export default Header;
