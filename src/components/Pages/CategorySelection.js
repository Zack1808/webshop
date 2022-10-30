import React from 'react';

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
                        <CategorySelectionItem category={category} setSelected={setSelected} key={category.id} />
                    )
                })}
        </div>
    )
}

// Exporting the CategorySelection component
export default CategorySelection;