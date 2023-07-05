import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import ProductIdInfo from '../components/productId/ProductIdInfo'
import SliderImgs from '../components/productId/SliderImgs'
import SimilarProducts from '../components/productId/SimilarProducts'
import "./styles/productId.css"

const ProductId = () => {
  const { id } = useParams()


  const URL_BASE = import.meta.env.VITE_REACT_APP_URL
  const url = `${URL_BASE}/products/${id}`

  const [product, getProductById] = useFetch(url)

  useEffect(() => {
    getProductById()
  }, [url])


  return (
    <div className='productId'>
      <div className='SliderImgs'>
        <SliderImgs product={product} />
      </div>
      <div className='ProductIdInfo'>
        <ProductIdInfo product={product} />
      </div>
      <div className='SimilarProducts'>
        <SimilarProducts product={product} />
      </div>
    </div>
  )
}


export default ProductId