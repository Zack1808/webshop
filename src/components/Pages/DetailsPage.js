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
const DetailsPage = () => {

    // Variable definition start
    // Setting up state
    const [product, setProduct] = useState();
    // Variable definition end

    // Functions start
    // Fetching the product once the page is rendered
    useEffect(() => {
        // Retreiving the id from the url
        const id = getId()
        fetchProduct(id, setProduct);
    }, [])
    // Funcitons end

    if(!product) return <Loader />

    return (
        <div className="details-page-container">
            <div className="details-carosel">
                {product && <Carosel images={product.assets} />}
            </div>
            <div className="shopping-info">
                <h3>Cijena: {product.price.formatted_with_code}</h3>
                <button className='btn btn-add'>Add to kart <UilShoppingCart /></button>
            </div>
            {/* <div className="details-product-information">
                <h1>{product.name}</h1>
                <div className="details-page-desc" dangerouslySetInnerHTML={{__html: product.description}}></div>
            </div> */}
        </div>
    )
}

// Exporting the DetailsPage component
export default DetailsPage;