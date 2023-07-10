import React from "react";

// Importing the costume components
import CartItem from "./CartItem/CartItem";

// Importing the style file
import "./CartItemList.css";

// Creating the CartItemList component
const CartItemList = ({ items }) => {
  return (
    <div className="cart-item-list-container">
      {console.log(items)}
      {items && items.map((item) => <CartItem item={item} key={item.id} />)}
    </div>
  );
};

// Exporting the CartItemList component
export default CartItemList;
