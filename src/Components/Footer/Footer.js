import React from "react";
import "./Footer.css";
import logo from "../../Images/logo.png";
import icon1 from "../../Images/facebook-logo-in-circular-shape@2x.png";
import icon2 from "../../Images/dribbble (1)@2x.png";
import icon3 from "../../Images/linkedin (2)@2x.png";
import icon4 from "../../Images/twitter (4)@2x.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__section1">
        <img className="footer__sectionLogo" src={logo} alt="" />
        <div className="footer__sectionIcons">
          <a href="https://www.facebook.com/">
            <img src={icon1} alt="" className="footer__sectionIcon" />
          </a>
          <a href="https://twitter.com/">
            <img src={icon2} alt="" className="footer__sectionIcon" />
          </a>
          <a href="https://dribbble.com/">
            <img src={icon3} alt="" className="footer__sectionIcon" />
          </a>
          <a href="https://www.behance.net/">
            <img src={icon4} alt="" className="footer__sectionIcon" />
          </a>
        </div>
      </div>
      <div className="footer__section">
        <ul>
          <li>
            <a href="#">Feature</a>
          </li>
          <li>
            <a href="#">Enterprise</a>
          </li>
          <li>
            <a href="#">Blogging</a>
          </li>
          <li>
            <a href="#">services</a>
          </li>
        </ul>
      </div>
      <div className="footer__section">
        <ul>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Terms of Service</a>
          </li>
          <li>
            <a href="#">Security</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
        </ul>
      </div>
      <div className="footer__section">
        <ul>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Help Centre</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">Status</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
