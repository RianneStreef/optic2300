import React from "react";

import Copyright from "../components/Copyright";
import "../styles/Footer.css";
import { content } from "../content/languages";

import flagEn from "../images/icon-en.png";
import flagFr from "../images/icon-fr.png";

const Footer = (props) => {
  let { language, languageToUse, setLanguage } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);

  function handleSetLanguage(language) {
    setLanguage(language);
    localStorage.setItem("languageInStorage", language);
  }

  return (
    <div className="footer">
      <Copyright />
      <div className="set-language-footer hidden-desktop">
        <img
          src={flagEn}
          onClick={() => handleSetLanguage("english")}
          className={`flag ${
            languageToUse.language === "english" ? "opaque" : "fade"
          } `}
        />
        <img
          src={flagFr}
          onClick={() => handleSetLanguage("french")}
          className={`flag ${
            languageToUse.language === "french" ? "opaque" : "fade"
          } `}
        />
      </div>
      <p className="address">Rue de Caron, 73440 Val Thorens, France</p>
    </div>
  );
};

export default Footer;
