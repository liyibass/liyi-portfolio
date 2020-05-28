import React from "react";
// import Section from "../section/section.component";
import "./hero.style.scss";
import "../../styles/effect/fadein.scss";

function Hero2() {
  return (
    <div className="hero-section section">
      <div className="hero-section-2__bg "></div>
      <div className="hero-section--all">
        <div className="hero-section__text-content">
          <h3>
            Living
            <br />
            learning
            <br />
            leveling up one day at a time.
          </h3>
        </div>

        <div className="hero-section__text-content-2"></div>
      </div>
    </div>
  );
}

export default Hero2;
