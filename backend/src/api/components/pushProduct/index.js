//Core
import produce from "immer";

//Shopify
import { pushProductById } from "../../../services/strapi/PushProduct";

//Shopify
import { productById } from "../../../services/shopify/productById";

export const pushProduct = async (_, { id, country }) => {
  const data = await pushProductById(id);
  const { productId } = data.pushProduct.data.attributes;
  return produce(data, async (draftState) => {
    draftState.pushProduct.data.attributes.shopify = await productById(
      productId,
      country
    );
  });
};
