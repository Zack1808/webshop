import React, { useState } from 'react'
import { UilCheck } from '@iconscout/react-unicons'

// importing the style file
import '../assets/css/CheckBox.css'

// Creating the CheckBox component
const CheckBox = ({ item, remove, add}) => {

    // Defining states
    const [toggle, setToggle] = useState(false);

    // Function that will handle the click event 
    const handleClick = () => {
        setToggle(previousState => !previousState);
        if(!toggle) add(item.slug)
        else remove(item.slug)
    }

    return (
        <div className="checkbox-container">
            <div className={`checkbox ${toggle && "checkbox-active"}`} onClick={handleClick}><UilCheck className={!toggle ? "not-active" : ""} /></div>
            <label onClick={handleClick}>{item.name} <small>{item.assets && `(${item.assets.length})`}</small></label>
        </div>
    )
}

// Exporting the CheckBox component
export default CheckBox;