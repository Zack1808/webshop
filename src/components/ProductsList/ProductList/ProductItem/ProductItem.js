import React from "react";

// Importing the style file
import "./ProductItem.css";

// Creating the ProductItem component
const ProductItem = ({ product }) => {
  return (
    <div className="product-item-container">
      <img src={product.image.url} alt="" />
    </div>
  );
};

// Exporting the ProductItem component
export default ProductItem;
