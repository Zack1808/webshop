import React, { useState, useContext, useEffect } from "react";

// Importing the fetching functions
import {
  fetchCart,
  fetchAddingCart,
  fetchRemovingCart,
  fetchClearCart,
} from "../api/fetchCart";

// Creating the context
const CartContext = React.createContext();
const CartUpdateContext = React.createContext();

// Creating the hooks
export const useCart = () => {
  return useContext(CartContext);
};

export const useUpdateCart = () => {
  return useContext(CartUpdateContext);
};

// Creating the context provider
export const CartProvider = ({ children }) => {
  // Setting up the state
  const [cart, setCart] = useState({});

  // Fetching the cart
  useEffect(() => {
    fetchCart(setCart);

    // eslint-disable-next-line
  }, []);

  // Function that will handle the updates
  const updateCart = (update, id = "id") => {
    switch (update) {
      case "ADD":
        fetchAddingCart(id, setCart);
        break;
      case "REMOVE":
        fetchRemovingCart(id, setCart);
        break;
      case "CLEAR":
        fetchClearCart(setCart);
        break;
      default:
        break;
    }
  };

  return (
    <CartContext.Provider value={cart}>
      <CartUpdateContext.Provider value={updateCart}>
        {children}
      </CartUpdateContext.Provider>
    </CartContext.Provider>
  );
};
