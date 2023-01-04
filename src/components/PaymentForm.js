import React from 'react'

// Importing the style file
import "../assets/css/PaymentForm.css"

// Importing costume made components
import ItemsReview from './ItemsReview'

// Creating the PaymentForm component 
const PaymentForm = ({ token }) => {
    return (
        <div className='payment-form-container'>
            <ItemsReview token={token} />
        </div>
    )
}

// exporting the component 
export default PaymentForm