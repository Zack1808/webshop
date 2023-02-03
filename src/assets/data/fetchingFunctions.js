import { commerce } from "../../api/commerceInit";

// importing helper functions
import { sortProducts } from "./helperFunctions";

// Function that will fetch all awailable categories
export const fetchCategories = async (setCategories) => {
  const { data } = await commerce.categories.list();
  setCategories(data);
};

// Function that will fetch all the products that have the selected category
export const fetchProducts = async (id, setProducts) => {
  let { data } = await commerce.products.list({
    category_id: id,
    limit: 30,
  });
  data = sortProducts(true, data);
  setProducts(data);
};

// Function that will fetch only one product according to it's id
export const fetchProduct = async (id, setProduct) => {
  const product = await commerce.products.retrieve(id);
  setProduct(product);
};

// Function that will fetch the products according to the search term
export const fetchSearcedProducts = async (query, setProducts) => {
  const product = await commerce.products.list({ query });
  console.log(product);
  setProducts(product);
};

// Function that will fetch the subcategories
export const fetchSubCategories = (id, categories) => {
  if (id) {
    let index;
    for (var i = 0; i < categories.length; i++) {
      if (categories[i].id === id) index = i;
    }
    return categories[index].children;
  }
  return [];
};

// Function that will retreive how many products are in a category
export const fetchCategoryProductCount = async (slug, setAmount) => {
  const { meta } = await commerce.products.list({
    category_slug: slug,
  });
  setAmount(meta.pagination.total);
};

// Function that will retreive the cart
export const fetchCart = async (setCart) => {
  setCart(await commerce.cart.retrieve());
};

// Function that will generate the cart token
export const generateToken = async (cart, setToken) => {
  try {
    const token = await commerce.checkout.generateToken(cart.id, {
      type: "cart",
    });
    setToken(token);
  } catch (error) {
    console.log(error);
  }
};

// Function that will fetch all the sipping countries
export const fetchShippingContries = async (
  token,
  setShippingCountries,
  setShippingCountry
) => {
  const { countries } = await commerce.services.localeListShippingCountries(
    token.id
  );
  setShippingCountries(countries);
  setShippingCountry(Object.keys(countries)[0]);
};

// Function that will fetch all the subdivisions or states of the selected country
export const fetchSubDivisions = async (
  country,
  setShippingRegions,
  setShippingRegion
) => {
  const { subdivisions } = await commerce.services.localeListSubdivisions(
    country
  );
  setShippingRegions(subdivisions);
  setShippingRegion(Object.keys(subdivisions)[0]);
};

// Function that will fetch the shipping option for the country/region
export const fetchShippingOptions = async (
  token,
  country,
  region,
  setShippingOptions,
  setShippingOption
) => {
  const options = await commerce.checkout.getShippingOptions(token.id, {
    country,
    region,
  });
  setShippingOptions(options);
  setShippingOption(options[0].id);
};
