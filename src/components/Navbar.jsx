import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import "../styles/Navbar.css";

import flagEn from "../images/icon-en.png";
import flagFr from "../images/icon-fr.png";

import { content } from "../content/languages";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  z-index: 100;
  background-color: #fff;
  margin-top: 0;
  padding-left: 0;
  width: 100%;

  li {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: #fff;
    padding-right: 25px;
    margin: 10px 0;
    font-family: "Raleway";
    font-size: 20px;
    a {
      color: #fff;
      transition: color 500ms ease-in;
      text-decoration: none;
    }
    a:visited {
      color: #fff;
      text-decoration: none;
    }
    a:hover {
      color: var(--color-highlight-blue);
      transition: color 500ms ease-in;
    }
    p {
      margin-top: 0;
    }
  }
  flex-flow: column nowrap;
  background-color: #3d3d3d;
  position: fixed;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  top: 0;
  right: 0;
  height: 100vh;
  padding-top: 5rem;
  transition: transform 0.3s ease-in-out;
`;

const Navbar = (props) => {
  let { open, setOpen } = props;

  let { language, setLanguage, languageToUse } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);

  function handleSetLanguage(language) {
    setLanguage(language);
    localStorage.setItem("languageInStorage", language);
  }

  return (
    <div className="nav-bar">
      <Ul open={open}>
        <li>
          <Link to="/" className="nav-link" onClick={() => setOpen(!open)}>
            {languageToUse.home}
          </Link>
        </li>
        <li>
          <Link to="/#hero" className="nav-link" onClick={() => setOpen(!open)}>
            {languageToUse.welcome}
          </Link>
        </li>
        <li>
          <Link
            to="/#products"
            className="nav-link"
            onClick={() => setOpen(!open)}
          >
            {languageToUse.products}
          </Link>
        </li>
        <li>
          <Link
            to="/#hours"
            className="nav-link"
            onClick={() => setOpen(!open)}
          >
            {languageToUse.hours}
          </Link>
        </li>
        <li>
          <Link
            to="/#services"
            className="nav-link"
            onClick={() => setOpen(!open)}
          >
            {languageToUse.services}
          </Link>
        </li>
        <li>
          <Link
            to="/#contact"
            className="nav-link"
            onClick={() => setOpen(!open)}
          >
            {languageToUse.contact}
          </Link>
        </li>

        <li className="social-links-header">
          <div className="nav-item-language">
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
        </li>
      </Ul>
    </div>
  );
};

export default Navbar;
