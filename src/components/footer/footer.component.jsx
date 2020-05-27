import React from "react";
import "./footer.style.scss";
import Connect from "../connect/connect.component";
import logo from "../../images/logo.jpg";

function Footer() {
  return (
    <footer className="footer-section">
      <h1 className="section-title">Contact</h1>

      <img src={logo} alt="logo" />

      <Connect />

      <div className="footer-row">
        <div className="col-md-4">
          <hr className="light" />
          <p>(555)555-55555</p>
          <p>xmage211120@gmail.com</p>
          {/* <p>100 Street Name</p>
            <p>Zhong Li,320</p> */}
        </div>

        {/* <div className="col-md-4">
            <hr class="light" />
            <h4>Out Hours</h4>
            <hr className="light" />
            <p>Monday:9am - 5pm</p>
            <p>Saturday:10pm - 4pm</p>
            <p>Sunday:closed</p>
          </div>

          <div className="col-md-4">
            <hr class="light" />
            <h4>Service Area</h4>
            <hr className="light" />
            <p>City, State, 00000</p>
            <p>City, State, 00000</p>
            <p>City, State, 00000</p>
            <p>City, State, 00000</p>
          </div> */}
      </div>

      <div className="col-12">
        <hr className="light-100" />
        <h5>&copy;liyi.com</h5>
      </div>
    </footer>
  );
}

export default Footer;
