import React from "react";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import { Link, useLocation } from "react-router-dom";
import { UilShoppingCart } from "@iconscout/react-unicons";

// Importing the costume components
import ToggleButton from "./ToggleButton/ToggleButton";
import SearchBar from "../SearchBar/Searchbar";

// Importing the context
import { useCart } from "../../context/cartContext";

// Importing the style file
import "./Navbar.css";
import Badge from "./Badge/Badge";

// Creating the Navbar component
const Navbar = () => {
  // Setting up the location hook
  const location = useLocation();

  // Setting up the context
  const cart = useCart();

  return (
    <>
      <div className="navbar-container">
        <div className="container">
          <Link to="/" className="logo">
            <VideogameAssetIcon sx={{ fontSize: "var(--logo-size)" }} />
            <h1>GamerTech</h1>
          </Link>
          <div className="btns">
            <ToggleButton />
            {location &&
            location.pathname !== "/cart" &&
            !location.pathname.includes("/checkout") ? (
              <Link to="/cart">
                <Badge
                  icon={<UilShoppingCart />}
                  count={cart && cart.total_items}
                />
              </Link>
            ) : null}
          </div>
        </div>
      </div>
      {!location.pathname.includes("/checkout") && <SearchBar />}
    </>
  );
};

// Exporting the Navbar component
export default Navbar;
