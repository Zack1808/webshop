import React, {useState} from 'react'
import { UilAngleDown } from '@iconscout/react-unicons'

// Importing the costume made components
import FilterList from './FilterList'

// Importing the style file
import '../assets/css/Filter.css';

// Creating the Category component
const Filter = ({ categories }) => {

    // Defining state
    const [toggle, setToggle] = useState(false)

    return ( 
        <div className="category-container">
            <h3 onClick={() => setToggle(previousState => !previousState)}>Select Category <span className={toggle ? "toggled" : ""}><UilAngleDown /></span></h3>
            <div className={`category-list-container ${toggle && "active"}`}>
                <FilterList categories={categories} />
                <FilterList />
                <FilterList />
            </div>
        </div>
    )
}

// Exporting the Category component
export default Filter