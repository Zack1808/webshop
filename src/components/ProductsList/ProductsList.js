import React from "react";

// Importing the costume components
import Loader from "../Loader/Loader";
import Sidebar from "./Sidebar/Sidebar";
import ProductList from "./ProductList/ProductList";

// Importing the context
import { useProducts } from "../../context/productsContext";
import { SubCategoryProvider } from "../../context/subCategoryContext";

// Importing the style file
import "./ProductsList.css";

// Creating the ProductsList component
const ProductsList = () => {
  // Setting up the context
  const products = useProducts();

  return (
    <div className="products-list-container">
      {products.length === 0 ? (
        <Loader />
      ) : (
        <SubCategoryProvider>
          <Sidebar />
          <ProductList />
        </SubCategoryProvider>
      )}
    </div>
  );
};

// Exporting the ProjectList component
export default ProductsList;
