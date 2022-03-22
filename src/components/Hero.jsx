import React, { useEffect, useState } from "react";
import { content } from "../content/languages";

import logo from "../images/logo-black.png";

import "../styles/Hero.css";

const Hero = (props) => {
  let { language, languageToUse } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);

  useEffect(() => {
    let hero1 = document.getElementById("hero1");
    let hero2 = document.getElementById("hero2");
    setInterval(() => {
      if (hero1.classList.contains("fade-in")) {
        hero1.classList.remove("fade-in");
        hero1.classList.add("fade-out");
      } else hero1.classList.contains("fade-out");
      {
        hero1.classList.remove("fade-out");
        hero1.classList.add("fade-in");
      }
      if (hero2.classList.contains("fade-in")) {
        hero2.classList.remove("fade-in");
        hero2.classList.add("fade-out");
      } else if (hero2.classList.contains("fade-out")) {
        hero2.classList.remove("fade-out");
        hero2.classList.add("fade-in");
      }
    }, 5000);
  });

  return (
    <div className="hero">
      <div className="hero-image-1 fade-in" id="hero1" />
      <div className="hero-image-2 fade-out" id="hero2" />
      <div className="hero-content">
        <img src={logo} className="logo-hero" />
        <div className="frosted-glass">
          <p>{languageToUse.heroText}</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
