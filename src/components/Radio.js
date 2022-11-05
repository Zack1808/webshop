import React from 'react'

// importing the style file
import '../assets/css/Radio.css'

// Creating the Radio component
const radio = ({ item }) => {

    // Funciton that will deselect all other Radiobuttons and select only the selected one
    const handleClick = () => {
        item.setActive();
    }

    return (
        <div className="radio-container">
            <div className={`radio ${item.active && "radio-active"}`} onClick={handleClick}></div>
            <label onClick={handleClick}>{item.name}</label>
        </div>
    )
}

// Exporting the CheckBox component
export default radio;