import React from "react";
import { useInView } from "react-intersection-observer";

// Importing costume components
import Button from "../../../Button/Button";

// Importing the style file
import "./ProductItem.css";

// Creating the ProductItem component
const ProductItem = ({ product }) => {
  // Setting up the intersection observer
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      className={`product-item-container ${inView ? "visible" : "  "}`}
    >
      <img src={product.image.url} alt="" />
      <h2>{product.name}</h2>
      <div className="price-tag">
        <h4>Price</h4>
        <p>{product.price.formatted_with_symbol}</p>
      </div>
      <div className="buttons">
        <Button
          text="Read more"
          type="page-link"
          link={`/product/${product.id}`}
        />
        {product.inventory.available > 0 && <Button text="Add to cart" />}
      </div>
    </div>
  );
};

// Exporting the ProductItem component
export default ProductItem;
