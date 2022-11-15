import React, { useState, useEffect } from 'react';

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
            <div className="details-product-information"></div>
        </div>
    )
}

// Exporting the DetailsPage component
export default DetailsPage;