import React, { useState, useContext } from "react";

// Creating the context
const CategoryContext = React.createContext();
const CategoryUpdateContext = React.createContext();

// Exporting the hooks for accessing the context
export const useCategory = () => {
  return useContext(CategoryContext);
};

export const useCategoryUpdate = () => {
  return useContext(CategoryUpdateContext);
};

// Creating the context provider
export const CategoryProvider = ({ children }) => {
  // Setting up the state
  const [category, setCategory] = useState([]);

  // Function that will update the category list
  const update = (result) => {
    setCategory(result);
  };

  // Returning the context
  return (
    <CategoryContext.Provider value={category}>
      <CategoryUpdateContext.Provider value={update}>
        {children}
      </CategoryUpdateContext.Provider>
    </CategoryContext.Provider>
  );
};
