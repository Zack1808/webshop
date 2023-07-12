import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

// Importing the fetching function
import { fetchProduct } from "../../api/fetchProduct";

// Importing the costume components
import Carosel from "./Carosel/Carosel";
import Loader from "../Loader/Loader";

// Importing the style file
import "./ProductInfo.css";

// Creating the ProductInfo component
const ProductInfo = () => {
  // Setting up the state
  const [product, setProduct] = useState({});

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

  return (
    <div className="product-info-container">
      {product.assets ? (
        <div className="short-product-desc">
          <Carosel images={product.assets} />
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

// Exporting the ProductInfo
export default ProductInfo;
