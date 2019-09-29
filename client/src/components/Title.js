import React from "react";

import "../styles/Title.css";

export const Title = ({ text }) => {
  return (
    <div className="title">
      <h1>{text}</h1>
    </div>
  );
};
