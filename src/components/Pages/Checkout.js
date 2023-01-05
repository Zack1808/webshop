import React, { useEffect, useState } from 'react';

// Importing the style file
import "../../assets/css/Checkout.css"

// Importing the costume made components 
import Stepper from '../Stepper'
import AddressForm from '../AddressForm';
import PaymentForm from '../PaymentForm'
import Loader from '../Loader';

// Importing the helper functions
import { generateToken } from '../../assets/data/fetchingFunctions';

// Creating the Checkout component
const Checkout = ({ cart, darkMode, handleCheckout }) => {

    // Variable and state definition start
    const [step, setStep] = useState(1)
    const [token, setToken] = useState(null)
    const [data, setData] = useState([])

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

    // useEffect functions start
    useEffect(() => {
        generateToken(cart, setToken)
    }, [cart])
    // useEffect functions end

    // Functions start 
    const next = (info) => {
        setData(info)
        setStep(previousStep => previousStep + 1)
    }

    if(!token) return <Loader />

    return (
        <div className="checkout-container">
            <div className="forms">
                <h1>Checkout</h1>
                <Stepper step={step} steps={steps} />
                {
                    step === 1 && <AddressForm token={token} handleSubmit={next} />
                }
                {
                    step === 2 && <PaymentForm token={token} darkMode={darkMode} setStep={setStep} shippingData={data} handleCheckout={handleCheckout} />
                }
            </div>
        </div>
    )
}

// Exporting the component
export default Checkout