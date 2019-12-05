import React from "react";
import PropTypes from "prop-types";

import "../styles/Logo.css";

const Logo = ({ alt, src, spinSpeed }) => (
  <div className={`logo-container ${spinSpeed}`}>
    <img className="logo" alt={alt} src={src} />
  </div>
);

Logo.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  spinSpeed: PropTypes.string.isRequired
};

export default Logo;
