import React, {useState, useEffect} from 'react'
import { UilAngleDown } from '@iconscout/react-unicons'

// Importing the costume made components
import FilterList from './FilterList'

// Importing the style file
import '../assets/css/Filter.css';

// Creating the Category component
const Filter = ({ categories, sorting }) => {    

    // Setting up the state
    const [toggle, setToggle] = useState(false)

    return ( 
        <div className="category-container">
            <h3 onClick={() => setToggle(previousState => !previousState)}>Select Category <span className={toggle ? "toggled" : ""}><UilAngleDown /></span></h3>
            <div className={`category-list-container ${toggle && "active"}`}>
                <FilterList items={categories} title="Brand" multiselect />
                <FilterList items={sorting} title="Display"  />
            </div>
        </div>
    )
}

// Exporting the Category component
export default Filter