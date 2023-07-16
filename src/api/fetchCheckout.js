import { commerce } from "./commerceInit";
import { ACTIONS, cartReducer } from "../reducers/cartReducer";

// Function that will handle the checkout
export const fetchCheckout = async (
  tokenId,
  newOrder,
  setErr,
  setOrder,
  setCart
) => {
  try {
    setOrder(await commerce.checkout.capture(tokenId, newOrder));
    cartReducer(ACTIONS.REFRESH, setCart);
  } catch (err) {
    setErr(err.data.error.message);
  }
};
