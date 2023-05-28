import React from "react";
import { UilSearchAlt } from "@iconscout/react-unicons";

// Importing the style file
import "./SearchBar.css";

// Creating the SearchBar component
const SearchBar = () => {
  // Function that will start the search query
  const search = (e) => {
    e.preventDefault();
  };

  return (
    <div className="search-bar-container">
      <form className="search-bar" onSubmit={search}>
        <input type="text" placeholder="Search..." />
        <button type="submit">
          <UilSearchAlt />
        </button>
      </form>
    </div>
  );
};

// Exporting the SearchBar component
export default SearchBar;
