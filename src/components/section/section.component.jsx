import React from "react";
import "./section.style.scss";

function Section(props) {
  return <div className="section">{props.children}</div>;
}

export default Section;
