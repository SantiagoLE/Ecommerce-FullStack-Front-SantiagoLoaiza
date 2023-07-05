import React, { useState } from 'react'
import "./styles/productIdInfo.css"
import useCrudCart from '../../hooks/useCrudCart'

const ProductIdInfo = ({ product }) => {

    const [quantity, setQuantity] = useState(1)
    const {addProductToCart} = useCrudCart()

    const handlePlus = () => setQuantity(quantity + 1)
    const handleMinus = () => {
        if (quantity - 1 >= 1)
            setQuantity(quantity - 1)
    }

    const handleAddToCart = () => {
        const data = {
            quantity: quantity, // si propiedad y valor se llaman igual se puede poner solo el nombre y tomar el valor de forma automatica
            productId: product.id
        }
addProductToCart(data)
    }

    return (
        <section>
            <h3 className='productIdInfo_brnad'>{product?.brand}</h3>
            <h2 className='productIdInfo_title'>{product?.title}</h2>
            <p className='productIdInfo_paragraph'>{product?.description}</p>
            <footer className='productIdInfo_footer'>
                <div className='productIdInfo_price'>
                    <span className='productIdInfo_price-title'>Price</span>
                    <span className='productIdInfo_price-value'>$ {product?.price}</span>
                </div>
                <div className='productIdInfo_quantity'>
                    <span className='productIdInfo_quantity-title'>Quantity</span>
                    <div className='productIdInfo_quantity-btns'>
                        <button className='productIdInfo_btn-minus' onClick={handleMinus}>-</button>
                        <button className='productIdInfo_btn-quantity'>{quantity}</button>
                        <button className='productIdInfo_btn-add' onClick={handlePlus}>+</button>
                    </div>
                </div>
                <button className='productIdInfo_btn-cart' onClick={handleAddToCart}>Add to cart <i className='bx bx-cart btn_produtId'></i></button>
            </footer>
        </section>
    )
}

export default ProductIdInfo