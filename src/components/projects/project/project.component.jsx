import React, { useEffect } from "react";
import "./project.style.scss";
import tempImage from "../../../images/projects/1.jpeg";

function Project({ projectName, projectImage, projectUrl }) {
  return (
    <div className="project">
      <a href={projectUrl}>
        <img src={projectImage} alt="" />
        <div className="project-content">
          <div className="project-content-text">
            <h1>{projectName}</h1>
          </div>
        </div>
      </a>
    </div>
  );
}

export default Project;
