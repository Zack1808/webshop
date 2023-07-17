import React from "react";
import { useLocation } from "react-router-dom";

// Importing the costume components
import Loader from "../Loader/Loader";
import Sidebar from "./Sidebar/Sidebar";
import Button from "../Button/Button";
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

  // Setting up the  location
  const location = useLocation();

  console.log(products);

  return (
    <div className="products-list-container">
      {products.length === 0 ? (
        <Loader />
      ) : location && location.pathname.includes("/search") ? (
        products === "no items" ? (
          <div className="no-item-found">
            <h1>No Items found</h1>
            <p>We could not find what you were looking for</p>
            <Button type="page-link" link="/" text="Return to Home" />
          </div>
        ) : (
          <SubCategoryProvider>
            <Sidebar />
            <ProductList />
          </SubCategoryProvider>
        )
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
