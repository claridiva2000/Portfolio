import React from "react";
//stying
import "./hero.css";
//components
import Nav from "./heroComponents/Nav";
import Intro from "./heroComponents/Intro";

const Hero = () => {
  return (
    <div className="hero-container">
      <Intro />
      <Nav />
      
    </div>
  );
};

export default Hero;
