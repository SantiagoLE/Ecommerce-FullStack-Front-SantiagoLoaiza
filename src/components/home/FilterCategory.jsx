import React, { useEffect, useState } from 'react'
import useFetch from '../../hooks/useFetch'
import { getAllProductsThunk } from '../../store/slices/products.slice'
import { useDispatch } from 'react-redux'
import "./styles/filterCategory.css"
import { setFiltersCloseSlice } from '../../store/slices/filtersClose.slice'

const FilterCategory = () => {
    const URL_BASE = import.meta.env.VITE_REACT_APP_URL
    const url = `${URL_BASE}/categories`

    const [filterCategoryIsClose, setFilterCategoryIsClose] = useState(true)
    const dispatch = useDispatch()


    const [categories, getAllCategories] = useFetch(url)


    useEffect(() => {
        getAllCategories()
    }, [])

    const handleClickCategories = id => {
        const url = `${URL_BASE}/products?category=${id}`
        dispatch(getAllProductsThunk(url))
        dispatch(setFiltersCloseSlice(true))
    }

    const handleClickAllProducts = () => {
        dispatch(getAllProductsThunk())
        dispatch(setFiltersCloseSlice(true))
    }

    const handleCategoryClose = () => {
        setFilterCategoryIsClose(!filterCategoryIsClose)
    }

    return (
        <article className='filtercategory' >
            <div className='filtercategory_title-container' onClick={handleCategoryClose} >
                <h3 className='filtercategory_title'>Category</h3>
                <i className='filtercategory_open bx bx-chevron-down' ></i>
            </div>

            <hr className='filtercategory_hr' />

            <ul className={`filtercategory_list ${filterCategoryIsClose && "filtercategory_list-closed"}`}>
                <li className='filtercategory_list-item' onClick={handleClickAllProducts}>AllProducts</li>
                {
                    categories?.map(category => (
                        <li className='filtercategory_list-item' onClick={() => handleClickCategories(category.id)} key={category.id}>{category.name}</li>
                    ))
                }
            </ul>

        </article>
    )
}

export default FilterCategory