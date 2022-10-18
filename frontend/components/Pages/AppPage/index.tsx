//Core
import { FC } from "react"
import CountryToggle from "../../CountryToggle"
import { ApolloProvider } from "@apollo/client"
import { useApollo } from "../../../hooks/useApollo"

const AppPage: FC<any> = ({ pageProps, children }) => {
  const apolloClient = useApollo(pageProps.initialApolloState)
  return (
    <ApolloProvider client={apolloClient}>
      <CountryToggle
        country={pageProps.country}
        availableCountries={pageProps.availableCountries}
      />
      <hr />
      {children}
    </ApolloProvider>
  )
}

export default AppPage
