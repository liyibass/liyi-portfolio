import React from "react";

import "./connect.style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faGoogle,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Connect() {
  return (
    <div className="connect-section">
      <div className="">
        <div className="col-12">{/* <h2>Connect</h2> */}</div>

        <div className="connect-links">
          <a href="https://www.twitter.com" className="connect-icon--twitter">
            <FontAwesomeIcon icon={faTwitter} size="sm" />
          </a>

          <a href="https://www.facebook.com" className="connect-icon--facebook">
            <FontAwesomeIcon icon={faFacebook} size="sm" />
          </a>

          <a href="https://www.google.com" className="connect-icon--google">
            <FontAwesomeIcon icon={faGoogle} size="sm" />
          </a>

          <a href="https://www.youtube.com" className="connect-icon--youtube">
            <FontAwesomeIcon icon={faYoutube} size="sm" />
          </a>

          <a
            href="https://www.instagram.com"
            className="connect-icon--instagram"
          >
            <FontAwesomeIcon icon={faInstagram} size="sm" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Connect;

//  npm i --save @fortawesome/fontawesome-svg-core  @fortawesome/free-brands-svg-icons @fortawesome/react-fontawesome
