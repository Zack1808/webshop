import React from "react";

// Importing the context
import { useCategory } from "../../context/categoryContext";

// Importing the style file
import "./Home.css";

// Creating the Home component
const Home = () => {
  // Setting up the context variables
  const categories = useCategory();

  return (
    <div className="home-container">
      {categories.length === 0 ? null : null}
    </div>
  );
};

// Exporting the Home component
export default Home;
