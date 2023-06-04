import React from "react";

// Importing the style file
import "./CategoryItem.css";

// Creating the CategoryItem component
const CategoryItem = ({ category }) => {
  return (
    <div className="category-item-container">
      <img src={category.assets[0].url} alt="" />
      <h2>{category.name}</h2>
      <button>Check it out</button>
    </div>
  );
};

// Exporting the CategoryItem component
export default CategoryItem;
