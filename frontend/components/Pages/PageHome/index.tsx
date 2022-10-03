//Core
import { FC } from "react"
import DynamicComponent from "../../DynamicComponent"

//TypeScript
import { HomepageComponentsDynamicZone, Maybe } from "../../../generated"

type TComponents = {
  components?: Maybe<Array<Maybe<HomepageComponentsDynamicZone>>>
}

const PageHome: FC<TComponents> = ({ components }) => {
  return <DynamicComponent components={components} />
}

export default PageHome
