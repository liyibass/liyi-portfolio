import React from "react";
// import Section from "../section/section.component";
import "./hero.style.scss";
import "../../styles/effect/fadein.scss";

function Hero() {
  return (
    <div className="hero-section section " id="start">
      <div className="hero-section__bg fade-in"></div>
      <div className="hero-section--all">
        <div className="hero-section__text-content">
          <h2>Hi,i'm Liyi</h2>

          <h1>FRONT END DEVELOPER</h1>
          <p>
            I help people and brands reach their goals by designing & building
            user-centric digital products and interactive experiences.
          </p>
        </div>

        <div className="hero-section__text-content-2"></div>
      </div>
    </div>
  );
}

export default Hero;
