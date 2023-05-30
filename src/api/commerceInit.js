import Commerce from "@chec/commerce.js";

// Creating and exporting the instance to the Commerce.js database
export const commerce = new Commerce(
  process.env.REACT_APP_COMMERCE_API_KEY,
  true
);
