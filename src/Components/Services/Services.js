import React from "react";
import "./Services.css";
import serviceIcon1 from "../../Images/Group 65@2x.png";
import serviceIcon2 from "../../Images/Group 66@2x.png";
import serviceIcon3 from "../../Images/Group 69@2x.png";
import serviceIcon4 from "../../Images/Group 72@2x.png";
function Services() {
  return (
    <div id="services" className="services">
      <h1 className="services__heading">What We Do?</h1>
      <p>
        Our main focus is to make the User Experience very simple and easy.
        Simplicity is our Strength.
      </p>
      <div className="services__cards">
        <div className="service__card">
          <img src={serviceIcon1} alt="" />
          <h2>Experience Design</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Doloremque, consequatur!
          </p>
        </div>
        <div className="service__card">
          <img src={serviceIcon2} alt="" />
          <h2>Interface Design</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Doloremque, consequatur!
          </p>
        </div>
        <div className="service__card">
          <img src={serviceIcon3} alt="" />
          <h2>Prototyping</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Doloremque, consequatur!
          </p>
        </div>
        <div className="service__card">
          <img src={serviceIcon4} alt="" />
          <h2>Illustration</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Doloremque, consequatur!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
