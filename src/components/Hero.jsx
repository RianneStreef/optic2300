import React, { useEffect, useState } from "react";
import { content } from "../content/languages";

import logo from "../images/logo-black.png";

import "../styles/Hero.css";

const Hero = (props) => {
  let { language, languageToUse } = props;
  // let [background, setBackground] = useState(true);

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setBackground(!background);
  //   }, 5000);
  // });

  return (
    <div
      // className={`hero ${background ? "background-1" : "background-2"}`}
      className="hero"
      id="hero"
    >
      <div className="header-placeholder" />
      <img src={logo} className="logo-hero" />
      <div className="frosted-glass">
        <p>{languageToUse.heroText}</p>
      </div>
    </div>
  );
};

export default Hero;
