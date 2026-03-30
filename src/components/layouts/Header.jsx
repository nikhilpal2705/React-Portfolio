import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import PropTypes from 'prop-types';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const MenuItem = ({ id, label, icon, isActive, closeMenu }) => {
  const navigate = useNavigate();

  const handleClick = useCallback((e) => {
    e.preventDefault();
    closeMenu();
    navigate(`/${id}`);
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
    { id: '#projects', label: 'Projects', icon: 'bi-images' },
    { id: '#services', label: 'Services', icon: 'bi-hdd-stack' },
    { id: '#contact', label: 'Contact', icon: 'bi-envelope' },
  ], []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState(location.pathname === '/project-details' ? '#projects' : '#hero');

  useEffect(() => {
    if (location.pathname === '/project-details') {
      setActiveMenu('#projects');
    } else if (location.pathname === '/') {
      setActiveMenu('#hero');
    }
  }, [location.pathname]);


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


  useEffect(() => {
    if (location.pathname !== '/') return;

    const debouncedScroll = () => {
      window.requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', debouncedScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', debouncedScroll);
  }, [location.pathname, handleScroll]);


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


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);


  const toggleMenu = useCallback(() => setIsMenuOpen(prev => !prev), []);
  const closeMenu = useCallback(() => setIsMenuOpen(false), []);


  return (
    <header ref={headerRef} id="header" className={`header d-flex flex-column justify-content-center ${isMenuOpen ? 'header-show' : ''}`}>
      <div className="container">
        <button
          type="button"
          className="header-toggle d-xl-none"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
        >
          <i className={`bi ${isMenuOpen ? 'bi-x' : 'bi-list'}`}></i>
        </button>
        <ThemeToggle />
        <nav id="navmenu" className="navmenu">
          <ul>
            {navmenulinks.map(link => (
              <MenuItem
                key={link.id}
                {...link}
                isActive={activeMenu === link.id}
                closeMenu={closeMenu}
              />
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
