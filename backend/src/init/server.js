// Core
import { ApolloServer } from "apollo-server";

// Schema Types
import schema from "./types.graphql";

// Resolvers
import { resolvers } from "./resolvers";

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
});

export { server };
