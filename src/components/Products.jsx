import React from "react";

import "../styles/Products.css";

import glasses from "../images/glasses.png";

import { content } from "../content/languages";

const Products = (props) => {
  let { language, languageToUse } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);
  return (
    <div className="products">
      <div className="glasses">
        <img src={glasses} alt="" />
        <h3>{languageToUse.glassesTitle}</h3>
        <p>{languageToUse.glassesText}</p>
      </div>
      <div className="sun-glasses">
        <img src={glasses} alt="" />
        <h3>{languageToUse.sunGlassesTitle}</h3>
        <p>{languageToUse.sunGlassesText}</p>
      </div>
      <div className="goggles">
        <img src={glasses} alt="" />
        <h3>{languageToUse.gogglesTitle}</h3>
        <p>{languageToUse.gogglesText}</p>
      </div>
      <div className="lenses">
        <img src={glasses} alt="" />
        <h3>{languageToUse.lensesTitle}</h3>
        <p>{languageToUse.lensesText}</p>
      </div>
      <div className="helmet">
        <img src={glasses} alt="" />
        <h3>{languageToUse.helmetTitle}</h3>
        <p>{languageToUse.helmetText}</p>
      </div>
      <div className="accessories">
        <img src={glasses} alt="" />
        <h3>{languageToUse.accessoriesTitle}</h3>
        <p>{languageToUse.accessoriesText}</p>
      </div>
    </div>
  );
};

export default Products;
