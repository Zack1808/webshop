import React, { useState } from 'react'
import { UilCheck } from '@iconscout/react-unicons'

// importing the style file
import '../assets/css/CheckBox.css'

// Creating the CheckBox component
const CheckBox = ({ item}) => {

    // Defining states
    const [toggle, setToggle] = useState(false);

    return (
        <div className="checkbox-container">
            <div className={`checkbox ${toggle && "checkbox-active"}`} onClick={() => setToggle(previousState => !previousState)}><UilCheck className={!toggle ? "not-active" : ""} /></div>
            <label onClick={() => setToggle(previousState => !previousState)}>{item.name} <small>({item.products})</small></label>
        </div>
    )
}

// Exporting the CheckBox component
export default CheckBox;