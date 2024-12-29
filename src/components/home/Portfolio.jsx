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

  return (
    <div
      className={`col-lg-4 col-md-6 portfolio-item isotope-item ${item.filter}`}
      onMouseLeave={() => setShowInfo(false)}
    >
      <div className="portfolio-image-wrapper position-relative">
        {/* Portfolio Image */}
        <img
          onClick={() => setShowInfo((prev) => !prev)}
          src={item.image}
          className="img-fluid custom-border"
          alt={item.title}
          onMouseEnter={() => setShowInfo(true)}
        />

        {/* Icon Wrapper */}
        <div
          className="icon-wrapper custom-border position-absolute top-0 end-0 p-2"
          onMouseEnter={() => setShowInfo(false)}
        >
          {/* Zoom Icon */}
          <a
            href={item.image}
            title="Zoom In"
            className="glightbox preview-link"
            data-description={`.desc${index}`}
          >
            <HiOutlineZoomIn />
          </a>

          {/* Portfolio Details Icon */}
          <Link
            to={`/portfolio-details?id=${item.id}`}
            title="More Details"
            className="preview-link ms-3"
          >
            <AiOutlineLink />
          </Link>

          {/* Info Button */}
          <button
            type="button"
            onClick={() => setShowInfo((prev) => !prev)}
            className="preview-link ms-3 btn btn-link p-0"
            title="Show Info"
          >
            <AiOutlineInfoCircle />
          </button>
        </div>

        {/* Portfolio Info */}
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