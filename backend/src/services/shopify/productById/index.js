//Core
import shopifyGraphQLClient from "../index";

//GraphGl
import queryProductById from "./gql/query.graphql";

export async function productById(id, country) {
  const variables = {
    id,
    country,
  };
  return await shopifyGraphQLClient.request(queryProductById, variables);
}
