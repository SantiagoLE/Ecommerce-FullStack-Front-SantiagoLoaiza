import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import "./styles/filterByPrice.css"
import { useDispatch } from 'react-redux'
import { setFiltersCloseSlice } from '../../store/slices/filtersClose.slice'

const FilterByPrice = ({ setFromTo }) => {

    const [filterPriceIsClose, setFilterPriceIsClose] = useState(true)

    const dispatch = useDispatch()

    const { register, reset, handleSubmit } = useForm()

    const submit = (data) => {
        setFromTo(data);
        reset({
            from: "",
            to: ""
        })
console.log(data)
        dispatch(setFiltersCloseSlice(true))
    }

    const handlePriceClose = () => {
        setFilterPriceIsClose(!filterPriceIsClose)
    }

    return (
        <article className='filterbyprice'>
            <div className='filterbyprice_title-container' onClick={handlePriceClose}>
                <h3 className='filterbyprice_title'>Price</h3>
                <i className='filterbyprice_open bx bx-chevron-down' ></i>
            </div>

            <hr className='filterbyprice_hr' />

            <form className={`filterbyprice_form ${filterPriceIsClose && "filterbyprice_form-close"}`} onSubmit={handleSubmit(submit)}>

                <div className='filterbyprice_item'>
                    <label className='filterbyprice_label' htmlFor="from">From</label>
                    <input {...register("from")} className='filterbyprice_input' type="number" id='from' />
                </div>

                <div className='filterbyprice_item'>
                    <label className='filterbyprice_label' htmlFor="to">To</label>
                    <input {...register("to")} className='filterbyprice_input' type="number" id='to' />
                </div>
                <button className='filterbyprice_btn'>Filter Price</button>
            </form>
        </article>
    )
}

export default FilterByPrice