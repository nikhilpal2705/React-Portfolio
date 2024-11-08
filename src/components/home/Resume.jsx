import { resumeData } from "@/constants/constant";

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
            <ResumeSection title="Summary">
              <ResumeItem title={resumeData.summary.name} description={resumeData.summary.description}>
                <ul>
                  <li>{resumeData.summary.phone}</li>
                  <li>{resumeData.summary.email}</li>
                </ul>
              </ResumeItem>
            </ResumeSection>

            <ResumeSection title="Education">
              {resumeData.education.map((item, index) => (
                <ResumeItem key={index} title={item.title} date={item.date} institution={item.institution} description={item.description} />
              ))}
            </ResumeSection>
          </div>

          {/* Right Column */}
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <ResumeSection title="Professional Experience">
              {resumeData.experience.map((item, index) => (
                <ResumeItem key={index} title={item.title} date={item.date} institution={item.company}>
                  <ul>
                    {item.tasks.map((task, i) => (
                      <li key={i}>{task}</li>
                    ))}
                  </ul>
                </ResumeItem>
              ))}
            </ResumeSection>
          </div>
        </div>
      </div>
    </section>
  );
};

// Sub-component for resume sections
const ResumeSection = ({ title, children }) => (
  <>
    <h3 className="resume-title">{title}</h3>
    {children}
  </>
);

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

export default Resume;
