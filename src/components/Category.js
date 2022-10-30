import React, {useState} from 'react'
import { UilAngleDown } from '@iconscout/react-unicons'

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
                <div className="products-container">
                    <h4>Products <span><UilAngleDown /></span></h4>
                    <div className="product-list-container">
                        checkbox
                    </div>
                </div>
                <div className="products-container">
                    <h4>Products <span><UilAngleDown /></span></h4>
                    <div className="product-list-container">
                        checkbox
                    </div>
                </div>
                <div className="products-container">
                    <h4>Products <span><UilAngleDown /></span></h4>
                    <div className="product-list-container">
                        checkbox
                    </div>
                </div>
            </div>
        </div>
    )
}

// Exporting the Category component
export default Category