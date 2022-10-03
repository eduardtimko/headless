//Core
import { useCallback } from "react"
import { useQuery } from "@apollo/client"
import { countryCode } from "../../services/apollo/cache/vars"

//GraphGL
import queryCountryCode from "./gql/query.graphql"

const useCountry = () => {
  const { data } = useQuery(queryCountryCode)

  const toggleCountryCode = useCallback((value) => {
    countryCode(value)
  }, [])

  return {
    countryCode: data?.countryCode,
    toggleCountryCode,
  }
}

export default useCountry
