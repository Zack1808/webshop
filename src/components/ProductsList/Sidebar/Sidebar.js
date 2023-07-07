import React, { useRef, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useLocation } from "react-router-dom";

// Importing the costume components
import Checkbox from "./Checkbox/Checkbox";
import RadioButton from "./RadionButton/RadioButton";

// Importing the context
import { useCategory } from "../../../context/categoryContext";
import { useSort } from "../../../context/productsContext";

// Importing the style file
import "./Sidebar.css";

// Creating the Sidebar component
const Sidebar = () => {
  // Setting up state
  const [id, setId] = useState("");
  const [active, setActive] = useState(true);

  // Creating the intersection observer reference
  const [ref, inView] = useInView();

  // Setting up the ref
  const sideRef = useRef();

  // Setting up the context
  const categories = useCategory();
  const sort = useSort();

  // Setting up the location
  const location = useLocation();

  // Getting the current category
  useEffect(() => {
    if (location && location.pathname.includes("/category")) {
      setId(
        location.pathname.slice(
          location.pathname.lastIndexOf("&") + 1,
          location.pathname.length
        )
      );
    }

    // eslint-disable-next-line
  }, []);

  // The function taht will handle the radio switch
  const updateChecked = (type) => {
    switch (type) {
      case "asc":
        setActive(true);
        sort(true);
        break;
      case "desc":
        setActive(false);
        sort(false);
        break;
      default:
        break;
    }
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
      <div ref={ref} className={`sidebar-container ${inView ? "visible" : ""}`}>
        <form>
          <h3>Categories</h3>
          {id &&
            categories.map((category) => {
              if (category.id === id)
                return category.children.map((child) => (
                  <Checkbox
                    key={child.id}
                    label={child.name}
                    slug={child.slug}
                  />
                ));
              else return null;
            })}
        </form>
        <form>
          <h3>Sort by price</h3>
          <RadioButton
            name="asc"
            label="Sort from lowest to highest"
            active={active}
            updateChecked={updateChecked}
          />
          <RadioButton
            name="desc"
            label="Sort from highest to lowest"
            active={!active}
            updateChecked={updateChecked}
          />
        </form>
      </div>
    </div>
  );
};

// Exporting the Sidebar component
export default Sidebar;
