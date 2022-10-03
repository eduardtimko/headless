import { NormalizedCacheObject } from "@apollo/client"
import { useMemo } from "react"
import { initializeApollo } from "../../services/apollo/instance"

type InitialState = NormalizedCacheObject | undefined

interface IInitializeApollo {
  initialState?: InitialState | null
}

export function useApollo(initialState: IInitializeApollo) {
  return useMemo(() => initializeApollo(initialState), [initialState])
}
