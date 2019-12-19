import React from "react";
import PropTypes from "prop-types";

import "../styles/Links.css";

const Links = ({ links }) => (
  <div className="social-links">
    {links.map((link, i) => {
      return (
        <a
          className="social-link"
          key={i}
          target="_blank"
          rel="noopener noreferrer"
          href={link.url}
        >
          <object className="social-logo" type="image/svg+xml" data={link.logo}>
            {link.text}
          </object>
          <span className="social-text">{link.text}</span>
        </a>
      );
    })}
  </div>
);

Links.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      logo: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  ).isRequired
};

export default Links;
