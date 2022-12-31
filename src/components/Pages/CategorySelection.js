import React from 'react';
import { Link } from 'react-router-dom'

// Importing costume made components
import CategorySelectionItem from '../CategorySelectionItem';


// Importing the style file 
import '../../assets/css/CategorySelection.css'

// Creating the CategorySelection component
const CategorySelection = ({ categories, setSelected}) => {

    return (
        <div className="category-selection-container">
                {categories.map(category => {
                    return (
                       <Link to={`/products/${category.name}`}>
                            <CategorySelectionItem category={category} setSelected={setSelected} key={category.id} />
                       </Link>
                    )
                })}
        </div>
    )
}

// Exporting the CategorySelection component
export default CategorySelection;