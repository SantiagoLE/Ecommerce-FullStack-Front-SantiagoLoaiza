import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { useEffect } from 'react'
import { getAllProductsThunk } from './store/slices/products.slice'
import { useDispatch } from 'react-redux'
import Header from './components/shared/Header'
import ProductId from './pages/ProductId'
import Register from './pages/Register'
import Login from './pages/Login'
import Cart from './pages/Cart'
import Purchases from './pages/Purchases'
import ProtectedRoutes from './pages/ProtectedRoutes'

//  PAGINA REFERENCIA: https://dashing-puppy-89779d.netlify.app

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProductsThunk())
  }, [])




  return (
    < div className='App'>
      <Header />
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/product/:id' element={<ProductId />} />

        <Route element={<ProtectedRoutes/>}>
        <Route path='/cart' element={<Cart />} />
        <Route path='/purchases' element={<Purchases />} />
        </Route>
       
      </Routes>



    </div>
  )
}

export default App
