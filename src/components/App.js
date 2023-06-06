import React from "react";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importing the costume components
import Navbar from "./Navigation/Navbar";
import SearchBar from "./SearchBar/Searchbar";
import Footer from "./Footer/Footer";
import Home from "./Home/Home";

// Importing the contexts
import { useTheme } from "../context/themeContext";
import { CategoryProvider } from "../context/categoryContext";

// Importing the style file
import "./App.css";

// Creating the App component
const App = () => {
  // Setting up the context
  const dark = useTheme();

  return (
    <CategoryProvider>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className={`app-container ${dark ? "dark" : ""}`}>
          <div className="navigation">
            <Navbar />
            <SearchBar />
            <ToastContainer style={{ marginTop: "8em" }} />
          </div>
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </CategoryProvider>
  );
};

// Exporting the App component
export default App;
