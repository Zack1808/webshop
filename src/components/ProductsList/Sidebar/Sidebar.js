import React, { useRef, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useLocation } from "react-router-dom";
import { UilAngleDown } from "@iconscout/react-unicons";

// Importing the costume components
import Checkbox from "./Checkbox/Checkbox";
import RadioButton from "./RadionButton/RadioButton";
import Dropdown from "../../Dropdown/Dropdown";

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
  const [radio, setRadio] = useState(false);
  const [check, setCheck] = useState(false);
  const [form, setForm] = useState(false);

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
      <Dropdown links items={categories} />
      <div ref={ref} className={`sidebar-container ${inView ? "visible" : ""}`}>
        <h2 onClick={() => setForm((prevState) => !prevState)}>
          Filters{" "}
          <span className={form ? "active" : ""}>
            <UilAngleDown />
          </span>
        </h2>
        <div className={`forms ${form ? "active" : ""}`}>
          {location && location.pathname.includes("/category") && (
            <form>
              <h3 onClick={() => setCheck((prevState) => !prevState)}>
                Categories{" "}
                <span className={check ? "active" : ""}>
                  <UilAngleDown />
                </span>
              </h3>
              <div className={`checks ${check ? "active" : ""}`}>
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
              </div>
            </form>
          )}
          <form>
            <h3 onClick={() => setRadio((prevState) => !prevState)}>
              Sort by price
              <span className={radio ? "active" : ""}>
                <UilAngleDown />
              </span>
            </h3>
            <div className={`radios ${radio ? "active" : ""}`}>
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
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

// Exporting the Sidebar component
export default Sidebar;
