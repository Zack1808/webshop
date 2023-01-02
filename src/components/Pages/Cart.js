import React from 'react'
import { Link } from 'react-router-dom'

// Importing the css file
import '../../assets/css/Cart.css'

// Importing the costume made components
import Card from '../Card'
import Loader from '../Loader'

// Creating the Cart component
const Cart = ({cart, clicks}) => {

    if(!cart.line_items) return (
        <div className="not-found">
            <Loader />
        </div>
    )

    if(cart.total_items == 0) return (
        <div className="not-found">
            <h1>Oops, something's wrong!</h1>
            <p>You do not have any items in the cart. <Link to="/">Click here to return to the homepage.</Link></p>
        </div>
    )

    return (
        <div className="cart-container">
            {cart.line_items.map(item => (
                <Card key={item.id} product={item} click={clicks} />
            ))}
        </div>
    )
}

// exporting the Cart component
export default Cart