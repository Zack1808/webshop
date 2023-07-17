import React, { useState, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";

// Importing the fetching function
import { fetchProducts, fetchSearchedProduct } from "../api/fetchProduct";

// Creating the context
const ProductsContext = React.createContext();
const searchProductContext = React.createContext();
const sortProductContext = React.createContext();

// Exporting the hooks for accessing the context
export const useProducts = () => {
  return useContext(ProductsContext);
};

export const useSearchProduct = () => {
  return useContext(searchProductContext);
};

export const useSort = () => {
  return useContext(sortProductContext);
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

      fetchProducts(setProducts, id, sort);
    }
  }, [location]);

  // Function taht will fetch the searched Product
  const search = (query) => {
    fetchSearchedProduct(query, setProducts, sort);
  };

  // Function that will sort the products
  const sort = (asc) => {
    asc
      ? setProducts((prevState) => {
          prevState.sort((a, b) => (a.price.raw > b.price.raw ? 1 : -1));
          return [...prevState];
        })
      : setProducts((prevState) => {
          prevState.sort((a, b) => (a.price.raw < b.price.raw ? 1 : -1));
          return [...prevState];
        });
  };

  // Returning the context
  return (
    <ProductsContext.Provider value={products}>
      <sortProductContext.Provider value={sort}>
        <searchProductContext.Provider value={search}>
          {children}
        </searchProductContext.Provider>
      </sortProductContext.Provider>
    </ProductsContext.Provider>
  );
};
