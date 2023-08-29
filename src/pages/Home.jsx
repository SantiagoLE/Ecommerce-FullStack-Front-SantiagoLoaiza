import { useDispatch, useSelector } from 'react-redux'
import CardProduct from '../components/home/CardProduct'
import "./styles/home.css"
import { useRef, useState } from 'react'
import FilterCategory from '../components/home/FilterCategory'
import FilterByPrice from '../components/home/FilterByPrice'
import { setFiltersCloseSlice } from '../store/slices/filtersClose.slice'

const Home = () => {
    const { productsGlobal } = useSelector(state => state)


    const [inputValue, setInputValue] = useState("")

    const [fromTo, setFromTo] = useState({
        from: 0,
        to: Infinity
    })

    const input = useRef()

    const handleChangeInput = () => {
        setInputValue(input.current.value.toLowerCase().trim())
    }
   
    const productFilter = productsGlobal
        ?.filter(prod => prod.title.toLowerCase().trim().includes(inputValue))
        .filter(prod => {
            const from = +fromTo.from
            const to = +fromTo.to
            const price = +prod.price
            if (from && to) {
                return from <= price && price <= to
            }
            if (from && !to) {
                return from <= price
            }
            if (!from && to) {
                return price <= to
            }
            if (!from && !to) {
                return true
            }
        })

    const { filtersClose } = useSelector(state => state)
    const dispatch = useDispatch()

    const handleFilterClose = () => {
        dispatch(setFiltersCloseSlice(!filtersClose))
    }

    return (
        <div className='home'>
            <div className='home_searchandfilter-container'>
                <input className='home_input' ref={input} onChange={handleChangeInput} type="text" placeholder="what are you looking for" />

                <i className='home_icon-filter bx bx-filter-alt' onClick={handleFilterClose}><span className='home_icon-label'>Filters</span></i>

                <div className={`filters_container ${filtersClose && "filters_container-close"}`}>
                    <h2 className='filter_title'>Filters</h2>
                    <i className='filter_icon-close bx bxs-x-circle' onClick={() => dispatch(setFiltersCloseSlice(true))}></i>
                    <FilterCategory />

                    <FilterByPrice setFromTo={setFromTo} />

                </div>
            </div>
            <div className='cardProducts-cotain'>



                {
                    productFilter?.map(prod => (

                        <CardProduct
                            key={prod.id}
                            product={prod}
                        />
                    ))
                }
            </div>
        </div>

    )
}

export default Home