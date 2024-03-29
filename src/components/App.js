import React from "react";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importing the costume components
import Navbar from "./Navigation/Navbar";
import Footer from "./Footer/Footer";
import Home from "./Home/Home";
import ProductsList from "./ProductsList/ProductsList";
import Cart from "./Cart/Cart";
import ProductInfo from "./ProductInfo/ProductInfo";
import Checkout from "./Checkout/Checkout";

// Importing the contexts
import { useTheme } from "../context/themeContext";
import { CategoryProvider } from "../context/categoryContext";
import { ProductsProvider } from "../context/productsContext";
import { CartProvider } from "../context/cartContext";

// Importing the style file
import "./App.css";

// Creating the App component
const App = () => {
  // Setting up the context
  const dark = useTheme();

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <CategoryProvider>
        <ProductsProvider>
          <CartProvider>
            <div className={`app-container ${dark ? "dark" : ""}`}>
              <div className="navigation">
                <Navbar />
                <ToastContainer style={{ marginTop: "8em" }} />
              </div>
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/category/:id" element={<ProductsList />} />
                <Route exact path="/search/:id" element={<ProductsList />} />
                <Route exact path="/cart" element={<Cart />} />
                <Route exact path="/product/:id" element={<ProductInfo />} />
                <Route exact path="/checkout" element={<Checkout />} />
              </Routes>
              <Footer />
            </div>
          </CartProvider>
        </ProductsProvider>
      </CategoryProvider>
    </BrowserRouter>
  );
};

// Exporting the App component
export default App;
