import axios from "axios"
import { useState } from "react"

const useFetch = (url) => {

const [apiInfo, setapiInfo] = useState()

const getApi = () => {
    axios.get(url)
    .then(res => setapiInfo(res.data) )
    .catch(err => console.log(err))
}
 
return [apiInfo, getApi]

}

export default useFetch