import axios from "axios"
import getConfigToken from "../utils/getConfigToken"
import { getAllProductsCartThunk } from "../store/slices/cart.slice"
import { useDispatch } from "react-redux"
import { useState } from "react"


const URL_BASE = import.meta.env.VITE_REACT_APP_URL
const url = `${URL_BASE}/purchase`

const usePurchases = () => {

const dispatch = useDispatch()
const [purchases, setPurchases] = useState()


    const buyThisCart = () => {

   axios.post(url, {}, getConfigToken())
   .then(res => {
console.log(res.data);
   dispatch( getAllProductsCartThunk())
})
   .catch(err => console.log(err))
    }

    const getAllProductsPurchased = () => {
axios.get(url, getConfigToken())
.then(res => setPurchases(res.data))
.catch(err => console.log(err))
    }

    return { purchases,buyThisCart, getAllProductsPurchased}

}

export default usePurchases