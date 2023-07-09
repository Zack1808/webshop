import React from "react";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import { Link, useLocation } from "react-router-dom";
import { UilShoppingCart } from "@iconscout/react-unicons";

// Importing the costume components
import ToggleButton from "./ToggleButton/ToggleButton";

// Importing the style file
import "./Navbar.css";
import Badge from "./Badge/Badge";

// Creating the Navbar component
const Navbar = () => {
  // Setting up the location hook
  const location = useLocation();

  return (
    <div className="navbar-container">
      <div className="container">
        <Link to="/" className="logo">
          <VideogameAssetIcon sx={{ fontSize: "var(--logo-size)" }} />
          <h1>GamerTech</h1>
        </Link>
        <div className="btns">
          <ToggleButton />
          {location && location.pathname !== "/cart" ? (
            <Link to="/cart">
              <Badge icon={<UilShoppingCart />} count={1} />
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
};

// Exporting the Navbar component
export default Navbar;
