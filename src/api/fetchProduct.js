import { commerce } from "./commerceInit";

// Function that will fetch the items from the selected category
export const fetchProducts = async (setProducts, id, sort) => {
  const { data } = await commerce.products.list({
    category_id: id,
    limit: 50,
  });
  setProducts(data);
  sort(true);
};

// Fetching the information for a specific product
export const fetchProduct = async (setProduct, id) => {
  setProduct(await commerce.products.retrieve(id));
};
