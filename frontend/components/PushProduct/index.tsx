//Core
import { FC } from "react"
import { usePushProduct } from "./hooks/usePushProduct"

//TypeScript
import { PushProduct } from "../../generated"

const PushProduct: FC<PushProduct> = ({ id, shopify, title }) => {
  const { product, loadMore, loading } = usePushProduct(id, shopify)

  return (
    <>
      {title && <h2>{title}</h2>}
      <ul>
        <li key={product.handle}>
          {product.media && (
            <div>
              <img
                width={200}
                src={product.media.edges[0].node.image.url}
                alt=""
              />
            </div>
          )}
          <p>
            {product.title} <em>{product.handle}</em>
          </p>
          {product.description && <p>{product.description}</p>}
          {product.priceRange && (
            <p>
              {product.priceRange.minVariantPrice.amount}
              {product.priceRange.minVariantPrice.currencyCode}
            </p>
          )}
        </li>
      </ul>
      {!product.media && (
        <button onClick={loadMore}>{loading ? "Loading" : "Change"}</button>
      )}
      <hr />
    </>
  )
}

export default PushProduct
