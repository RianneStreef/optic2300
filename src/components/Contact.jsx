import React from "react";
import { content } from "../content/languages";

import "../styles/Contact.css";

const Contact = (props) => {
  let { language, languageToUse } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);
  return (
    <div className="contact" id="contact">
      <div className="header-placeholder" />
      <h2 className="h2">{languageToUse.contact}</h2>
      <form
        className="contact-form"
        name="contact"
        method="post"
        data-netlify="true"
        action="/success"
        netlify-honeypot="bot-field"
      >
        <input
          className="contact-input"
          type="hidden"
          name="contact"
          value="contact"
        />
        <p className="hidden">
          <label>
            Don’t fill this out if you’re human: <input name="bot-field" />
          </label>
        </p>
        <input type="hidden" name="form-name" value="contact" />
        <p className="form-items">
          <label htmlFor="name">{languageToUse.name}:</label> <br />
          <input className="input" type="text" id="name" name="name" required />
        </p>
        <p className="form-items">
          <label htmlFor="email">{languageToUse.email}:</label> <br />
          <input
            className="input"
            type="email"
            id="email"
            name="email"
            required
          />
        </p>
        <p className="form-items">
          <label htmlFor="message">{languageToUse.message}:</label> <br />
          <textarea id="message" name="message" rows="8" required></textarea>
        </p>
        <div className="button-center-container">
          <button
            className="custom-button"
            type="submit"
            value="Submit message"
          >
            {languageToUse.send}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
