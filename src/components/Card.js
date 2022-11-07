import React from 'react'
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { UilShoppingCart } from '@iconscout/react-unicons'

// Importing the style file
import '../assets/css/Card.css'

// Creating the card component 
const Card = ({ product }) => {

    // Setting up the inView hook
    const [ref, inView] = useInView({
        threshold: 0.1
    });

    return (
        <div className={`card-container ${inView && "card-visible"}`} ref={ref}>
            <div className="card-image" style={{ backgroundImage: `url(${product.image.url})`}}></div>
            <div className="card-content">
                <h4 className="card-title">{product.name}</h4>
                <h4>{product.price.formatted_with_code}</h4>
                <div className="card-buttons">
                    <Link to="/" className='btn'>View details</Link>
                    <button className="btn btn-add">Add to cart <UilShoppingCart /></button>
                </div>
            </div>
        </div>
    )
}

// Exporting the Card component
export default Card;