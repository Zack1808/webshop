import { commerce } from "./commerceInit";

// Function that will fetch the categories
export const fetchCategories = async (setCategories) => {
  const { data } = await commerce.categories.list();
  setCategories(data);
};
