import React from "react";
import { useInView } from "react-intersection-observer";

// Importing the costume components
import Button from "../../../Button/Button";

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
      <Button
        type="page-link"
        link={`/category/${category.slug}&${category.id}`}
        text="Check it out"
      />
    </div>
  );
};

// Exporting the CategoryItem component
export default CategoryItem;
