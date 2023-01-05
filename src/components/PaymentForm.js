import React, { useState } from 'react'
import { Elements, CardElement, ElementsConsumer } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

// Importing the style file
import "../assets/css/PaymentForm.css"

// Importing costume made components
import ItemsReview from './ItemsReview'

// Creating the stripe promise
const stripePromise = loadStripe("pk_test_51MMdvFHRZkQBmkpdLtukIUhQvpcDLI0GDxX1ygj3UkYYWUj9vezStkdCiXQViQVSBJVy30PIw2ax1GEH6zdAxvmq00VPwPjzEL")

// Creating the PaymentForm component 
const PaymentForm = ({ token, darkMode, setStep, shippingData, handleCheckout }) => {

    // Variable and state definition start
    const [isFilled, setIsFilled] = useState(false)

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
    const handleSubmit = async(e, elements, stripe) => {
        e.preventDefault();
        if(!stripe || !elements) return;
        const cardElement = elements.getElement(CardElement);
        const { error, paymentMethod } = await stripe.createPaymentMethod({ type: 'card', card: cardElement})
        if(error) console.log(error)
        else {
        const orderData = {
            line_items: token.line_items,
            customer: {
            firstname: shippingData.firstName,
            lastname: shippingData.lastName,
            email: shippingData.email,
            },
            billing: {
            name: 'Primary',
            street: shippingData.address,
            town_city: shippingData.city,
            county_state: shippingData.shippingRegion,
            postal_zip_code: shippingData.zip,
            country: shippingData.shippingCountry
            },
            shipping: {
            name: 'Primary',
            street: shippingData.address,
            town_city: shippingData.city,
            county_state: shippingData.shippingRegion,
            postal_zip_code: shippingData.zip,
            country: shippingData.shippingCountry
            },
            fulfillment: { shipping_method: shippingData.shippingOption},
            payment: {
            gateway: 'stripe',
            stripe: {
                payment_method_id: paymentMethod.id,
            }
            }
        }
            handleCheckout(token.id, orderData)
            setStep(previousStep => previousStep + 1)
        }
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
                                }} onChange={e => {e.complete && setIsFilled(true)}} />
                            </span>
                            <div className="card-buttons active">
                                <button className='btn' onClick={() => {setStep(previousStep => previousStep - 1)}}>Back to previous step</button>
                                <button className="btn btn-add" type='submit' disabled={!stripe || !isFilled}>Pay {token.subtotal.formatted_with_symbol}</button>
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