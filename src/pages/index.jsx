import React from "react";
import { Helmet } from "react-helmet";

import Hero from "../components/Hero";
import Products from "../components/Products";
import Insta from "../components/Insta";
import Hours from "../components/Hours";
import Services from "../components/Services";
import Contact from "../components/Contact";

import "../styles/global.css";

import { content } from "../content/languages";
import intakeInfo from "../content/intake";

const IndexPage = function (props) {
  let { language, languageToUse } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);

  console.log(languageToUse);
  console.log(languageToUse.metaKeywords);
  return (
    <div>
      <Helmet>
        <title>{languageToUse.indexTitle}</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content={languageToUse.metaDescription} />
        <meta name="keywords" content={languageToUse.metaKeywords} />
        <link rel="canonical" href={intakeInfo.domainName} />
      </Helmet>

      <Hero language={language} languageToUse={languageToUse} />
      <Products language={language} languageToUse={languageToUse} />
      <Insta />
      <Hours language={language} languageToUse={languageToUse} />
      <Services language={language} languageToUse={languageToUse} />
      <Contact language={language} languageToUse={languageToUse} />
    </div>
  );
};

export default IndexPage;
