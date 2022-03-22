import React from "react";
import { Helmet } from "react-helmet";

import "../styles/Insta.css";

const Insta = () => {
  return (
    <div className="insta">
      <Helmet>
        <script
          src="https://cdn2.woxo.tech/a.js#60ca0c172d51e300159c2b7c"
          async
          data-usrc
        ></script>
      </Helmet>
      <div data-mc-src="488c6662-6743-43db-8b8b-e4e826575386#instagram" />
    </div>
  );
};

export default Insta;
