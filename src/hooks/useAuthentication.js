import axios from "axios"
import { useState } from "react"

const useAutenthication = () => {

const [loginSuccessfull, setLoginSuccessfull] = useState(false)
const [loginError, setLoginError] = useState(false)

    const createNewUser = data => {
        const URL_BASE = import.meta.env.VITE_REACT_APP_URL
        const url = `${URL_BASE}/users`

        axios.post(url, data)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    }

    const loginUser = data => {
        const URL_BASE = import.meta.env.VITE_REACT_APP_URL
        const url = `${URL_BASE}/users/login`

        axios.post(url, data)
        .then(res => {
            setLoginSuccessfull(res.data)
            setLoginError(false)
            localStorage.setItem("token", res.data.token)
            const userFullName =  `${res.data.user.firstName} ${res.data.user.lastName}`
            localStorage.setItem("userFullName", userFullName)
           


          })
        .catch(err => {
            console.log(err)
            setLoginError(true)
            setTimeout(() => {
                setLoginError(false)
            }, 3000);
            
        localStorage.removeItem("token")
        localStorage.removeItem("userFullName")

        })
    }
return {createNewUser, loginUser, loginSuccessfull ,loginError}
}

export default useAutenthication