import React from "react";
import "./Achievements.css";
import icon1 from "../../Images/happy@2x.png";
import icon2 from "../../Images/marketing@2x.png";
import icon3 from "../../Images/surface1@2x.png";
import icon4 from "../../Images/transportation@2x.png";
function Achievements() {
  return (
    <div id="about" className="achievements">
      <div className="achievements__left">
        <h1>Our Achievements</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati
          repellat quod, tenetur deserunt et distinctio omnis quam perferendis
          molestiae fugit!
        </p>
      </div>
      <div className="achievements__right">
        <div className="achievements__rightTop">
          <div className="achievement achievement1">
            <img className="achievement__icon icon1" src={icon1} alt="" />
            <div className="achievement__detail">
              <h2>700+</h2>
              <h3>Happy Clients</h3>
            </div>
          </div>
          <div className="achievement achievement2">
            <img className="achievement__icon" src={icon2} alt="" />
            <div className="achievement__detail">
              <h2>140+</h2>
              <h3>Projects Completed</h3>
            </div>
          </div>
        </div>
        <div className="achievements__rightBottom">
          <div className="achievement achievement3">
            <img className="achievement__icon" src={icon3} alt="" />
            <div className="achievement__detail">
              <h2>25+</h2>
              <h3>Crazy Minds</h3>
            </div>
          </div>
          <div className="achievement achievement4">
            <img className="achievement__icon" src={icon4} alt="" />
            <div className="achievement__detail">
              <h2>75+</h2>
              <h3>Projects Running</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Achievements;
