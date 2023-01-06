import React, { useState, useEffect } from 'react';
import { UilShoppingCart } from '@iconscout/react-unicons'

// Importing the costume made components
import Carosel from '../Carosel';
import Loader from '../Loader'

// Importing the style file
import '../../assets/css/DetailsPage.css'

// Importing the fetching functions
import { fetchProduct } from '../../assets/data/fetchingFunctions'

// Importing the helper functions
import { getId } from '../../assets/data/helperFunctions'

// Creating the DetailsPage component
const DetailsPage = ({ add }) => {

    // Variable definition start
    // Setting up state
    const [product, setProduct] = useState();
    const [quant, setQuant] = useState(1)
    // Variable definition end

    // Functions start
    // Fetching the product once the page is rendered
    useEffect(() => {
        // Retreiving the id from the url
        const id = getId()
        fetchProduct(id, setProduct);
    }, [])

    const increaseAmount = () => {
        if(quant < product.inventory.available) setQuant(prevState => prevState + 1)
    }

    const decreaseAmount = () => {
        if(quant > 1) setQuant(prevState => prevState - 1)
    }
    // Funcitons end

    if(!product) return <div className="details-page-container"><Loader /></div>


    return (
        <div className="details-page-container">
            <div className="details-carosel">
                {product && <Carosel images={product.assets} />}
            </div>
            <div className="details-product-information">
                <h1>{product.name}</h1>
                <div className="shopping-info">
                    <h2>Price: {product.price.formatted_with_symbol}</h2>
                    <p>
                        {product.price.raw > 100 ? (
                            product.price.raw > 500 ? (
                                product.price.raw > 1000 ? `Installment: €${(product.price.raw / 36).toFixed(2)}` : `Installment: €${(product.price.raw / 24).toFixed(2)}`
                            ) : `Installment: €${(product.price.raw / 12).toFixed(2)}`
                        ) : null}
                    </p>
                    <hr />
                    <div className="column">
                        <h4>Installments: </h4>
                        <p>
                            {product.price.raw > 100 ? (
                                product.price.raw > 500 ? (
                                    product.price.raw > 1000 ? "36 installments without interest" : "24 installments without interest"
                                ) : "12 installments without interest"
                            ) : "No"}
                        </p>
                    </div>
                    <hr />
                    <div className="column">
                        <h4>Available: </h4>
                        <p>
                            {product.inventory.available > 0 ? "In Stock" : "Currently unavailable"}
                        </p>
                    </div>
                    <hr />
                    {
                    product.inventory.available > 0 ? (
                        <>
                            <div className="details-buttons">
                                <button className="btn btn-add" onClick={decreaseAmount}>-</button>
                                <div className="product-amount">{quant}</div>
                                <button className="btn btn-add" onClick={increaseAmount}>+</button>
                            </div>
                            <hr />
                            <button className="btn btn-add" onClick={() => add(product.id, quant)}>Add to cart <UilShoppingCart /></button>
                        </>
                        ) : null}
                </div>
            </div>
            <hr />
            <div className="details-page-desc" dangerouslySetInnerHTML={{__html: product.description}}></div>
        </div>
    )
}

// Exporting the DetailsPage component
export default DetailsPage;