import React from "react";

// Importing the context
import { useCategory } from "../../context/categoryContext";

// Importing the costume components
import Loader from "../Loader/Loader";
import CategoryList from "./CategoryList/CategoryList";
import Newsteller from "./Newsteller/Newsteller";

// Importing the style file
import "./Home.css";

// Creating the Home component
const Home = () => {
  // Setting up the context variables
  const categories = useCategory();

  return (
    <div className="home-container">
      {categories.length === 0 ? (
        <Loader />
      ) : (
        <>
          <CategoryList />
          <Newsteller />
          {console.log(categories)}
        </>
      )}
    </div>
  );
};

// Exporting the Home component
export default Home;
