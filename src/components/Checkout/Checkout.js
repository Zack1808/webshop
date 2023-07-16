import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";

// Importing the context
import { useCart } from "../../context/cartContext";

// Importing the fetching functions
import { generateToken } from "../../api/fetchToken";

// Importing the costume components
import Loader from "../Loader/Loader";
import Stepper from "./Stepper/Stepper";
import AddressForm from "./AddressForm/AddressForm";
import PaymentForm from "./PaymentForm/PaymentForm";

// Importing the style file
import "./Checkout.css";

// Creating the Checkout component
const Checkout = () => {
  // Setting up the context
  const cart = useCart();

  // Setting up the state
  const [step, setStep] = useState(2);
  const [token, setToken] = useState(null);
  const [data, setData] = useState({});

  // Setting up the history hook
  const history = useNavigate();

  // Setting up the intersection observer
  const [ref, inView] = useInView();

  // Setting up the variables
  const steps = [
    {
      id: 1,
      name: "Shipping Address",
    },
    {
      id: 2,
      name: "Payment Details",
    },
  ];

  // Rerouting the user if the cart is empty
  useEffect(() => {
    if (cart.id && cart.total_items === 0) {
      history("/", { replace: true });
    } else {
      generateToken(cart, setToken);
    }

    // eslint-disable-next-line
  }, [cart]);

  return (
    <div className="checkout-container">
      {token ? (
        <div className={`checkout ${inView ? "active" : ""}`} ref={ref}>
          <Stepper step={step} steps={steps} />
          {step === 1 && (
            <AddressForm token={token} setData={setData} setStep={setStep} />
          )}
          {step === 2 && <PaymentForm token={token} setStep={setStep} />}
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

// Exporting the Checkout component
export default Checkout;
