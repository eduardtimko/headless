//Core
import HomePage from "../components/Pages/HomePage"

//GraphQL
import { initializeApollo } from "../services/apollo/instance"
import queryHomePage from "../components/Pages/HomePage/gql/queryHomePage.graphql"

//TypeScript
import { HomePage as THomePage } from "../generated"

const Home: ({ homePage }: { homePage: THomePage }) => JSX.Element = ({
  homePage,
}) => {
  return <HomePage components={homePage.components} />
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
