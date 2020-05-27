import React from "react";
import "./about.style.scss";
import "../../styles/base/overall.scss";

function About() {
  return (
    <div className="section about-section ">
      <div className="inner-width about-section-wrapper">
        <div className="about-section-row">
          <div className="about-info">
            <h1 className="section-title">About Liyi</h1>
            <h2>Front end developer</h2>
            <p>Bridge communication gap between designers and developers</p>
            <p>Create responsive websites that work on multiple devices</p>
            <p>Clean and functional web design</p>
          </div>
          <div className="about-info-img">
            <div className="about-info-img__img"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
