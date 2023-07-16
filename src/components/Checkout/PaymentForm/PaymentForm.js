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
const PaymentForm = ({ token, setStep, shippingData, handleCheckout }) => {
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

  // Function that will handle the submition of the form
  const handleSubmit = async (e, elements, stripe) => {
    e.preventDefault();
    if (!stripe || !elements) return;
    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });
    if (error) console.log(error);
    else {
      const orderData = {
        line_items: token.line_items,
        customer: {
          firstname: shippingData.firstName,
          lastname: shippingData.lastName,
          email: shippingData.email,
        },
        billing: {
          name: "Primary",
          street: shippingData.address,
          town_city: shippingData.city,
          county_state: shippingData.shippingRegion,
          postal_zip_code: shippingData.zip,
          country: shippingData.shippingCountry,
        },
        shipping: {
          name: "Primary",
          street: shippingData.address,
          town_city: shippingData.city,
          county_state: shippingData.shippingRegion,
          postal_zip_code: shippingData.zip,
          country: shippingData.shippingCountry,
        },
        fulfillment: { shipping_method: shippingData.shippingOption },
        payment: {
          gateway: "stripe",
          stripe: {
            payment_method_id: paymentMethod.id,
          },
        },
      };
      handleCheckout(token.id, orderData);
      setStep((previousStep) => previousStep + 1);
    }
  };

  return (
    <div className="payment-container">
      <ItemsReview token={token} />
      <h3>Payment Method</h3>
      <Elements stripe={stripePromise}>
        <ElementsConsumer>
          {({ elements, stripe }) => (
            <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
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
                {filled && stripe && (
                  <Button
                    text={`Pay ${token.subtotal.formatted_with_symbol}`}
                    type="submit"
                  />
                )}
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
