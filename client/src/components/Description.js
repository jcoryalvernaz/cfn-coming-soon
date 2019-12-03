import React from "react";
import Notification from "./Notification";

import "../styles/Description.css";

const Description = ({ text, src, alt, message, visible, level }) => (
  <div className="description">
    <p className="description-text">{text}</p>
    <Notification
      src={src}
      alt={alt}
      message={message}
      visible={visible}
      level={level}
    />
  </div>
);

export default Description;
