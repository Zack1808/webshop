import React from 'react';

// Importing the style file 
import '../../assets/css/CategorySelection.css'

// Creating the CategorySelection component
const CategorySelection = ({categories}) => {
    return (
        <div className="category-selection-container">
            {categories.map(category => {
                return (
                    <div className="category-selection" key={category.id}>
                        <div className="category-image" style={{ backgroundImage: `url(${category.assets[0].url})`}}></div>
                        <div className="category-text"><h3>{category.name}</h3></div>
                    </div>
                )
            })}
        </div>
    )
}

// Exporting the CategorySelection component
export default CategorySelection;