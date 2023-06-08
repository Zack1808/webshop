import React from "react";

// Importing the costume components
import Loader from "../Loader/Loader";

// Importing the context
import { useProducts } from "../../context/productsContext";

// Importing the style file
import "./ProductsList.css";
import Sidebar from "./Sidebar/Sidebar";

// Creating the ProjectsList component
const ProductsList = () => {
  // Setting up the context
  const products = useProducts();

  return (
    <div className="projects-list-container">
      {products.length === 0 ? (
        <Loader />
      ) : (
        <>
          <Sidebar />
        </>
      )}
    </div>
  );
};

// Exporting the ProjectList component
export default ProductsList;
