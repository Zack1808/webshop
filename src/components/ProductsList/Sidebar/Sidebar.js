import React from "react";
import { useInView } from "react-intersection-observer";

// Importing the style file
import "./Sidebar.css";

// Creating the Sidebar component
const Sidebar = () => {
  // Creating the intersection observer reference
  const [ref, inView] = useInView();

  return (
    <div ref={ref} className={`sidebar-container ${inView ? "visible" : ""}`}>
      <h3>Categories</h3>
      <h3>Sort by price</h3>
    </div>
  );
};

// Exporting the Sidebar component
export default Sidebar;
