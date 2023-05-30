import React from "react";

// Importing the costume components
import Navbar from "./Navigation/Navbar";
import SearchBar from "./SearchBar/Searchbar";
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
      <div className={`app-container ${dark ? "dark" : ""}`}>
        <Navbar />
        <SearchBar />
        <Home />
      </div>
    </CategoryProvider>
  );
};

// Exporting the App component
export default App;
