import React from 'react'
import { Elements, CardElement, ElementsConsumer } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

// Importing the style file
import "../assets/css/PaymentForm.css"

// Importing costume made components
import ItemsReview from './ItemsReview'

// Creating the stripe promise
const stripePromise = loadStripe("pk_test_51LqcGyEpbrLAgRpbHJFeKtSoPqDQXpffqOGj6aePCGpzy9y23Pp1mJYDpyjeOEzXFwPRUN7xqeJzWcGIvv9oA64C00HL6qNgRt")

// Creating the PaymentForm component 
const PaymentForm = ({ token, darkMode }) => {

    // Variable and state definition start
    const light = {
        color: "#0b0b0b",
        iconColor: "#0b0b0b",
        fontWeight: "600",
    }
    const dark = {
        color: "#efefef",
        iconColor: "#efefef",
        fontWeight: "600",
    }

    let styling = darkMode ? dark : light
    // Variable and state definition end

    // Functions start
    const handleSubmit = (e, elements, stripe) => {
        
    }
    // Functions end

    return (
        <div className='payment-form-container'>
            <ItemsReview token={token} />
            <h3>Payment Method</h3>
            <Elements stripe={stripePromise}>
                <ElementsConsumer>
                    {({ elements, stripe }) => (
                        <form onSubmit={e => handleSubmit(e, elements, stripe)}>
                            <div className="input-select full-width">
                                <label htmlFor="payment">Payment</label>
                                <select name="payment">
                                    <option value="normal">Normal Payment</option>
                                    {token.subtotal.raw > 100 && <option value="twelve">12 Month Installment</option>}
                                    {token.subtotal.raw > 500 && <option value="twentyfour">24 Month Installment</option>}
                                    {token.subtotal.raw > 1000 && <option value="thirtysix">36 Month Installment</option>}
                                </select>
                            </div>
                            <span>
                                <CardElement options={{
                                    style: {
                                        base: styling
                                    }
                                }} />
                            </span>
                            <div className="card-buttons active">
                                <button className='btn'>Back to previous step</button>
                                <button className="btn btn-add" type='submit' disabled={!stripe}>Pay {token.subtotal.formatted_with_symbol}</button>
                            </div>
                        </form>
                    )}
                </ElementsConsumer>
            </Elements>
        </div>
    )
}

// exporting the component 
export default PaymentForm