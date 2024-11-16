import { aboutData, links } from '@/constants';
import PropTypes from 'prop-types';

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container section-title" data-aos="fade-up">
        <h2>About</h2>
        <p>{aboutData.mainSummary}</p>
      </div>

      <div className="container">
        <div className="row gy-4 justify-content-center">
          {aboutData.profileImage && <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
            <img src={aboutData.profileImage} className="img-fluid" alt="Profile" />
          </div>}

          <div className="col-lg-8 content">

            <div data-aos="fade-up" data-aos-delay="100">
              <h2>{aboutData.title}</h2>
              <p className="fst-italic py-3">{aboutData.description}</p>
            </div>

            <div className="row" data-aos="fade-up" data-aos-delay="200">
              <InfoColumn items={aboutData.detailsLeft} />
              <InfoColumn items={aboutData.detailsRight} />
            </div>

            <div data-aos="fade-up" data-aos-delay="300">
              <p className="py-3">{aboutData.additionalDescription}</p>
              <div className="col-md-12 text-center">
                <a className="download-btn" href={links.resume} target="_blank" rel="noopener noreferrer">Download Resume</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Sub-component for rendering each info column
const InfoColumn = ({ items }) => (
  <div className="col-lg-6">
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          <i className="bi bi-chevron-right"></i> <strong>{item.label}:</strong> <span>{item.value}</span>
        </li>
      ))}
    </ul>
  </div>
);

// Define PropTypes for InfoColumn
InfoColumn.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default About;
