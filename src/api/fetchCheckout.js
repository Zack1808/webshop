import { commerce } from "./commerceInit";
import { ACTIONS } from "../reducers/cartReducer";

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
    setCart(ACTIONS.REFRESH);
  } catch (err) {
    setErr(err.data.error.message);
  }
};
