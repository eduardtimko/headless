//Core
import strapiGraphQLClient from "../index";

//GraphQl
import queryCrossSell from "./gql/query.graphql";

export async function crossSellById(id) {
  const variables = {
    id,
  };

  return await strapiGraphQLClient.request(queryCrossSell, variables);
}
