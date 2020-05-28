import React, { useEffect } from "react";
import "./header.style.scss";
import { Link } from "react-router-dom";
import logo from "../../images/logo.jpg";

import { EventHandler } from "../EventHandler";

function Header({ currentUser }) {
  useEffect(() => {
    let ev = new EventHandler();
  }, []);

  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <img src={logo} alt="logo" />
      </Link>
      <div className="options">
        <a href="#about-section" className="option">
          About
        </a>
        <a href="#skills-section" className="option">
          Skills
        </a>
        <a href="#projects-section" className="option">
          Projects
        </a>
        <a href="#contact-section" className="option">
          Contact
        </a>
      </div>
      <div className="header__menu-icon ">
        <div className="header__menu-icon__top"></div>
        <div className="header__menu-icon__middle"></div>
        <div className="header__menu-icon__bottom"></div>
      </div>
    </div>
  );
}

export default Header;
