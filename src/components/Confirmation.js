import React from 'react'
import { Link } from 'react-router-dom'

// Creating the Confirmation component
const Confirmation = ({ order, err}) => {
    if(err) return (
        <div className="confirmation-container">
            <div className="err-message">Error: {err}</div>
            <Link to="/" className='btn btn-add'>Back to Home</Link>
        </div>
    )

    console.log(order)

    if(order.customer) return (
        <div className="confirmation-container">
            <div className="confirmation-information">
                <h3>Order Created!</h3>
                <hr />
                <p>Thanky you for your purchase {order.customer.firstName} {order.customer.lastName}</p>
                <p>Your Order reference is: {order.customer_reference}</p>
            </div>
            <Link to="/" className='btn btn-add'>Back to Home</Link>
        </div>
    )
}

// exporting the component
export default Confirmation