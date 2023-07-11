import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

// Importing the fetching function
import { fetchProduct } from "../../api/fetchProduct";

// Creating the ProductInfo component
const ProductInfo = () => {
  // Setting up the state
  const [product, setProduct] = useState([]);

  // Setting up the location
  const location = useLocation();

  // Fetching the product
  useEffect(() => {
    if (location) {
      let id = location.pathname.slice(
        location.pathname.lastIndexOf("/") + 1,
        location.pathname.length
      );

      fetchProduct(setProduct, id);
    }

    // eslint-disable-next-line
  }, []);

  return <div className="product-info-container">{console.log(product)}</div>;
};

// Exporting the ProductInfo
export default ProductInfo;
