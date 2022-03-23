import React, { useEffect, useState } from "react";
import { content } from "../content/languages";

import logo from "../images/logo-black.png";

import "../styles/Hero.css";

const Hero = (props) => {
  let { language, languageToUse } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);

  let [background, setBackground] = useState(1);

  useEffect(() => {
    let hero1 = document.getElementById("hero1");

    setInterval(() => {
      console.log(background);
      console.log(hero1.classList);
      if (background < 3) {
        setBackground(background + 1);
      } else {
        setBackground(1);
      }
    }, 5000);
    console.log(background);
    return () => clearInterval();
  }, []);

  return (
    <div className="hero">
      <div
        className={`hero-image hero-image-1 ${
          background === 1
            ? "fade-in"
            : background === 2
            ? "hidden"
            : background === 3
            ? "fade-out"
            : null
        }`}
        id="hero1"
      />
      <div
        className={`hero-image hero-image-2 ${
          background === 2
            ? "fade-in"
            : background === 3
            ? "hidden"
            : background === 1
            ? "fade-out"
            : null
        }`}
        id="hero2"
      />
      <div
        className={`hero-image hero-image-3 ${
          background === 3
            ? "fade-in"
            : background === 1
            ? "hidden"
            : background === 2
            ? "fade-out"
            : null
        }`}
        id="hero3"
      />
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
