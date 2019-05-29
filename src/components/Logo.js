import React from "react";

export const Logo = ({
  alt = "No Logo Provided",
  src = "No Source Provided"
}) => {
  return (
    <div className="logo-container">
      <img className="logo" alt={alt} src={src} />
    </div>
  );
};
