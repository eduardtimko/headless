import { GraphQLClient } from "graphql-request";

const endpoint =
  "https://eduard-development-store.myshopify.com/api/unstable/graphql.json";
const shopifyGraphQLClient = new GraphQLClient(endpoint, {
  headers: {
    "X-Shopify-Storefront-Access-Token": "645f9b89fefa8dd66c890479fea4bf8e",
  },
});

export default shopifyGraphQLClient;
