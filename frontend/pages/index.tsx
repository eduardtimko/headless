//Core
import PageHome from "../components/Pages/PageHome"

//GraphQL
import { initializeApollo } from "../services/apollo/instance"
import queryHomePage from "../components/Pages/PageHome/gql/queryHomePage.graphql"

//TypeScript
import { HomePage } from "../generated"

// @ts-ignore
const Home: ({ homePage }: { homePage: HomePage }) => JSX.Element = ({
  homePage,
}) => {
  return <PageHome components={homePage.components} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()
  const home = await apolloClient.query({
    query: queryHomePage,
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      homePage: home.data.homePage,
    },
  }
}

export default Home
