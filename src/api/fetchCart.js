import { commerce } from "./commerceInit";
import { toast } from "react-toastify";

// Function that will fetch the cart
export const fetchCart = async (setCart) => {
  setCart(await commerce.cart.retrieve());
};

// Function that will add an item to the cart
export const fetchAddingCart = async (id, setCart) => {
  setCart(await commerce.cart.add(id, 1));
  toast.success("Item added to cart", {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
};

// Function that will remove an item from the cart
export const fetchRemovingCart = async (id, setCart) => {
  const { response } = await commerce.cart.remove(id);
  setCart(response);
  toast.success("Item removed from cart", {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
};

// Function that will clear the cart
export const fetchClearCart = async (setCart) => {
  const { response } = await commerce.cart.empty();
  setCart(response);
  toast.success("Cart has been cleared", {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
};
