import React, { useState } from 'react';
import { UilCheck } from '@iconscout/react-unicons'

// Importing the style file
import "../../assets/css/Checkout.css"

// Creating the Checkout component
const Checkout = () => {

    const [step, setStep] = useState(1)

    return (
        <div className="checkout-container">
            <div className="forms">
                <h1>Checkout</h1>
                <div className="stepper">
                    <div className="step">
                        <span className='active'>
                            {
                                step === 1 ? "1" : <UilCheck />
                            }
                        </span>
                        <small>Shipping address</small>
                    </div>
                    <hr />
                    <div className="step">
                        <span className={step >= 2 && `active`}>
                            {
                                step <= 2 ? "2" : <UilCheck />
                            }
                        </span>
                        <small>Payment Details</small>
                    </div>
                </div>
            </div>
        </div>
    )
}

// Exporting the component
export default Checkout