import React from "react";

import "../styles/Products.css";

import { content } from "../content/languages";

import rayBan from "../images/rayBan.png";
import electric from "../images/electric.png";
import oakley from "../images/oakley.jpeg";

const Products = (props) => {
  let { language, languageToUse } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);
  return (
    <>
      <div className="header-placeholder" id="products" />
      <div className="logo-banner">
        <img src={rayBan} alt="Ray Ban" className="brand-logo" />
        <img src={electric} alt="Electric" className="brand-logo" />
        <img src={oakley} alt="Oakley" className="brand-logo" />
      </div>
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
        <div className="helmets">
          <div className="product-image helmets-image" />
          <h3 className="product-title">{languageToUse.helmetTitle}</h3>
          <p>{languageToUse.helmetText}</p>
        </div>
        <div className="accessories">
          <div className="product-image accessories-image" />
          <h3 className="product-title">{languageToUse.accessoriesTitle}</h3>
          <p>{languageToUse.accessoriesText}</p>
        </div>
      </div>
    </>
  );
};

export default Products;
