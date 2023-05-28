import React from "react";

// Importing the costume components
import Navbar from "./Navigation/Navbar";
import SearchBar from "./SearchBar/Searchbar";

// Importing the contexts
import { useTheme } from "../context/themeContext";

// Importing the style file
import "./App.css";

// Creating the App component
const App = () => {
  // Setting up the context
  const dark = useTheme();

  return (
    <div className={`app-container ${dark ? "dark" : ""}`}>
      <Navbar />
      <SearchBar />
    </div>
  );
};

// Exporting the App component
export default App;
