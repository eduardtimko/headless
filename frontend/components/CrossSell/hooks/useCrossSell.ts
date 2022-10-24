//Core
import { useCallback, useState } from "react"
import useDidMountEffect from "../../../hooks/useDidMountEffect"
import useCountry from "../../../hooks/useCountry"

//GraphGl
import { useLazyQuery } from "@apollo/client"
import queryCrossSell from "./gql/query.graphql"

//TypeScript
import { CollectionByHandle, ComponentUiCrossSell } from "../../../generated"

type TCrossSellResponse = {
  crossSell: ComponentUiCrossSell
}

type TCrossSellVars = {
  id: String
  count?: number
  country: String
}

export const useCrossSell = (id: string, shopify: CollectionByHandle) => {
  const { countryCode } = useCountry()
  const [products, setProducts] = useState(shopify.products)
  const [loading, setLoading] = useState(false)
  const [crossSellCallBack, { data }] = useLazyQuery<
    TCrossSellResponse,
    TCrossSellVars
  >(queryCrossSell)

  useDidMountEffect(() => {
    loadingProducts(products.edges.length)
  }, [countryCode])

  useDidMountEffect(() => {
    if (!data) return
    setLoading(false)
    setProducts(data.crossSell.crossSell.data.attributes.shopify.products)
  }, [data])

  const loadingProducts = useCallback(
    (count) => {
      crossSellCallBack({
        variables: {
          id,
          count,
          country: countryCode,
        },
      })
    },
    [countryCode]
  )

  return {
    products,
    loadingProducts,
    loading,
    setLoading,
  }
}
