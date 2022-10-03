//Core
import strapiGraphQLClient from "../index";

//GraphQl
import queryPushProductById from "./gql/query.graphql";

export async function pushProductById(id) {
  const variables = {
    id,
  };

  return await strapiGraphQLClient.request(queryPushProductById, variables);
}
