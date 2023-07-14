import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

// Importing the fetching function
import { fetchProduct } from "../../api/fetchProduct";

// Importing the context
import { useUpdateCart } from "../../context/cartContext";

// Importing the costume components
import Carosel from "./Carosel/Carosel";
import Loader from "../Loader/Loader";
import Button from "../Button/Button";

// Importing the reducer
import { ACTIONS } from "../../reducers/cartReducer";

// Importing the style file
import "./ProductInfo.css";

// Creating the ProductInfo component
const ProductInfo = () => {
  // Setting up the state
  const [product, setProduct] = useState({});

  // Setting up the ref
  const ref = useRef();

  // Setting up the location
  const location = useLocation();

  // Setting up the context
  const update = useUpdateCart();

  // Fetching the product
  useEffect(() => {
    if (location) {
      let id = location.pathname.slice(
        location.pathname.lastIndexOf("/") + 1,
        location.pathname.length
      );

      fetchProduct(setProduct, id);
    }

    // eslint-disable-next-line
  }, []);

  // Function that will add the item to the cart
  const addToCart = () => {
    update(ACTIONS.ADD_ITEM, product.id);
  };

  // Function that will scroll the specifications into view
  const scrollToView = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="product-info-container">
      {product.assets ? (
        <div className="product">
          <h1>{product && product.name}</h1>
          <div className="short-product-desc">
            <Carosel images={product.assets} />
            <div className="prod-info">
              <div className="row">
                <h2>Available:</h2>
                <p>
                  {product.inventory.available > 0
                    ? "In Stock"
                    : "Not in Stock"}
                </p>
              </div>
              <div className="row">
                <h2>Price:</h2>
                <p>{product.price.formatted_with_symbol}</p>
              </div>
              <div className="buttons">
                <Button text="Add to cart" click={addToCart} />
                <Button text="Read specs" click={scrollToView} />
              </div>
            </div>
          </div>
          <div
            ref={ref}
            className="specs"
            dangerouslySetInnerHTML={{ __html: product.description }}
          ></div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

// Exporting the ProductInfo
export default ProductInfo;
