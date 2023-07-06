import React, { useContext, useState } from "react";

// Creating the context
const subCategoryContext = React.createContext();
const addSubCategoryContext = React.createContext();
const removeSubCategoryContext = React.createContext();

// Creating hooks for using the context
export const useSubCategory = () => {
  return useContext(subCategoryContext);
};

export const useAddSubCategory = () => {
  return useContext(addSubCategoryContext);
};

export const useRemoveSubCategory = () => {
  return useContext(removeSubCategoryContext);
};

// Creating the provider
export const SubCategoryProvider = ({ children }) => {
  // Setting up state
  const [subList, setSubList] = useState([]);

  // Function that will add the slug
  const add = (slug) => {
    if (subList.indexOf(slug)) setSubList((prevState) => [...prevState, slug]);
  };

  // Function that will remove the slug
  const remove = (slug) => {
    setSubList((prevState) => {
      prevState.splice(prevState.indexOf(slug), 1);
      return [...prevState];
    });
  };

  // Returning the context
  return (
    <subCategoryContext.Provider value={subList}>
      <addSubCategoryContext.Provider value={add}>
        <removeSubCategoryContext.Provider value={remove}>
          {children}
        </removeSubCategoryContext.Provider>
      </addSubCategoryContext.Provider>
    </subCategoryContext.Provider>
  );
};
