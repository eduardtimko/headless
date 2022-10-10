//Core
import produce from "immer";

//Strapi
import { crossSellById } from "../../services/strapi/CrossSell";

//Shopify
import { collectionByHandle } from "../../services/shopify/collectionByHandle";

export const crossSell = async (_, { id, count, country }) => {
  const data = await crossSellById(id);
  const { handle, default_count } = data.crossSell.data.attributes;
  return produce(data, async (draftState) => {
    draftState.crossSell.data.attributes.shopify = await collectionByHandle({
      handle,
      productsCount: count ? count : default_count,
      country,
    });
  });
};
