import React from "react";

// Importing the costume components
import Loader from "../../Loader/Loader";
import Button from "../../Button/Button";

// Importing the style file
import "./Confirmation.css";

// Creating the Confirmation component
const Confirmation = ({ order, err }) => {
  if (err)
    return (
      <div className="confirmation-container">
        <div className="err-message">Error: {err}</div>
        <Button type="page-link" link="/" text="Return to Home" />
      </div>
    );

  if (order.customer)
    return (
      <div className="confirmation-container">
        <div className="confirmation-information">
          <h3>Order Created!</h3>
          <hr />
          <p>
            Thanky you for your purchase {order.customer.firstname}{" "}
            {order.customer.lastname}
          </p>
          <p>Your Order reference is: {order.customer_reference}</p>
        </div>
        <Button type="page-link" link="/" text="Return to Home" />
      </div>
    );

  return (
    <div className="confirmation-loading-container">
      <Loader />
    </div>
  );
};

// Exporting the Confirmation component
export default Confirmation;
