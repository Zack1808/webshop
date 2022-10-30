import React, {useState} from 'react'
import { UilAngleDown } from '@iconscout/react-unicons'

// Importing the costume made components
import CategoryList from './CategoryList'

// Importing the style file
import '../assets/css/Category.css';

// Creating the Category component
const Category = () => {

    // Defining state
    const [toggle, setToggle] = useState(false)

    return ( 
        <div className="category-container">
            <h3 onClick={() => setToggle(previousState => !previousState)}>Select Category <span className={toggle ? "toggled" : ""}><UilAngleDown /></span></h3>
            <div className={`category-list-container ${toggle && "active"}`}>
                <CategoryList />
                <CategoryList />
                <CategoryList />
            </div>
        </div>
    )
}

// Exporting the Category component
export default Category