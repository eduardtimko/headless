//Core
import shopifyGraphQLClient from "../index";

//GraphGl
import queryProductsById from "./gql/query.graphql";

export async function productsById(ids) {
  const variables = {
    ids,
  };
  return await shopifyGraphQLClient.request(queryProductsById, variables);
}
