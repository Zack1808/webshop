import React from "react";

// Importing the style file
import "./RadioButton.css";

// Creating the RadioButton component
const RadioButton = ({
  active,
  label = "label",
  updateChecked,
  name = "name",
  ariaName = "radio",
}) => {
  return (
    <div className="radio-container" onClick={() => updateChecked(name)}>
      <div
        className={`radio ${active ? "active" : ""}`}
        onClick={() => updateChecked(name)}
      ></div>
      <input id={label} name={ariaName} type="radio" defaultChecked={active} />
      <label onClick={() => updateChecked(name)} htmlFor={label}>
        {label}
      </label>
    </div>
  );
};

// Exporting the RadioButton component
export default RadioButton;
