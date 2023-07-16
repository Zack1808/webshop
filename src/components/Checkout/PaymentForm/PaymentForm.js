import React, { useState } from "react";
import {
  Elements,
  CardElement,
  ElementsConsumer,
} from "@stripe/react-stripe-js";
import { loadStripe } from "react-stripe-js";

// Importing the context
import { useTheme } from "../../../context/themeContext";

// Importing the costume components
import ItemsReview from "./ItemsReveiw/ItemsReview";
import Button from "../../Button/Button";

// Importing the style file
import "./PaymentForm.css";

// Setting up the stripe Promise
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_API_KEY);

// Creating the PaymentForm component
const PaymentForm = ({ token, setStep, shippingData }) => {
  // Setting up the state
  const [filled, setFilled] = useState(false);

  // Setting up the context
  const dark = useTheme();

  // Setting up the variables
  const lightMode = {
    color: "#1a1a1a",
    iconColor: "#1a1a1a",
    fontWeight: "700",
  };

  const darkMode = {
    color: "#e6e6e6",
    iconColor: "#e6e6e6",
    fontWeight: "700",
  };

  let styling = dark ? darkMode : lightMode;

  return (
    <div className="payment-container">
      <ItemsReview token={token} />
      <h3>Payment Method</h3>
      <Elements stripe={stripePromise}>
        <ElementsConsumer>
          {({ elements, stripe }) => (
            <form>
              <div className="card-input">
                <CardElement
                  options={{
                    style: {
                      base: styling,
                    },
                  }}
                  onChange={(e) => {
                    e.complete && setFilled(true);
                  }}
                />
              </div>
              <div className="buttons">
                <Button
                  text="Back to last step"
                  type="button"
                  click={() => setStep((prevState) => prevState - 1)}
                />
                {filled && stripe && <Button text={`Pay ${token.subtotal.formatted_with_symbol}`} click={()=> setStep(prevState => prevState + 1)} />}
              </div>
            </form>
          )}
        </ElementsConsumer>
      </Elements>
    </div>
  );
};

// Exporting the PaymentForm
export default PaymentForm;
