// Importing the fetching functions
import {
  fetchAddingCart,
  fetchRemovingCart,
  fetchClearCart,
} from "../api/fetchCart";

export const ACTIONS = {
  ADD_ITEM: "ADD",
  REMOVE_ITEM: "REMOVE",
  CLEAR_CART: "CLEAR",
};

// Creating the cart reducer
export const cartReducer = (update, id, setCart) => {
  switch (update) {
    case ACTIONS.ADD_ITEM:
      fetchAddingCart(id, setCart);
      break;
    case ACTIONS.REMOVE_ITEM:
      fetchRemovingCart(id, setCart);
      break;
    case ACTIONS.CLEAR_CART:
      fetchClearCart(setCart);
      break;
    default:
      break;
  }
};
