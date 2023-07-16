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

// Importing the style file
import "./Checkout.css";

// Creating the Checkout component
const Checkout = () => {
  // Setting up the context
  const cart = useCart();

  // Setting up the state
  const [step, setStep] = useState(1);
  const [token, setToken] = useState(null);

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
    console.log(cart);
    cart.id && cart.total_items === 0
      ? history("/", { replace: true })
      : generateToken(cart, setToken);

    // eslint-disable-next-line
  }, [cart]);

  return (
    <div className="checkout-container">
      {token ? (
        <div className={`checkout ${inView ? "active" : ""}`} ref={ref}>
          <Stepper step={step} steps={steps} />
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

// Exporting the Checkout component
export default Checkout;
