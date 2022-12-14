//Query
import { queries as apiQueries } from "../api/queries";

export const resolvers = {
  HomepageComponentsDynamicZone: {
    __resolveType(obj) {
      if (obj["crossSell"]) {
        return "ComponentUiCrossSell";
      }
      if (obj["pushProduct"]) {
        return "ComponentUiPushProduct";
      }
      if (obj["seoText"]) {
        return "ComponentUiSeoText";
      }
      return null;
    },
  },
  Query: {
    ...apiQueries,
  },
};
