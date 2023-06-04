import React from "react";
import { useInView } from "react-intersection-observer";

// Importing the style file
import "./CategoryItem.css";

// Creating the CategoryItem component
const CategoryItem = ({ category }) => {
  // Setting up the intersection observer
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`category-item-container ${inView ? "visible" : ""}`}
    >
      <img src={category.assets[0].url} alt="" />
      <h2>{category.name}</h2>
      <button>Check it out</button>
    </div>
  );
};

// Exporting the CategoryItem component
export default CategoryItem;
