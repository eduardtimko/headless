//Core
import { useState } from "react"
import useDidMountEffect from "../../../hooks/useDidMountEffect"

//GraphGl
import querySeoText from "./gql/query.graphql"
import { useLazyQuery } from "@apollo/client"

//TypeScript
import { SeoText, ComponentUiSeoText } from "../../../generated"

type TSeoTextResponse = {
  seoText: ComponentUiSeoText
}

type TSeoTextVars = {
  id: String
}

type TSeoTextData = {
  title: String
  description: String
}

export const useSeoText = (props: SeoText) => {
  const [response, setResponse] = useState<TSeoTextData>(props)
  const [seoTextCallback, { data, loading }] = useLazyQuery<
    TSeoTextResponse,
    TSeoTextVars
  >(querySeoText)

  useDidMountEffect(() => {
    data && setResponse(data.seoText.seoText.data.attributes)
  }, [data])

  const handleUpdate = () => {
    seoTextCallback({
      variables: {
        id: "2",
      },
    })
  }

  return {
    title: response.title,
    description: response.description,
    isUpdate: !!data,
    handleUpdate,
    loading,
  }
}
