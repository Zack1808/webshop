import { commerce } from "./commerceInit";

// Function that will generate the token
export const generateToken = async (cart, setToken) => {
  try {
    setToken(await commerce.checkout.generateToken(cart.id, { type: "cart" }));
  } catch (err) {
    console.log(err);
  }
};
