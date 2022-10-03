//Core
import { ApolloClient, NormalizedCacheObject } from "@apollo/client"
import link from "../link"
import cache from "../cache"

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link,
    cache,
  })
}

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined

export function initializeApollo(initialState = null) {
  const _apolloClient = apolloClient ?? createApolloClient()
  if (initialState) {
    const existingCache = _apolloClient.extract()
    _apolloClient.cache.restore({ ...existingCache, ...initialState })
  }

  if (typeof window === "undefined") return _apolloClient

  if (!apolloClient) apolloClient = _apolloClient
  return _apolloClient
}
