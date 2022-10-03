//Core
import strapiGraphQLClient from '../index';

//GraphGl
import querySeoTextById from './gql/query.graphql';

export async function seoTextById(id) {
  const variables = {
    id,
  };

  return await strapiGraphQLClient.request(querySeoTextById, variables);
}
