import React from "react";

import "../styles/Hours.css";

import { content } from "../content/languages";

import hoursImg from "../images/shop.jpeg";

const Hours = (props) => {
  let { language, languageToUse } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);

  return (
    <div className="hours" id="hours">
      <div className="hours-text">
        <h3>{languageToUse.hoursTitle}</h3>
        <p>{languageToUse.hoursText1}</p>
        <p>{languageToUse.hoursText2}</p>
      </div>
      <img src={hoursImg} alt="" className="hours-img" />
    </div>
  );
};

export default Hours;
