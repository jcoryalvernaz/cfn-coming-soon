import React, { useState } from "react";
import PropTypes from "prop-types";

import "../styles/Subscribe.css";

const Subscribe = ({
  placeholder,
  buttonText,
  configureNotification,
  showNotification,
  changeLogoSpeed
}) => {
  const [state, setState] = useState({
    email: ""
  });

  const handleChange = e => {
    setState({ email: e.target.value.trim() });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (state.email) {
      fetch(`/.netlify/functions/addMember?email=${state.email}`)
        .then(res => res.json().then(data => ({status: res.status, body: data})))
        .then(obj => {
          configureNotification(obj);
          showNotification();
        })
        .catch(err => console.log(err))

      changeLogoSpeed();

      setState({ email: "" });
    }
  };

  return (
    <form className="subscribe" onSubmit={handleSubmit}>
      <input
        className="subscribe-email"
        name="email"
        type="email"
        placeholder={placeholder}
        onChange={handleChange}
        value={state.email}
        aria-label="Email Address"
      />
      <button className="subscribe-button" type="submit">
        {buttonText}
      </button>
    </form>
  );
};

Subscribe.propTypes = {
  placeholder: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  configureNotification: PropTypes.func.isRequired,
  showNotification: PropTypes.func.isRequired,
  changeLogoSpeed: PropTypes.func.isRequired
};

export default Subscribe;
