import axios from "axios"
import getConfigToken from "../utils/getConfigToken"
import { getAllProductsCartThunk } from "../store/slices/cart.slice"
import { useDispatch } from "react-redux"

const useCrudCart = () => {

    const dispatch = useDispatch()


    const addProductToCart = data => {
        const URL_BASE = import.meta.env.VITE_REACT_APP_URL
        const url = `${URL_BASE}/cart`

        axios.post(url, data, getConfigToken())
            .then(res => {
                console.log(res.data)
                dispatch(getAllProductsCartThunk())
            })
            .catch(err => {
                console.log(err)
                if (err?.response?.data?.error === "Product already added to cart") {
                    // ejecutar update
                }
            })
    }

    const deleteProductFromCart = id => {
        const URL_BASE = import.meta.env.VITE_REACT_APP_URL
        const url = `${URL_BASE}/cart/${id}`

        axios.delete(url, getConfigToken())
            .then(res => {
                console.log(res.data)
                dispatch(getAllProductsCartThunk())
            })
            .catch(err => console.log(err))
    }

    const updateProductInCart = (id, data) => {
        const URL_BASE = import.meta.env.VITE_REACT_APP_URL
        const url = `${URL_BASE}/cart/${id}`

        axios.put(url, data, getConfigToken())
            .then(res => {
                console.log(res.data)
                dispatch(getAllProductsCartThunk())
            })
            .catch(err => console.log(err))
    }




    return { addProductToCart, deleteProductFromCart, updateProductInCart }

}

export default useCrudCart