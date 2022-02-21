import React from "react";

import Examen from "../images/examen.webp";
import Reparations from "../images/reparation.webp";
import Orders from "../images/commande.webp";

import { content } from "../content/languages";

import "../styles/Services.css";

const Services = (props) => {
  let { language, languageToUse } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);
  return (
    <>
      <div className="header-placeholder" id="services" />

      <div className="services">
        <div className="examen">
          <div className="service-text">
            <h3>{languageToUse.examenTitle}</h3>
            <p className="service-p">{languageToUse.examenText}</p>
          </div>
          <div className="service-image examen-image" />
        </div>
        <div className="reparations">
          <div className="service-text">
            <h3>{languageToUse.reparationsTitle}</h3>
            <p className="service-p">{languageToUse.reparationsText}</p>
          </div>
          <div className="service-image reparation-image" />
        </div>
        <div className="orders">
          <div className="service-text">
            <h3>{languageToUse.ordersTitle}</h3>
            <p className="service-p">{languageToUse.ordersText}</p>
          </div>
          <div className="service-image orders-image" />
        </div>
      </div>
    </>
  );
};

export default Services;
