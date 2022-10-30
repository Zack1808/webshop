import React, { useState } from 'react';
import { UilAngleDown } from '@iconscout/react-unicons'

// Importing the style file
import '../assets/css/Select.css';

// Creating the Select component
const Select = ({ categories, selected, setSelected }) => {

    // Initializing state
    const [toggle, setToggle] = useState(false);

    // Function that will handle the onClick operation
    const click = (sel) => {
        setSelected(sel);
        setToggle(false)
    }

    // Function that will display the selected category
    const displayCategory = (id) => {
        let index;
        for(var i = 0; i < categories.length; i++) {
            if(categories[i].id === id) index = i;
        }
        return categories[index].name;
    }

    // Variable to setup the transition delay for the buttons
    let delay = 0

    return (
        <div className="select-container">
            <div className="select" onClick={() => setToggle(previousState => !previousState)}>{selected === "...Select Category" ? selected : displayCategory(selected)}{categories && <span className={toggle ? "toggled" : ""}><UilAngleDown /></span>}</div>
            <div className={`dropdown-content ${toggle && "dropdown-visible"}`}>
                {categories && categories.map(category => {
                    delay += .1
                    return <button className='btn-select' key={category.id} onClick={() => click(category.id)} style={{ transition: toggle && `opacity .5s ${delay}s, color .5s ease-in-out, background-color .5s ease-in-out`}}>{category.name}</button>
                })}
            </div>
        </div>
    )
}

// Exporting the Select component
export default Select;