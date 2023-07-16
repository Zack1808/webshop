import { commerce } from "./commerceInit";

// Fetching the shiping countries
export const fetchShippingCountries = async (token, setShippingCountries) => {
  const { countries } = await commerce.services.localeListShippingCountries(
    token.id
  );
  setShippingCountries(
    Object.entries(countries).map(([code, name]) => ({
      id: code,
      label: name,
    }))
  );
};

// Fetching the subdivisions
export const fetchSubdivisions = async (country, setSubdivision) => {
  const { subdivisions } = await commerce.services.localeListSubdivisions(
    country
  );
  setSubdivision(
    Object.entries(subdivisions).map(([code, name]) => ({
      id: code,
      label: name,
    }))
  );
};

// Fetching the shipping options
export const fetchOptions = async (token, country, region, setOptions) => {
  const options = await commerce.checkout.getShippingOptions(token.id, {
    country,
    region,
  });
  setOptions(
    options.map((option) => ({
      id: option.id,
      label: `${option.description} - ${option.price.formatted_with_symbol}`,
    }))
  );
};
