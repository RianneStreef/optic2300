import React, { useEffect, useState } from "react";
import { content } from "../content/languages";

import "../styles/Hero.css";

const Hero = (props) => {
  let { language, languageToUse } = props;
  let [background, setBackground] = useState(true);

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);

  useEffect(() => {
    setTimeout(() => {
      setBackground(!background);
    }, 5000);
  });

  return (
    <div
      className={`hero ${background ? "background-1" : "background-2"}`}
      id="hero"
    >
      <div className="frosted-glass">
        <h1>{languageToUse.heroTitle}</h1>
        <p>{languageToUse.heroText}</p>
      </div>
    </div>
  );
};

export default Hero;
