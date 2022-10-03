//Core
import { FC } from "react"
import { listComponents } from "../index"

//TypeScript
import { HomepageComponentsDynamicZone } from "../../generated"

type DynamicComponent = {
  components: Array<HomepageComponentsDynamicZone>
}

const DynamicComponent: FC<DynamicComponent> = ({ components }) => {
  return (
    <>
      {components.map((item) => {
        const DynamicComponent = listComponents[Object.keys(item)[1]]
        const componentData = {
          id: item[Object.keys(item)[1]]?.data.id,
          ...item[Object.keys(item)[1]]?.data.attributes,
        }
        return DynamicComponent && componentData ? (
          <DynamicComponent key={Object.keys(item)[1]} {...componentData} />
        ) : null
      })}
    </>
  )
}

export default DynamicComponent
