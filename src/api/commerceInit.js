import Commerce from "@chec/commerce.js";

// Importing the API key
import { API_KEY } from "../data/data";

// Creating a new insatnce to the commercejs database
export const commerce = new Commerce(API_KEY, true);
