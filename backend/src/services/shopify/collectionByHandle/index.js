//Core
import shopifyGraphQLClient from "../index";

//GraphGL
import queryCollectionByHandle from "../collectionByHandle/gql/query.graphql";

export async function collectionByHandle({ handle, productsCount, country }) {
  const variables = {
    handle,
    productsCount,
    country,
  };

  const data = await shopifyGraphQLClient.request(
    queryCollectionByHandle,
    variables
  );

  const { title, description, products } = data.collection;
  return {
    title,
    description,
    products,
  };
}
