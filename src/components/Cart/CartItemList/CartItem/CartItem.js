import React from "react";
import { useInView } from "react-intersection-observer";

// Importing the context
import { useUpdateCart } from "../../../../context/cartContext";

// Importing the costume components
import Button from "../../../Button/Button";

// Importing the style file
import "./CartItem.css";

// Creating the CartItem component
const CartItem = ({ item }) => {
  // Setting up the intersection observer
  const [ref, inView] = useInView();

  // Setting up the context
  const update = useUpdateCart();

  // Function that will remove item from the cart
  const remove = () => {
    update("REMOVE", item.product_id);
  };

  return (
    <div ref={ref} className={`cart-item-container ${inView ? "visible" : ""}`}>
      <img src={item.image.url} alt="" />
      <h2>{item.name}</h2>
      <div className="item-price">
        <h4>Price:</h4>
        <p>{item.price.formatted_with_symbol}</p>
      </div>
      <Button text="Remove from cart" click={remove} />
    </div>
  );
};

// Exporting the CartItem component
export default CartItem;
