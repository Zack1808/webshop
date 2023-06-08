import React from "react";

// Importing the context
import { useProducts } from "../../../context/productsContext";

// Importing the costume components
import ProductItem from "./ProductItem/ProductItem";

// Importing the style file
import "./ProductList.css";

// Creating the ProductList component
const ProductList = () => {
  // Setting up the context
  const products = useProducts();

  return (
    <div className="product-list-container">
      {products &&
        products.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
    </div>
  );
};

// Exporting the ProductList component
export default ProductList;
