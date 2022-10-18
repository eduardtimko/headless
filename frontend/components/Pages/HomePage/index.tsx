//Core
import { FC } from "react"
import DynamicComponent from "../../DynamicComponent"

//TypeScript
import { HomepageComponentsDynamicZone, Maybe } from "../../../generated"

type TComponents = {
  components?: Maybe<Array<Maybe<HomepageComponentsDynamicZone>>>
}

const HomePage: FC<TComponents> = ({ components }) => {
  return <DynamicComponent components={components} />
}

export default HomePage
