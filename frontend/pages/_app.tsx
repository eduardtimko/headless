//Core
import AppPage from "../components/Pages/AppPage"

//GraphGl
import { initializeApollo } from "../services/apollo/instance"
import queryCountries from "../components/Pages/AppPage/gql/queryCountries.graphql"

//TypeScript
import type { AppProps } from "next/app"

//Style
import "../styles/global.css"

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <AppPage pageProps={pageProps}>
      <Component {...pageProps} />
    </AppPage>
  )
}

App.getInitialProps = async () => {
  const apolloClient = initializeApollo()
  const { data } = await apolloClient.query({
    query: queryCountries,
  })
  return {
    pageProps: {
      country: data.getCountries.country,
      availableCountries: data.getCountries.availableCountries,
    },
  }
}

export default App
