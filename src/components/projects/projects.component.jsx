import React from "react";
import "./projects.style.scss";
import Project from "./project/project.component";
function Projects() {
  return (
    <div className="projects-section section">
      <h1 className="section-title section-title-dark">Project</h1>
      <div className="inner-width ">
        <div className="projects-container ">
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
        </div>
      </div>
    </div>
  );
}

export default Projects;
