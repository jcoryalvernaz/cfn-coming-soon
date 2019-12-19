import React from "react";
import PropTypes from "prop-types";

import "../styles/Title.css";

const Title = ({ text }) => <h1 className="title">{text}</h1>;

Title.propTypes = {
  text: PropTypes.string.isRequired
};

export default Title;
