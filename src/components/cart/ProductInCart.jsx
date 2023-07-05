import React from 'react'
import useCrudCart from '../../hooks/useCrudCart';
import "./styles/productInCart.css"

const ProductInCart = ({prodCart}) => {

const {deleteProductFromCart} = useCrudCart()


  const handleDelete = () => {
    deleteProductFromCart(prodCart.id)
  }

  return (
    <article className='prodcart'>
<header className='prodcart_header'>
{/* <img className='prodcart_img' src={prodCart.product.images[0].url} alt={prodCart.product.title} /> */}
<img className='prodcart_img' src={prodCart?.product?.productImgs[0]?.url} alt={prodCart?.product.title} />

</header>

  <h3 className='prodcart_title'>{prodCart.product.title}</h3>
<button className='prodcart_delete' onClick={handleDelete}>
<i className='prodcart_delete-icon bx bx-trash'></i>
</button>
<footer className='prodcart_footer'>
  <span className='prodcart_quantity'>{prodCart.quantity}</span>
  <div className='prodcart_subtotal'>
    <span className='prodcart_subtotal-label'>Subtotal:</span>
    <span className='prodcart_subtotal-value'>{prodCart.quantity * prodCart.product.price}</span>
  </div>
</footer>
    </article>
  )
}

export default ProductInCart