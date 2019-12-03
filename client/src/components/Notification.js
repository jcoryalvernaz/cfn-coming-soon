import React from "react";

import "../styles/Notification.css";

const Notification = ({ level, visible, src, alt, message }) => (
  <div className={`notification ${level}${visible ? " visible" : ""}`}>
    <img src={src} alt={alt} />
    <p>{message}</p>
  </div>
);

export default Notification;
