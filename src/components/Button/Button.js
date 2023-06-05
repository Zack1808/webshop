import React from "react";
import { Link } from "react-router-dom";

// Importing the style file
import "./Button.css";

// Creating the Button component
const Button = ({ type = "submit", text = "Click Me", link = "/" }) => {
  if (type === "page-link")
    return (
      <Link className="btn" to={link}>
        {text}
      </Link>
    );

  if (type === "link")
    return (
      <a className="btn" href={link} target="_blank" rel="noreferrer">
        {text}
      </a>
    );

  return (
    <button className="btn" type={type}>
      {text}
    </button>
  );
};

// Exporting the Button component
export default Button;
