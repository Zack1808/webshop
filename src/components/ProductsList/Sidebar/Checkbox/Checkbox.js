import React, { useState } from "react";
import { UilCheck } from "@iconscout/react-unicons";

// Importing the context
import {
  useAddSubCategory,
  useRemoveSubCategory,
} from "../../../../context/subCategoryContext";

// Importing the style file
import "./Checkbox.css";

// Creating the Checkbox component
const Checkbox = ({ label = "label", slug = "slug" }) => {
  // Setting up state
  const [checked, setChecked] = useState(false);

  // Setting up the context
  const add = useAddSubCategory();
  const remove = useRemoveSubCategory();

  // Function that will update the checked state
  const updateChecked = () => {
    setChecked((prevState) => !prevState);
    if (!checked) add(slug);
    else remove(slug);
  };

  return (
    <div className="checkbox-container" onClick={updateChecked}>
      <div className="checkbox" onClick={updateChecked}>
        {checked && <UilCheck />}
      </div>
      <input id={label} name={label} type="checkbox" defaultChecked={checked} />
      <label onClick={updateChecked} htmlFor={label}>
        {label}
      </label>
    </div>
  );
};

// Exporting the Checkbox component
export default Checkbox;
