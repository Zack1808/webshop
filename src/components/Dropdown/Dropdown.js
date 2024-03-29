import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { UilAngleDown } from "@iconscout/react-unicons";

// Importing the style file
import "./Dropdown.css";

// Creating the Dropdown component
const Dropdown = ({
  links,
  items = [],
  dark,
  placeholder = "Choose one...",
  hasSelection,
  setSelection,
}) => {
  // Setting up state
  const [active, setActive] = useState(false);
  const [selected, setSelected] = useState("");

  // Setting up the ref
  const dropRef = useRef();

  // Setting up the hooks
  const location = useLocation();

  // Defining variables
  let delay = 0;

  // Getting the current category
  useEffect(() => {
    if (links)
      location && location.pathname.includes("/categories")
        ? setSelected(
            location.pathname.slice(
              location.pathname.lastIndexOf("/") + 1,
              location.pathname.lastIndexOf("&")
            )
          )
        : setSelected("Choose a category...");

    // eslint-disable-next-line
  }, []);

  // Adding event listener to close dropdown if user clicks outside the dropdown
  document.addEventListener("click", (e) => {
    if (dropRef.current && !dropRef.current.contains(e.target))
      setActive(false);
  });

  // Dropdown with links
  if (links)
    return (
      <div
        ref={dropRef}
        className="dropdown-container big"
        onClick={() => setActive((prevState) => !prevState)}
      >
        <div className={`dropdown-selected ${dark ? "darker" : ""}`}>
          {selected}
          <span className={active ? "active" : ""}>
            <UilAngleDown />
          </span>
        </div>
        <div className={`dropdown-items ${active ? "active" : ""}`}>
          {items &&
            items.map((item) => {
              delay += 0.07;
              return (
                <Link
                  key={item.id}
                  to={`/category/${item.slug}&${item.id}`}
                  className="dropdown-item"
                  style={{
                    transition: active && `opacity .3s ${delay}s`,
                  }}
                >
                  {item.name}
                </Link>
              );
            })}
        </div>
      </div>
    );

  // Functions that will handle the selection
  const handleClick = (item) => {
    setSelected(item.label);
    setSelection(item.id);
  };

  // Basic Dropdown
  return (
    <div
      ref={dropRef}
      className="dropdown-container"
      onClick={() => setActive((prevState) => !prevState)}
    >
      <div className={`dropdown-selected ${dark ? "darker" : ""}`}>
        {selected === "" || !hasSelection ? placeholder : selected}
        <span className={active ? "active" : ""}>
          <UilAngleDown />
        </span>
      </div>
      <div className={`dropdown-items ${active ? "active" : ""}`}>
        {items &&
          items.map((item) => {
            delay += 0.07;
            return (
              <div
                key={item.id}
                className="dropdown-item"
                style={{
                  transition: active && `opacity .3s ${delay}s`,
                }}
                onClick={() => handleClick(item)}
              >
                {item.label}
              </div>
            );
          })}
      </div>
    </div>
  );
};

// Exporting the Dropdown component
export default Dropdown;
