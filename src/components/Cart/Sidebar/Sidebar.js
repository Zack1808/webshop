import React, { useRef } from "react";
import { useInView } from "react-intersection-observer";

// Importing the context
import { useCart, useUpdateCart } from "../../../context/cartContext";

// Importing the costume components
import Button from "../../Button/Button";

// Importing the actions
import { ACTIONS } from "../../../reducers/cartReducer";

// Importing the style file
import "./Sidebar.css";

// Creating the Sidebar
const Sidebar = () => {
  // Setting up the intersection observer
  const [ref, inView] = useInView();

  // Setting up the ref
  const sideRef = useRef();

  // Setting up the context
  const cart = useCart();
  const update = useUpdateCart();

  // Function that will clear the cart
  const clear = () => {
    update(ACTIONS.CLEAR_CART);
  };

  return (
    <div
      ref={sideRef}
      className="sidebar"
      style={{
        "--top":
          sideRef.current && `${sideRef.current.getBoundingClientRect().y}px`,
      }}
    >
      <div className={`sidebar-container ${inView ? "visible" : ""}`} ref={ref}>
        <h2>Cart summary</h2>
        <hr />
        <div className="price-summary">
          <h3>Total Price</h3>
          <p>{cart.subtotal.formatted_with_symbol}</p>
        </div>
        <hr />
        <div className="buttons">
          <Button text="Clear cart" click={clear} />
          <Button text="Checkout" type="page-link" link="/checkout" />
        </div>
      </div>
    </div>
  );
};

// Exporting the Sidebar
export default Sidebar;
