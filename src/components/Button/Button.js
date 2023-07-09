import React from "react";
import { Link } from "react-router-dom";

// Importing the style file
import "./Button.css";

// Creating the Button component
const Button = ({ type = "submit", text = "Click Me", link = "/", click }) => {
  if (type === "page-link")
    return (
      <Link className="btn" to={link} onClick={click}>
        {text}
      </Link>
    );

  if (type === "link")
    return (
      <a
        className="btn"
        href={link}
        target="_blank"
        rel="noreferrer"
        onClick={click}
      >
        {text}
      </a>
    );

  return (
    <button className="btn" type={type} onClick={click}>
      {text}
    </button>
  );
};

// Exporting the Button component
export default Button;
