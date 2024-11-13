import { portfolioData } from '@/constants/constant';
import { useGLightbox } from '@/hooks/useGLightbox';
import { useIsotope } from '@/hooks/useIsotope';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const PortfolioItem = ({ item, index }) => {
  return (
    <div className={`col-lg-4 col-md-6 portfolio-item isotope-item ${item.filter}`}>
      <img src={item.image} className="img-fluid" alt={item.title} />
      <div className="portfolio-info">
        <h4>{item.title}</h4>
        <p className={`desc${index}`}>{item.description}</p>
        <a
          href={item.image}
          title={item.title}
          className="glightbox preview-link"
          data-description={`.desc${index}`}
        >
          <i className="bi bi-zoom-in"></i>
        </a>
        <Link
          to={`/portfolio-details?id=${item.id}`}
          title="More Details"
          className="details-link"
        >
          <i className="bi bi-link-45deg"></i>
        </Link>
      </div>
    </div>
  );
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
            <li className={activeFilter == '*' ? 'filter-active' : ''} onClick={() => handleFilterClick('*')}>All</li>
            {portfolioData.filters.map((item) => {
              const filterClass = `.${item.class}`;
              const isActive = activeFilter == filterClass;
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