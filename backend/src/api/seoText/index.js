//Strapi
import { seoTextById } from "../../services/strapi/SeoText";
import produce from "immer";

export const seoText = async (_, { id }) => {
  return await seoTextById(id);
};
