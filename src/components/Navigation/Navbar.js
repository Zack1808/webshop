import React from "react";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";

// Importing the costume components
import ToggleButton from "./ToggleButton/ToggleButton";

// Importing the style file
import "./Navbar.css";

// Creating the Navbar component
const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="logo">
        <VideogameAssetIcon sx={{ fontSize: "5rem" }} />
        <h1>GamerTech</h1>
      </div>
      <ToggleButton />
    </div>
  );
};

// Exporting the Navbar component
export default Navbar;
