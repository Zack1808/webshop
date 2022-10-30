import React, { useState } from 'react';
import { UilAngleDown } from '@iconscout/react-unicons'

// Importing the style file
import '../assets/css/CategoryList.css';

// Creating the CategoryList comoponent
const CategoryList = () => {

    // Defining state
    const [toggle, setToggle] = useState(false)

    return (
        <div className="categorylist-container">
            <h4 onClick={() => setToggle(previousState => !previousState)}>Product <span className={toggle ? "toggled" : ""}><UilAngleDown /></span></h4>
            <div className={`categorylist-list-container ${toggle && "active"}`}>
                checkbox
            </div>
        </div>
    )
}

// Exporting the CategoryList
export default CategoryList;