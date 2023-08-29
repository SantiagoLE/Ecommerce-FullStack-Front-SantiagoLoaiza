import useCrudCart from "../../hooks/useCrudCart";
import "./styles/cardProduct.css"
import { useNavigate } from 'react-router-dom';

const CardProduct = ({ product }) => {

  const navigate = useNavigate()

  const { addProductToCart } = useCrudCart()

  const handleSelectProduct = () => {
    navigate(`/product/${product.id}`)
  }

  const handleBtnClick = e => {
    e.stopPropagation()
    const data = {
      quantity: 1,
      productId: product.id
    }

    addProductToCart(data)
  }


  return (
    <article onClick={handleSelectProduct} className='cardProduct'>
      <header className='cardProdcut_img_contain'>
        {/* <img className='cardProduct_img product_img1' src={product.images[0].url} alt={product.title} />
        <img className='cardProduct_img product_img2' src={product.images[1].url} alt={product.title} /> */}
        <img className='cardProduct_img product_img1' src={product?.productImgs[0].url} alt={product.title} />
        <img className='cardProduct_img product_img2' src={product?.productImgs[1].url} alt={product.title} />
      </header>
      <section className='cardProduct_section'>
        <h4 className='cardProduct_marca'>{product.brand}</h4>
        <h3 className='cardProduct_name'>{product.title}</h3>
      </section>
      <span className='cardProduct_price-title'>Price</span>
      <span className='cardProduct_price-value'>$ {product.price}</span>
      <button onClick={handleBtnClick} className='cardProduct_icon-cart'>
        <i className='bx bx-cart btn_cardProduct' ></i>
      </button>
    </article>
  )
}

export default CardProduct