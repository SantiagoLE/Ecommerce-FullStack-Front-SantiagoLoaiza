import React from 'react'
import "./styles/productPurchase.css"

const ProductPurchase = ({ prodPurchase }) => {


  return (
    <article className='product_purchase'>
      {/* <img className='Product_img' src={prodPurchase.product.images[0].url} alt={prodPurchase.product.title} /> */}
      <img className='Product_img' src={prodPurchase.product?.productImgs[0].url} alt={prodPurchase.product.title} />
      <h3 className='product_title'>{prodPurchase.product.title}</h3>
      <div className='product_info'>
        <p className='product_quantity-title'>Quantity: <span className='product_quantity'>{prodPurchase.quantity}</span> </p>
        <p className='product_totalPrice-title'>Price: <span className='product_totalPrice'>{prodPurchase.quantity * prodPurchase.product.price}</span> </p>
      </div>

    </article>
  )
}

export default ProductPurchase