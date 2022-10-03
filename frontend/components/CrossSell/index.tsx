//Core
import { FC, Fragment, useCallback } from "react"
import { useCrossSell } from "./hooks/useCrossSell"

//TypeScript
import { CrossSell } from "../../generated"

const CrossSell: FC<CrossSell> = ({ id, shopify, title }) => {
  const { products, loadingProducts, loading, setLoading } = useCrossSell(
    id,
    shopify
  )
  const handleLoading = useCallback(() => {
    setLoading(true)
    loadingProducts(products.edges.length + 1)
  }, [products])

  return (
    <>
      {title && <h2>{title}</h2>}
      <ul>
        {products.edges.map(({ node }, index) => {
          return (
            <Fragment key={`${node.handle}_${index}`}>
              <li>
                <div>
                  <div>
                    <img
                      width={200}
                      src={node.media.edges[0].node.image.url}
                      alt=""
                    />
                  </div>
                  <p>{node.title}</p>
                  <p>{node.description}</p>
                  <p>
                    {node.priceRange.minVariantPrice.amount}
                    {node.priceRange.minVariantPrice.currencyCode}
                  </p>
                </div>
              </li>
            </Fragment>
          )
        })}
      </ul>
      {products.pageInfo.hasNextPage && (
        <button onClick={handleLoading}>
          {loading ? "Loading" : "Load more"}
        </button>
      )}
      <hr />
    </>
  )
}

export default CrossSell
