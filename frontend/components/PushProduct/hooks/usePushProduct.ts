//Core
import { useCallback, useState } from "react"
import useCountry from "../../../hooks/useCountry"
import useDidMountEffect from "../../../hooks/useDidMountEffect"

//GraphGl
import { useLazyQuery } from "@apollo/client"
import queryPushProduct from "./gql/query.graphql"

//TypeScript
import {
  ComponentUiPushProduct,
  Product,
  PushProductResponse,
} from "../../../generated"


type TPushProductResponse = {
  pushProduct: ComponentUiPushProduct
}

type TPushProductVars = {
  id: String
  country: String
}

export const usePushProduct = (id: string, shopify: PushProductResponse) => {
  const { countryCode } = useCountry()
  const [product, setProduct] = useState<Product>(shopify.product)
  const [pushProductCallback, { data, loading }] = useLazyQuery<
    TPushProductResponse,
    TPushProductVars
  >(queryPushProduct)

  useDidMountEffect(() => {
    data && loadMore()
  }, [countryCode])

  useDidMountEffect(() => {
    data &&
      setProduct(data.pushProduct.pushProduct.data.attributes.shopify.product)
  }, [data])

  const loadMore = useCallback(() => {
    pushProductCallback({
      variables: {
        id,
        country: countryCode,
      },
    })
  }, [countryCode])

  return { product, loadMore, loading }
}
