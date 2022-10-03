//Core
import { ApolloProvider } from "@apollo/client"
import { useApollo } from "../hooks/useApollo"
import CountryToggle from "../components/CountryToggle"
import { useEffect, useLayoutEffect } from "react"
import { countryCode } from "../services/apollo/cache/vars"

//TypeScript
import type { AppProps } from "next/app"

//Style
import "../styles/global.css"

const App = ({ Component, pageProps }: AppProps) => {
  const apolloClient = useApollo(pageProps.initialApolloState)
  return (
    <ApolloProvider client={apolloClient}>
      <CountryToggle />
      <hr />
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default App
