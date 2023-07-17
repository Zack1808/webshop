import React, { useRef } from "react";
import { UilSearchAlt } from "@iconscout/react-unicons";
import { useNavigate } from "react-router-dom";

// Importing the context
import { useSearchProduct } from "../../context/productsContext";

// Importing the style file
import "./SearchBar.css";

// Creating the SearchBar component
const SearchBar = () => {
  // Setting up the ref
  const searchRef = useRef(null);

  // Setting up the context
  const searchProduct = useSearchProduct();

  // Setting up the navigation hook
  const history = useNavigate();

  // Function that will start the search query
  const search = (e) => {
    e.preventDefault();
    searchRef.current && searchProduct(searchRef.current.value);
    history(`/search/${searchRef.current.value.toLowerCase()}`, {
      replace: true,
    });
  };

  return (
    <div className="search-bar-container">
      <form className="search-bar" onSubmit={search}>
        <input ref={searchRef} type="text" placeholder="Search..." />
        <button type="submit">
          <UilSearchAlt />
        </button>
      </form>
    </div>
  );
};

// Exporting the SearchBar component
export default SearchBar;
