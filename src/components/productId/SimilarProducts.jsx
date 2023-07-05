import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import CardProduct from '../home/CardProduct'
import "./styles/similarproduct.css"

const SimilarProducts = ({product}) => {

    const URL_BASE = import.meta.env.VITE_REACT_APP_URL
    const url = `${URL_BASE}/products?categoryId=${product?.categoryId}`
    
    const [filterProducts, getProductByCategory] = useFetch(url)

    useEffect(() => {
        if(product){
            getProductByCategory()
        }
     
    } , [url])

    
  return (
    <section >
        <h2 className='similarProducts_title'>Discover similar products</h2>
        <div className='similarProducts_items'>
{
    filterProducts?.map(prod => {
        if(prod.id !== product.id){
            return (
                <CardProduct 
                key={prod.id}
                product={prod}
                />
            )
        }
    })
}
        </div>
    </section>
  )
}

export default SimilarProducts