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
      <h2>Services</h2>
      <div className="services">
        <div className="examen">
          <div className="examen-text">
            <h3>{languageToUse.examenTitle}</h3>
            <p>{languageToUse.examenText}</p>
          </div>
          <img src={Examen} alt="" />
        </div>
        <div className="reparations">
          <div className="reparations-text">
            <h3>{languageToUse.reparationsTitle}</h3>
            <p>{languageToUse.reparationsText}</p>
          </div>
          <img src={Reparations} alt="" />
        </div>
        <div className="orders">
          <div className="orders-text">
            <h3>{languageToUse.ordersTitle}</h3>
            <p>{languageToUse.ordersText}</p>
          </div>
          <img src={Orders} alt="" />
        </div>
      </div>
    </>
  );
};

export default Services;
