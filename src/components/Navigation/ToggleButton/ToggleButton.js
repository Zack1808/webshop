import React from "react";

// Importing the context
import { useTheme, useThemeUpdate } from "../../../context/themeContext";

// Importing the style file
import "./ToggleButton.css";

// Creating the ToggleButton component
const ToggleButton = () => {
  // Creating the context variables
  const dark = useTheme();
  const setDark = useThemeUpdate();

  return (
    <div
      className="toggle-button-container"
      data-toggle={dark}
      onClick={setDark}
    >
      <div className="handle"></div>
    </div>
  );
};

// Exporting the ToggleButton container
export default ToggleButton;
