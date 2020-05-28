import React from "react";
import "./homepage.style.scss";
import Hero from "../../components/hero/hero.component";
import Motto from "../../components/motto/motto.component";
import Skills from "../../components/skills/skills.component";

import Footer from "../../components/footer/footer.component";
import About from "../../components/about/about.component";
import Projects from "../../components/projects/projects.component";
import "../../components/mobileView";
import Hero2 from "../../components/hero/hero2.component";
import Header from "../../components/header/header.component";

function Homepage() {
  return (
    <div className="home-page">
      <Hero />
      <Motto />
      <a id="about-section" className="anchor" href="/">
        anchor
      </a>
      <About />
      <a id="skills-section" className="anchor" href="/">
        anchor
      </a>
      <Skills />
      <a id="projects-section" className="anchor" href="/">
        anchor
      </a>
      <Projects />
      <Hero2 />
      <a id="contact-section" className="anchor" href="/">
        anchor
      </a>
      <Footer />
    </div>
  );
}

export default Homepage;
