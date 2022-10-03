import { GraphQLClient } from "graphql-request";

const endpoint = "http://localhost:1337/graphql";
const strapiGraphQLClient = new GraphQLClient(endpoint);

export default strapiGraphQLClient;
