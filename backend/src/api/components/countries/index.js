//Shopify
import { countries } from "../../../services/shopify/countries";

export const getCountries = async () => {
  return await countries();
};
