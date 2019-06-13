import React from "react";
import "../css/Logo.css";

export const Logo = ({
  alt,
  src,
  spinSpeed
}) => {
  return (
    <div className={`logo-container ${spinSpeed}`}>
      <img className="logo" alt={alt} src={src} />
    </div>
  );
};

