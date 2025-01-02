import { skillsData } from "@/constants";
import PropTypes from 'prop-types';
import { useState } from "react";

// const Skills = () => {
//   return (
//     <section id="skills" className="skills section">
//       <div className="container section-title" data-aos="fade-up">
//         <h2>Skills</h2>
//         <p>{skillsData.mainSummary}</p>
//       </div>

//       <div className="container" data-aos="fade-up" data-aos-delay="100">
//         <div className="row skills-content">

//           <div className="col-lg-6">
//             {skillsData.skillsLeft.map((item, index) => (<SkillItem key={item.name} skill={item.name} level={item.level} />))}
//           </div>

//           <div className="col-lg-6">
//             {skillsData.skillsRight.map((item, index) => (<SkillItem key={item.name} skill={item.name} level={item.level} />))}
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// const SkillItem = ({ skill, level }) => (
//   <div className="progress">
//     <span className="skill">
//       <span>{skill}</span> <i className="val">{level}%</i>
//     </span>
//     <div className="progress-bar-wrap">
//       <div
//         className="progress-bar"
//         role="progressbar"
//         aria-valuenow={level}
//         aria-valuemin="0"
//         aria-valuemax="100"
//         style={{ width: `${level}%` }}
//       ></div>
//     </div>
//   </div>
// );



const SkillItem = ({ label, svg, iconClass }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      data-aos="fade-up"
      data-aos-delay="100"
      className="skill-item col-4 col-sm-4 col-md-2 my-2 text-center"

    >
      {svg ? (
        <svg
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`icon ${isHovered ? '' : 'icon-color'}`}  // Conditionally add/remove the icon-color class
          focusable="false"
          data-icon={label}
          role="i"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
        >
          <path fill="currentcolor" d={svg} />
        </svg>
      ) : (
        <i
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`mx-auto my-auto ${iconClass} ${isHovered ? '' : 'icon-color'}`}>
        </i>
      )}
      <h6 className="mt-2 cursor-default">{label}</h6>
    </div>
  );
};

// Define prop types for SkillItem
SkillItem.propTypes = {
  label: PropTypes.string.isRequired,
  svg: PropTypes.string,
  iconClass: PropTypes.string,
};

const Skills = () => {
  return (
    <section id="skills" className="section ">

      <div className="container section-title" data-aos="fade-up">
        <h2>Skills</h2>
        <p>{skillsData.mainSummary}</p>
      </div>
      <div className="container">
        <div className="skills-card">
          <div className="row justify-content-center skills-info">
            {[...skillsData.skillsLeft, ...skillsData.skillsRight].map((item) =>
              <SkillItem key={item.name} iconClass={item.class} svg={item.svg} label={item.name} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
