import React from "react";
import { Link } from "react-router-dom";

// Importing the costume components
import Loader from "../Loader/Loader";
import CartItemList from "./CartItemList/CartItemList";
import Sidebar from "./Sidebar/Sidebar";

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
        cart.line_items.length !== 0 ? (
          <>
            <CartItemList items={cart.line_items} />
            <Sidebar />
          </>
        ) : (
          <div className="cart-info">
            <h1>Your Cart is empty</h1>
            <p>
              No items are in your cart. <Link to="/">Return to Home</Link>
            </p>
          </div>
        )
      ) : (
        <Loader />
      )}
    </div>
  );
};

// Exporting the Cart component
export default Cart;
