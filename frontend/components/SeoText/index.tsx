//Core
import { FC } from "react"
import { useSeoText } from "./hooks/useSeoText"

//TypeScript
import { SeoText } from "../../generated"

const SeoText: FC<SeoText> = (props) => {
  const { title, description, isUpdate, handleUpdate, loading } =
    useSeoText(props)
  if (!description) return
  return (
    <>
      {title && <h2>{title}</h2>}
      <p>{description}</p>
      {!isUpdate && (
        <button onClick={handleUpdate}>{loading ? "Loading" : "Update"}</button>
      )}
    </>
  )
}

export default SeoText
