import React from "react";
import "./Banner.css";
import bannerImg from "../../Images/bannerImg.png";
function Banner() {
  return (
    <div className="banner">
      <div className="banner__left">
        <h1 className="banner__heading">
          Florence<br></br>
          agency
        </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit neque
          est omnis illo autem culpa quae. In doloremque ex similique, adipisci
          neque officia blanditiis officiis quis maxime voluptatibus, nesciunt
          iste.
        </p>
        <button className="banner__btn">See Pricing</button>
      </div>
      <div className="banner__right">
        <img src={bannerImg} className="banner__img" alt="" />
      </div>
    </div>
  );
}

export default Banner;
