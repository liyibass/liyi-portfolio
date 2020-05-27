import React from "react";
import "./skills.style.scss";
import Skill from "./skill/skill.component";
import {
  faHtml5,
  faCss3,
  faJs,
  faReact,
  faSass,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";

function Skills() {
  const developSkills = [
    { id: "1", name: "HTML5", icon: faHtml5 },
    { id: "2", name: "CSS3", icon: faCss3 },
    { id: "3", name: "JavaScript", icon: faJs },
    { id: "4", name: "React.js", icon: faReact },
    { id: "5", name: "Redux", icon: faReact },
    { id: "6", name: "Sass", icon: faSass },
  ];

  const fullStackSkills = [
    { id: "1", name: "Node.js", icon: null },
    { id: "2", name: "Webpack", icon: null },
    { id: "3", name: "MongoDB", icon: null },
    { id: "4", name: "Firebase", icon: null },
  ];

  const mediaSkills = [
    { id: "1", name: "Photoshop", icon: null },
    { id: "2", name: "Premiere", icon: null },
    { id: "3", name: "Logic Pro X", icon: null },
    { id: "4", name: "Pro Tools", icon: null },
  ];

  return (
    <div className="section skills-session ">
      <h1 className="section-title">Skill & Tools</h1>
      <div className="section-wrapper">
        <div className="skill-and-tools">
          <div className="develop-tools">
            <h2>Develop</h2>

            <div className="skillContainer">
              {developSkills.map((skill) => {
                return (
                  <Skill
                    key={skill.id}
                    skillName={skill.name}
                    skillIcon={skill.icon}
                  />
                );
              })}
            </div>

            <div className="skillRollContainer"></div>
          </div>

          <div className="media-tools">
            <h2>Full-Stack</h2>

            <div className="skillRowContainer">
              {fullStackSkills.map((skill) => {
                return <li key={skill.id}>{skill.name}</li>;
              })}
            </div>
            <h2>Media</h2>
            <div className="skillRowContainer">
              {mediaSkills.map((skill) => {
                return <li key={skill.id}>{skill.name}</li>;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
