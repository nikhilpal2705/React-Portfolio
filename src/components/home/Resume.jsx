import { links, resumeData } from "@/constants";
import PropTypes from 'prop-types';

const Resume = () => {

  return (
    <section id="resume" className="resume section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Resume</h2>
        <p>
          {resumeData.mainSummary}
        </p>
      </div>

      <div className="container">
        <div className="row">
          {/* Left Column */}
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <div className="resume-column">
              <ResumeSection title="Summary">
                <ResumeItem title={resumeData.summary.title} description={resumeData.summary.description} />
              </ResumeSection>

              <ResumeSection title="Education">
                {resumeData.education.map((item) => (
                  <ResumeItem key={`${item.title}-${item.date}`} title={item.title} date={item.date} institution={item.institution} description={item.description} />
                ))}
              </ResumeSection>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <div className="resume-column">
              <ResumeSection title="Professional Experience">
                {resumeData.experience.map((item) => (
                  <ResumeItem key={`${item.title}-${item.date}`} title={item.title} date={item.date} institution={item.company}>
                    <ul>
                      {item.tasks.map((task) => (
                        <li key={task}>{task}</li>
                      ))}
                    </ul>
                  </ResumeItem>
                ))}
              </ResumeSection>
            </div>
          </div>

          <div className="p-3 resume-download-wrap" data-aos="fade-up" data-aos-delay="300">
            <div className="text-center">
              <a className="download-btn" href={links.resume} target="_blank" rel="noopener noreferrer">Download Resume</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// Sub-component for resume sections
const ResumeSection = ({ title, children }) => (
  <div>
    <h3 className="resume-title">{title}</h3>
    {children}
  </div>
);

ResumeSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

// Sub-component for individual resume items
const ResumeItem = ({ title, date, institution, description, children }) => (
  <div className="resume-item">
    <h4>{title}</h4>
    {date && <h5>{date}</h5>}
    {institution && <p><em>{institution}</em></p>}
    {description && <p>{description}</p>}
    {children}
  </div>
);

ResumeItem.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  institution: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node,
};

export default Resume;
