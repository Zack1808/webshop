import React from "react";

// Importing the context
import { useProducts } from "../../../context/productsContext";
import { useSubCategory } from "../../../context/subCategoryContext";

// Importing the costume components
import ProductItem from "./ProductItem/ProductItem";

// Importing the style file
import "./ProductList.css";

// Creating the ProductList component
const ProductList = () => {
  // Setting up the context
  const products = useProducts();
  const selected = useSubCategory();

  return (
    <div className="product-list-container">
      {selected.length === 0
        ? products &&
          products.map((product) => (
            <ProductItem product={product} key={product.id} />
          ))
        : products &&
          products.map((product) => {
            if (selected.includes(product.categories[1].slug))
              return <ProductItem product={product} key={product.id} />;
            return null;
          })}
    </div>
  );
};

// Exporting the ProductList component
export default ProductList;
