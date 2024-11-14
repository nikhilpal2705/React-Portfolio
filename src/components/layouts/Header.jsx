import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import PropTypes from 'prop-types';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const MenuItem = ({ id, label, icon, isActive, closeMenu }) => {
  const navigate = useNavigate();

  // Scroll to section and update URL
  const handleClick = useCallback((e) => {
    e.preventDefault();
    closeMenu();
    navigate('/' + id); // Navigate to hash, triggering `useEffect` to scroll
  }, [navigate, id, closeMenu]);

  return (
    <li>
      <Link to={id} className={isActive ? 'active' : ''} onClick={handleClick}>
        <i className={`bi ${icon} navicon`}></i>
        <span>{label}</span>
      </Link>
    </li>
  );
};

MenuItem.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  closeMenu: PropTypes.func.isRequired,
};

const Header = () => {
  const navmenulinks = useMemo(() => [
    { id: '#hero', label: 'Home', icon: 'bi-house' },
    { id: '#about', label: 'About', icon: 'bi-person' },
    { id: '#skills', label: 'Skills', icon: 'bi-book' },
    { id: '#resume', label: 'Resume', icon: 'bi-file-earmark-text' },
    { id: '#portfolio', label: 'Portfolio', icon: 'bi-images' },
    { id: '#services', label: 'Services', icon: 'bi-hdd-stack' },
    { id: '#contact', label: 'Contact', icon: 'bi-envelope' },
  ], []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState(location.pathname === '/portfolio-details' ? '#portfolio' : '#hero');

  // Update activeMenu based on route change
  useEffect(() => {
    if (location.pathname === '/portfolio-details') {
      setActiveMenu('#portfolio');
    } else if (location.pathname === '/') {
      setActiveMenu('#hero');
    }
  }, [location.pathname]);


  // Set active link based on scroll position on homepage
  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY + 200;
    for (const link of navmenulinks) {
      const section = document.querySelector(link.id);
      if (section && scrollPosition >= section.offsetTop && scrollPosition <= section.offsetTop + section.offsetHeight) {
        setActiveMenu(link.id);
        break;
      }
    }
  }, [navmenulinks]);


  // Debounce scroll events
  useEffect(() => {
    if (location.pathname !== '/') return;

    const debouncedScroll = () => {
      window.requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', debouncedScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', debouncedScroll);
  }, [location.pathname, handleScroll]);


  // Smooth scroll to section if URL contains hash
  useEffect(() => {
    if (location.hash) {
      const targetSection = document.querySelector(location.hash);
      if (targetSection) {
        setTimeout(() => {
          targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 0);
      }
    }
  }, [location]);


  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);


  // Toggle menu function
  const toggleMenu = useCallback(() => setIsMenuOpen(prev => !prev), []);


  return (
    <header ref={headerRef} id="header" className={`header d-flex flex-column justify-content-center ${isMenuOpen ? 'header-show' : ''}`}>
      <ThemeToggle />
      <div className="container">
        <i className={`header-toggle d-xl-none bi ${isMenuOpen ? 'bi-x' : 'bi-list'}`} onClick={toggleMenu}></i>
        <nav id="navmenu" className="navmenu">
          <ul>
            {navmenulinks.map(link => (
              <MenuItem
                key={link.id}
                {...link}
                isActive={activeMenu === link.id}
                closeMenu={toggleMenu}
              />
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
