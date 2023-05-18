import React, { useState, useEffect } from "react";
import { UilCheck } from "@iconscout/react-unicons";

// Importing fetching functions
import { fetchCategoryProductCount } from "../assets/data/fetchingFunctions";

// importing the style file
import "../assets/css/CheckBox.css";

// Creating the CheckBox component
const CheckBox = ({ item, remove, add }) => {
  useEffect(() => {
    fetchCategoryProductCount(item.slug, setAmount);

    //eslint-disable-next-line
  }, []);

  // Defining states
  const [toggle, setToggle] = useState(false);
  const [amount, setAmount] = useState(0);

  // Function that will handle the click event
  const handleClick = () => {
    setToggle((previousState) => !previousState);
    if (!toggle) add(item.slug);
    else remove(item.slug);
  };

  return (
    <div className="checkbox-container">
      <div
        className={`checkbox ${toggle && "checkbox-active"}`}
        onClick={handleClick}
      >
        <UilCheck className={!toggle ? "not-active" : ""} />
      </div>
      <label onClick={handleClick}>
        {item.name} <small>{item.assets && `(${amount})`}</small>
      </label>
    </div>
  );
};

// Exporting the CheckBox component
export default CheckBox;
