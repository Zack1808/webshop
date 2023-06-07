import React, { useState, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";

// Importing the fetching function
import { fetchProduct } from "../api/fetchProduct";

// Creating the context
const ProductsContext = React.createContext();

// Exporting the hooks for accessing the context
export const useProducts = () => {
  return useContext(ProductsContext);
};

// Creating the context provider
export const ProductsProvider = ({ children }) => {
  // Setting up the state
  const [products, setProducts] = useState([]);
  const location = useLocation();

  // Running the function in case the url changes
  useEffect(() => {
    // Emptying the current list of products
    setProducts([]);

    // Getting the category_id located in the URL
    if (location && location.pathname.includes("/category")) {
      let id = location.pathname.slice(
        location.pathname.lastIndexOf("&") + 1,
        location.pathname.length
      );

      fetchProduct(setProducts, id);
    }
  }, [location]);

  // Returning the context
  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  );
};
