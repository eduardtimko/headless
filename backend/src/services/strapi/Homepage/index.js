//Core
import strapiGraphQLClient from "../index";

//GraphQl
import queryHomePage from "./gql/query.graphql";

export async function homepage() {
  const data = await strapiGraphQLClient.request(queryHomePage);
  return data.homepage.data.attributes.components;
}
