import React, { useState, useEffect } from 'react'
import { UilCheck } from '@iconscout/react-unicons'

// importing the style file
import '../assets/css/CheckBox.css'

// Creating the CheckBox component
const CheckBox = ({ item, click, selected }) => {

    // Defining states
    const [toggle, setToggle] = useState(false);

    // Adding selected subcategory to the list
    useEffect(() => {
        let currentList;
        if(toggle) {
            currentList = [...selected, item.id]
        }
        else {
            currentList = selected;
            const index = currentList.indexOf(item.id)
            currentList.splice(index, 1);
        }
        click(currentList)
    }, [toggle])

    // Function that will handle the click function
    const handleClick = () => {
        setToggle(previousState => !previousState)
    }

    return (
        <div className="checkbox-container">
            <div className={`checkbox ${toggle && "checkbox-active"}`} onClick={handleClick}><UilCheck className={!toggle ? "not-active" : ""} /></div>
            <label onClick={() => setToggle(previousState => !previousState)}>{item.name} <small>{item.assets && `(${item.assets.length})`}</small></label>
        </div>
    )
}

// Exporting the CheckBox component
export default CheckBox;