import React from "react";

// Importing the costume components
import Loader from "../Loader/Loader";
import CartItemList from "./CartItemList/CartItemList";

// Importing the context
import { useCart } from "../../context/cartContext";

// Importing the style file
import "./Cart.css";

// Creating the Cart component
const Cart = () => {
  // Setting up the context
  const cart = useCart();

  return (
    <div className="cart-container">
      {cart.line_items ? (
        <>
          <CartItemList items={cart.line_items} />
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

// Exporting the Cart component
export default Cart;
