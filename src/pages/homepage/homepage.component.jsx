import React from "react";
import "./homepage.style.scss";
import Hero from "../../components/hero/hero.component";
import Motto from "../../components/motto/motto.component";
import Skills from "../../components/skills/skills.component";

import Footer from "../../components/footer/footer.component";
import About from "../../components/about/about.component";
import Projects from "../../components/projects/projects.component";
import "../../components/header/mobileView";

function Homepage() {
  return (
    <div className="home-page">
      <Hero />
      <Motto />
      <About />
      <Skills />
      <Projects />
      <Hero />

      <Footer />
    </div>
  );
}

export default Homepage;
