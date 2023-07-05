import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProductsCartThunk } from '../store/slices/cart.slice'
import ProductInCart from '../components/cart/ProductInCart'
import usePurchases from '../hooks/usePurchases'
import "./styles/cart.css"

const Cart = () => {

  const dispatch = useDispatch()

const {buyThisCart} = usePurchases()

  useEffect(() => {
    dispatch(getAllProductsCartThunk())
  }, [])

  const { cartGlobal } = useSelector(state => state)

  const totalPriceCart = cartGlobal?.reduce((acc, cv) => acc + cv.quantity * cv.product.price, 0)

  const handlePurchase = () => {
buyThisCart()
  }

  return (
    <div className='cart'>

      <h2 className='cart_title'> Cart</h2>

      <div className='cart_container'>
        {
          cartGlobal?.map(prodCart => (
            <ProductInCart
              key={prodCart.id}
              prodCart={prodCart}
            />

          ))
        }
      </div>

      <footer className='cart_footer'>
        <span className='cart_total-label'>Total:</span>
        <h3 className='cart_total-value'>{totalPriceCart}</h3>
        <button className='cart_btn' onClick={handlePurchase}>Buy now</button>
      </footer>
    </div>

  )

}

export default Cart