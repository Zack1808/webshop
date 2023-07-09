import React from "react";

// Importing the style file
import "./Badge.css";

// Creating the Badge component
const Badge = ({ icon, count }) => {
  return (
    <div className="badge-container">
      {icon}
      {count && count > 0 ? <div className="badge-counter">{count}</div> : null}
    </div>
  );
};

// Exporting the component
export default Badge;
