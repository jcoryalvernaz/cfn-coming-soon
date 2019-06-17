import React from "react";
import Toast from "./Toast";
import "../css/Description.css";

export const Description = ({ text, src, alt, message, visible, level }) => {
  return (
    <div className="description">
        <p className="description-text">{text}</p>
        <Toast
          src={src}
          alt={alt}
          message={message}
          visible={visible}
          level={level}
        />

    </div>
  );
};
