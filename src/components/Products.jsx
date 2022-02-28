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
        {/* <div className="helmet">
          <div className="product-image helmet-image" />
          <h3>{languageToUse.helmetTitle}</h3>
          <p>{languageToUse.helmetText}</p>
        </div>
        <div className="accessories">
          <div className="product-image accessories-image" />
          <h3>{languageToUse.accessoriesTitle}</h3>
          <p>{languageToUse.accessoriesText}</p>
        </div> */}
      </div>
      <div className="products">
        <div className="glasses">
          <div className="product-image-desk glasses-image-desk" />
          <h3 className="product-title">{languageToUse.glassesTitle}</h3>
          <p>{languageToUse.glassesText}</p>
        </div>
        <div className="sun-glasses">
          <div className="product-image-desk  sunglasses-image-desk" />
          <h3 className="product-title">{languageToUse.sunGlassesTitle}</h3>
          <p>{languageToUse.sunGlassesText}</p>
        </div>
        <div className="goggles">
          <div className="product-image-desk  goggles-image-desk" />
          <h3 className="product-title">{languageToUse.gogglesTitle}</h3>
          <p>{languageToUse.gogglesText}</p>
        </div>
        <div className="lenses">
          <div className="product-image-desk  lenses-image-desk" />
          <h3 className="product-title">{languageToUse.lensesTitle}</h3>
          <p>{languageToUse.lensesText}</p>
        </div>
      </div>

      <div className="products-vertical">
        <div className="glasses-vertical">
          <div className="product-image-vertical glasses-image-vertical" />

          <div>
            <h3 className="product-title">{languageToUse.glassesTitle}</h3>
            <p>{languageToUse.glassesText}</p>
          </div>
        </div>
        <div className="sun-glasses-vertical">
          <div className="product-image-vertical  sunglasses-image-vertical" />
          <div>
            <h3 className="product-title">{languageToUse.sunGlassesTitle}</h3>
            <p>{languageToUse.sunGlassesText}</p>
          </div>
        </div>
        <div className="goggles-vertical">
          <div className="product-image-vertical  goggles-image-vertical" />
          <div>
            <h3 className="product-title">{languageToUse.gogglesTitle}</h3>
            <p>{languageToUse.gogglesText}</p>
          </div>
        </div>
        <div className="lenses-vertical">
          <div className="product-image-vertical lenses-image-vertical" />
          <div>
            <h3 className="product-title">{languageToUse.lensesTitle}</h3>
            <p>{languageToUse.lensesText}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
