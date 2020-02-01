import React from "react";
import pic1 from "../../assetts/saxpic (1).jpg";
import pic2 from "../../assetts/profile.jpg";
import pic3 from '../../assetts/saxpic2.jpg'

const HeroImgs = () => {
  return (
    <div className="hero-images">
      <img src={pic2} alt="" />
      {/* <img src={pic1} alt="" /> */}
      {/* <img src={pic3} alt="" /> */}
    </div>
  );
};

export default HeroImgs;
