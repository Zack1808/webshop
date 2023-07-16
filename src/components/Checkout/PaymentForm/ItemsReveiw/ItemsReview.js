import React from "react";

// Importing the style file
import "./ItemsReview.css";

// Creating the ItemsReview component
const ItemsReview = ({ token }) => {
  return (
    <div className="review-container">
      <h3>Order summary</h3>
      <div className="review">
        {token.line_items.map((item) => {
          return (
            <div className="item" key={item.id}>
              <div className="item-info">
                <h4>{item.name}</h4>
                <small>{`Quantity: ${item.quantity}`}</small>
              </div>
              <p>{item.line_total.formatted_with_symbol}</p>
            </div>
          );
        })}
      </div>
      <hr />
      <div className="total">
        <h4>Total:</h4>
        <p>{token.subtotal.formatted_with_symbol}</p>
      </div>
      <hr />
    </div>
  );
};

// Exporting the ItemsReview component
export default ItemsReview;
