import PropTypes from 'prop-types';
import { portfolioData } from '@/constants';
import { useGLightbox } from '@/hooks/useGLightbox';
import { useIsotope } from '@/hooks/useIsotope';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineLink, AiOutlineInfoCircle } from 'react-icons/ai';
import { HiOutlineZoomIn } from 'react-icons/hi';

const PortfolioItem = ({ item, index }) => {
  const [showInfo, setShowInfo] = useState(false);
  const portfolioItemRef = useRef(null);

  const hideInfo = useCallback(() => {
    setShowInfo(false);
  }, []);

  // Handle click outside to close the info
  const handleClickOutside = useCallback((event) => {
    if (portfolioItemRef.current && !portfolioItemRef.current.contains(event.target)) {
      hideInfo();
    }
  }, [hideInfo]);

  // Check if the element is in the viewport
  const handleScroll = useCallback(() => {
    if (portfolioItemRef.current) {
      const rect = portfolioItemRef.current.getBoundingClientRect();
      if (rect.top > window.innerHeight || rect.bottom < 0) {
        hideInfo();
      }
    }
  }, [hideInfo]);

  useEffect(() => {
    if (showInfo) {
      document.addEventListener('click', handleClickOutside);
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [showInfo, handleClickOutside, handleScroll]);

  return (
    <div
      className={`col-lg-4 col-md-6 portfolio-item isotope-item ${item.filter}`}
      ref={portfolioItemRef}
    >
      <div className="portfolio-image-wrapper position-relative">
        <img
          onClick={hideInfo}
          src={item.image}
          className="img-fluid custom-border"
          alt={item.title}
        />

        {/* Icon Wrapper */}
        <div className="icon-wrapper custom-border position-absolute top-0 end-0 p-2">
          {/* Zoom icon */}
          <a
            href={item.image}
            title="Zoom In"
            className="glightbox preview-link"
            data-description={`.desc${index}`}
          >
            <HiOutlineZoomIn />
          </a>
          {/* Portfolio detail icon */}
          <Link
            to={`/portfolio-details?id=${item.id}`}
            title="More Details"
            className="preview-link ms-3"
          >
            <AiOutlineLink />
          </Link>

          {/* Info button */}
          <a
            onClick={() => setShowInfo(!showInfo)}
            className="preview-link ms-3"
            title="Show Info"
          >
            <AiOutlineInfoCircle />
          </a>
        </div>

        <div className={`portfolio-info custom-border ${showInfo ? 'show' : ''}`}>
          <div className="d-flex justify-content-between">
            <h4 className="me-auto">{item.title}</h4>
          </div>
          <p className={`desc${index}`}>{item.description}</p>
        </div>

      </div>
    </div>
  );
};

// Define prop types for PortfolioItem
PortfolioItem.propTypes = {
  item: PropTypes.shape({
    filter: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('*');
  const isotopeContainer = useIsotope(activeFilter, 'masonry', 'original-order');
  useGLightbox();
  const handleFilterClick = (filter) => setActiveFilter(filter);

  return (
    <section id="portfolio" className="portfolio section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Portfolio</h2>
        <p>{portfolioData.mainSummary}</p>
      </div>

      <div className="container">
        <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order" data-aos="fade-up" data-aos-delay="100">
          <ul className="portfolio-filters isotope-filters">
            <li className={activeFilter === '*' ? 'filter-active' : ''} onClick={() => handleFilterClick('*')}>All</li>
            {portfolioData.filters.map((item) => {
              const filterClass = `.${item.class}`;
              const isActive = activeFilter === filterClass;
              return (
                <li key={item.class} className={isActive ? 'filter-active' : ''} onClick={() => handleFilterClick(filterClass)}>{item.name}</li>
              );
            })}
          </ul>

          <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200" ref={isotopeContainer}>
            {portfolioData.portfolioItems.map((item, index) => (<PortfolioItem key={index} item={item} index={index} />))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;