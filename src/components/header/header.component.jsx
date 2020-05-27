import React from "react";
import "./header.style.scss";
import { Link } from "react-router-dom";
import logo from "../../images/logo.jpg";
// import MobileMenu from "./mobileView";

// import { ReactComponent as Logo } from "../../asset/original.svg";

function Header({ currentUser }) {
  // let menu = new MobileMenu();
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <img src={logo} alt="logo" />
      </Link>

      <div className="options options--is-visible options--is-expanded">
        <Link className="option" to="/">
          About
        </Link>

        <Link className="option" to="/">
          Skill
        </Link>

        <Link className="option" to="/">
          Project
        </Link>

        <Link className="option" to="/">
          Contact
        </Link>
      </div>
      <div className="header__menu-icon">
        <div className="header__menu-icon__top"></div>
        <div className="header__menu-icon__middle"></div>
        <div className="header__menu-icon__bottom"></div>
      </div>
    </div>
  );
}

export default Header;
