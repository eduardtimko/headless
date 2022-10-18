//Core
import shopifyGraphQLClient from "../index";

//GraphGL
import queryCountries from "./gql/query.graphql";

export async function countries() {
  const data = await shopifyGraphQLClient.request(queryCountries);

  const { availableCountries, country } = data.localization;
  return {
    availableCountries,
    country,
  };
}
