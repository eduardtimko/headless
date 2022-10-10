//Query
import { pageQueries } from "../api/pages/pageQueries";
import { componentQueries } from "../api/components/componentQueries";

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
    ...pageQueries,
    ...componentQueries
  },
};
