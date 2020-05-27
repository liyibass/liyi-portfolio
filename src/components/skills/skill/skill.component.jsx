import React from "react";
import "./skill.style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Skill({ skillName, skillIcon }) {
  return (
    <div className="skill">
      <h3 className="skill-name">{skillName}</h3>

      <FontAwesomeIcon className="skill-logo" icon={skillIcon} size="4x" />
    </div>
  );
}

export default Skill;
