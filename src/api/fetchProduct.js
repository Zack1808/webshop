import { commerce } from "./commerceInit";

// Function that will fetch the items from the selected category
export const fetchProduct = async (setProducts, id, sort) => {
  const { data } = await commerce.products.list({
    category_id: id,
    limit: 50,
  });
  setProducts(data);
  sort(true);
};
