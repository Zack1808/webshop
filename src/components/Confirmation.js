import React from 'react'
import { Link } from 'react-router-dom'

// Importing the style file 
import '../assets/css/Confirmation.css'

// Importing costume components
import Loader from './Loader'

// Creating the Confirmation component
const Confirmation = ({ order, err}) => {
    if(err) return (
        <div className="confirmation-container">
            <div className="err-message">Error: {err}</div>
            <Link to="/" className='btn btn-add'>Back to Home</Link>
        </div>
    )

    if(order.customer) return (
        <div className="confirmation-container">
            <div className="confirmation-information">
                <h3>Order Created!</h3>
                <hr />
                <p>Thanky you for your purchase {order.customer.firstname} {order.customer.lastname}</p>
                <p>Your Order reference is: {order.customer_reference}</p>
            </div>
            <Link to="/" className='btn btn-add'>Back to Home</Link>
        </div>
    )

    return (
        <div className="loader-container">
            <Loader />
        </div>
    )
}

// exporting the component
export default Confirmation