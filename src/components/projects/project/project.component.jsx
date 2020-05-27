import React from "react";
import "./project.style.scss";
import projectImage from "../../../images/projects/1.jpeg";

function Project() {
  return (
    <div className="project">
      <h1>Project</h1>
      <img src={projectImage} alt="" />
    </div>
  );
}

export default Project;
