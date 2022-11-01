import React, {useState} from 'react'
import { UilAngleDown } from '@iconscout/react-unicons'

// Importing the costume made components
import FilterList from './FilterList'

// Importing the style file
import '../assets/css/Filter.css';

// Creating the Category component
const Filter = ({ categories }) => {

    // Defining state
    const [toggle, setToggle] = useState(false);
    const [sortLowestToHighest, setSortLowestToHighest] = useState(true)
    const [sortHighestToLowest, setSortHighestToLowest] = useState(false);

    const sorting = [
        {
            id: 1,
            name: "Sort lowest to highest price",
            active: sortLowestToHighest,
            setActive: setSortLowestToHighest,
            deselect: [setSortHighestToLowest]
        },
        {
            id: 2,
            name: "Sort highest to lowest price",
            active: sortHighestToLowest,
            setActive: setSortHighestToLowest,
            deselect: [setSortLowestToHighest]
        }
    ]

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