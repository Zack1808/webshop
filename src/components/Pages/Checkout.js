import React, { useState } from 'react';

// Importing the style file
import "../../assets/css/Checkout.css"

// Importing the costume made components 
import Stepper from '../Stepper'

// Creating the Checkout component
const Checkout = () => {

    // Variable and state definition start
    const [step, setStep] = useState(4)

    // Steps that will be displayed in the stepper component
    const steps = [
        {
            id: 1,
            name: "Shipping Address"
        },
        {
            id: 2,
            name: "Payment Details"
        }
    ]
    // Variable and state definition end

    return (
        <div className="checkout-container">
            <div className="forms">
                <h1>Checkout</h1>
                <Stepper step={step} steps={steps} />
            </div>
        </div>
    )
}

// Exporting the component
export default Checkout