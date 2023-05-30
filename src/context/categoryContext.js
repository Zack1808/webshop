import React, { useState, useContext, useEffect } from "react";

// Importing the fetching function
import { fetchCategories } from "../api/fetchCategories";

// Creating the context
const CategoryContext = React.createContext();

// Exporting the hooks for accessing the context
export const useCategory = () => {
  return useContext(CategoryContext);
};

// Creating the context provider
export const CategoryProvider = ({ children }) => {
  // Setting up the state
  const [category, setCategory] = useState([]);

  // Fetching the categories onload
  useEffect(() => {
    fetchCategories(setCategory);

    // eslint-disable-next-line
  }, []);

  // Returning the context
  return (
    <CategoryContext.Provider value={category}>
      {children}
    </CategoryContext.Provider>
  );
};
