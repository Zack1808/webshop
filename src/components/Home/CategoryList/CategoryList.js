import React from "react";

// Importing the context
import { useCategory } from "../../../context/categoryContext";

// Importing the costume components
import CategoryItem from "./CategoryItem/CategoryItem";

// Importing the style file
import "./CategoryList.css";

// Creating the CategoryList component
const CategoryList = () => {
  // Setting up the context
  const categories = useCategory();

  return (
    <div className="category-list-container">
      {categories.map((category) => (
        <CategoryItem category={category} key={category.id} />
      ))}
    </div>
  );
};

// Exporting the CategoryList component
export default CategoryList;
