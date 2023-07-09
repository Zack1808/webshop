import React, { useState, useContext, useEffect } from "react";

// Importing the fetching functions
import { fetchCart } from "../api/fetchCart";

// Importing the reducer
import { cartReducer } from "../reducers/cartReducer";

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
    cartReducer(update, id, setCart);
  };

  return (
    <CartContext.Provider value={cart}>
      <CartUpdateContext.Provider value={updateCart}>
        {children}
      </CartUpdateContext.Provider>
    </CartContext.Provider>
  );
};
