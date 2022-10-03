import { InMemoryCache } from "@apollo/client"
import { countryCode } from "./vars";

const cache = new InMemoryCache({
  typePolicies: {
    CrossSellEntity: {
      keyFields: false,
    },
    PushProductEntity: {
      keyFields: false,
    },
    Query: {
      fields: {
        countryCode: {
          read() {
            return countryCode()
          },
        },
      },
    },
  },
})

export default cache;
