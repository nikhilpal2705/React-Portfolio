import { skillsData } from "@/constants/constant";

const Skills = () => {
  return (
    <section id="skills" className="skills section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Skills</h2>
        <p>{skillsData.mainSummary}</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row skills-content">

          <div className="col-lg-6">
            {skillsData.skillsLeft.map((item, index) => (<SkillItem key={item.name} skill={item.name} level={item.level} />))}
          </div>

          <div className="col-lg-6">
            {skillsData.skillsRight.map((item, index) => (<SkillItem key={item.name} skill={item.name} level={item.level} />))}
          </div>

        </div>
      </div>
    </section>
  );
};

const SkillItem = ({ skill, level }) => (
  <div className="progress">
    <span className="skill">
      <span>{skill}</span> <i className="val">{level}%</i>
    </span>
    <div className="progress-bar-wrap">
      <div
        className="progress-bar"
        role="progressbar"
        aria-valuenow={level}
        aria-valuemin="0"
        aria-valuemax="100"
        style={{ width: `${level}%` }}
      ></div>
    </div>
  </div>
);

export default Skills;
