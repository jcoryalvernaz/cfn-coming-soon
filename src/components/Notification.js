import React from "react";
import PropTypes from "prop-types";

import "../styles/Notification.css";

const Notification = ({ level, visible, src, alt, message }) => (
  <div className={`notification ${level}${visible ? " visible" : ""}`}>
    <img src={src} alt={alt} />
    <p>{message}</p>
  </div>
);

Notification.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
  level: PropTypes.string.isRequired
};

export default Notification;
