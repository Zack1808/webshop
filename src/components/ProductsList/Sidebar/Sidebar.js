import React, { useRef } from "react";
import { useInView } from "react-intersection-observer";

// Importing the style file
import "./Sidebar.css";

// Creating the Sidebar component
const Sidebar = () => {
  // Creating the intersection observer reference
  const [ref, inView] = useInView();

  // Setting up the ref
  const sideRef = useRef();

  return (
    <div
      ref={sideRef}
      className="sidebar"
      style={{
        "--top":
          sideRef.current && `${sideRef.current.getBoundingClientRect().y}px`,
      }}
    >
      <div ref={ref} className={`sidebar-container ${inView ? "visible" : ""}`}>
        <h3>Categories</h3>
        <h3>Sort by price</h3>
      </div>
    </div>
  );
};

// Exporting the Sidebar component
export default Sidebar;
