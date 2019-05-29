import React from "react";

export const Links = ({ links }) => {
  return (
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
            <img className="social-logo" src={link.logo} alt={link.text} />
            <span className="social-text">{link.text}</span>
          </a>
        );
      })}
    </div>
  );
};
