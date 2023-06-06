import React from "react";
import { UilCopyright } from "@iconscout/react-unicons";

// Importing the style file
import "./Footer.css";

// Creating the Footer component
const Footer = () => {
  return (
    <div className="footer-container">
      <UilCopyright /> &nbsp; Jean-Pierre Novak, 2023-{new Date().getFullYear()}
    </div>
  );
};

// Exporting the Footer component
export default Footer;
