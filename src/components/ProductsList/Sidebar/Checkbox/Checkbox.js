import React, { useState } from "react";
import { UilCheck } from "@iconscout/react-unicons";

// Importing the style file
import "./Checkbox.css";

// Creating the Checkbox component
const Checkbox = ({ label = "label" }) => {
  // Setting up state
  const [checked, setChecked] = useState(false);

  // Function that will update the checked state
  const updateChecked = () => {
    setChecked((prevState) => !prevState);
  };

  return (
    <div className="checkbox-container">
      <div className="checkbox" onClick={updateChecked}>
        {checked && <UilCheck />}
      </div>
      <input type="checkbox" checked={checked} />
      <label onClick={updateChecked}>{label}</label>
    </div>
  );
};

// Exporting the Checkbox component
export default Checkbox;
