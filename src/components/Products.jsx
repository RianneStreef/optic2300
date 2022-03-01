import React from "react";

import "../styles/Products.css";

import { content } from "../content/languages";

const Products = (props) => {
  let { language, languageToUse } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);
  return (
    <>
      <div className="header-placeholder" id="products" />

      <div className="products">
        <div className="glasses">
          <div className="product-image glasses-image" />
          <h3 className="product-title">{languageToUse.glassesTitle}</h3>
          <p>{languageToUse.glassesText}</p>
        </div>
        <div className="sun-glasses">
          <div className="product-image sunglasses-image" />
          <h3 className="product-title">{languageToUse.sunGlassesTitle}</h3>
          <p>{languageToUse.sunGlassesText}</p>
        </div>
        <div className="goggles">
          <div className="product-image goggles-image" />
          <h3 className="product-title">{languageToUse.gogglesTitle}</h3>
          <p>{languageToUse.gogglesText}</p>
        </div>
        <div className="lenses">
          <div className="product-image lenses-image" />
          <h3 className="product-title">{languageToUse.lensesTitle}</h3>
          <p>{languageToUse.lensesText}</p>
        </div>
      </div>
    </>
  );
};

export default Products;
