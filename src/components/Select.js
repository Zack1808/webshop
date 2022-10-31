import React, { useState } from 'react';
import { UilAngleDown } from '@iconscout/react-unicons'

// Importing the style file
import '../assets/css/Select.css';

// Creating the Select component
const Select = ({ items, selected, setSelected }) => {

    // Initializing state
    const [toggle, setToggle] = useState(false);

    // Function that will handle the onClick operation
    const click = (sel) => {
        setSelected(sel);
        setToggle(false)
    }

    // Variable to setup the transition delay for the buttons
    let delay = 0

    return (
        <div className="select-container">
            <div className="select" onClick={() => setToggle(previousState => !previousState)}>{selected}{items && <span className={toggle ? "toggled" : ""}><UilAngleDown /></span>}</div>
            <div className={`dropdown-content ${toggle && "dropdown-visible"}`}>
                {items && items.map(item => {
                    delay += .1
                    return <button className='btn-select' key={item.id} onClick={() => click(item.id)} style={{ transition: toggle && `opacity .5s ${delay}s, color .5s ease-in-out, background-color .5s ease-in-out`}}>{item.name}</button>
                })}
            </div>
        </div>
    )
}

// Exporting the Select component
export default Select;