import React, { useState, useEffect } from "react";
import "./projects.style.scss";
import Project from "./project/project.component";
import projectList from "../../projectsData/projectList";

function Projects() {
  return (
    <div className="projects-section section">
      <h1 className="section-title section-title-dark">Project</h1>
      <div className="inner-width ">
        <div className="projects-container ">
          {projectList.map((project) => {
            return (
              <Project
                key={project.id}
                projectName={project.name}
                projectImage={project.image}
                projectUrl={project.webUrl}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;
