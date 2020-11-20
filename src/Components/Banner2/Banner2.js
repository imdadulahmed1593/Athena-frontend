import React from "react";
import "./Banner2.css";
import bannerImg from "../../Images/20 [Converted]@2x.png";
function Banner2() {
  return (
    <div className="banner2">
      <div className="banner__right">
        <img src={bannerImg} className="banner__img" alt="" />
      </div>
      <div className="banner__left">
        <h1 className="banner__heading">Stay Running & Project</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit neque
          est omnis illo autem culpa quae. In doloremque ex similique, adipisci
          neque officia blanditiis officiis quis maxime voluptatibus, nesciunt
          iste.
        </p>
        <button className="banner__btn">Contact Us</button>
      </div>
    </div>
  );
}

export default Banner2;
