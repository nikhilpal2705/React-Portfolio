import { aboutData } from "@/constant/constant";

const About = () => {

  return (
    <section id="about" className="about section">
      <div className="container section-title" data-aos="fade-up">
        <h2>About</h2>
        <p>
          {aboutData.mainSummary}
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4 justify-content-center">

          <div className="col-lg-4">
            <img src={aboutData.profileImage} className="img-fluid" alt="Profile" />
          </div>

          <div className="col-lg-8 content">
            <h2>{aboutData.title}</h2>
            <p className="fst-italic py-3">{aboutData.description}</p>
            <div className="row">
              <InfoColumn items={aboutData.detailsLeft} />
              <InfoColumn items={aboutData.detailsRight} />
            </div>

            <p className="py-3">{aboutData.additionalDescription}</p>
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

export default About;
