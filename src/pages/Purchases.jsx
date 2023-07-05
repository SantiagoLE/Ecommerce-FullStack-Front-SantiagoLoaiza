import React, { useEffect } from 'react'
import usePurchases from '../hooks/usePurchases'
import ProductPurchase from '../components/Purchases/ProductPurchase'
import "./styles/purchases.css"

const Purchases = () => {

    const { purchases, getAllProductsPurchased } = usePurchases()

    useEffect(() => {
        getAllProductsPurchased()
    }, [])

    return (
        <div className='purchases'>
            <h2 className='purchases_title'>Purchases</h2>
            <div className='purchases_container'>
                {
                    purchases?.map(prodPurchase => (
                        <ProductPurchase
                            key={prodPurchase.id}
                            prodPurchase={prodPurchase}
                        />

                    ))
                }
            </div>
        </div>
    )
}

export default Purchases