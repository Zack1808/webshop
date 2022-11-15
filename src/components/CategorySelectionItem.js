import React from 'react';
import { useInView } from 'react-intersection-observer';

// Importing the style file
import '../assets/css/CategorySelectionItem.css'

// Creating the CategorySelectionItem component 
const CategorySelectionItem = ({ category, setSelected }) => {
    
    // Setting up the inView hook
    const [ref, inView] = useInView({
        threshold: 0.1
    });

    // Function that will handle the onClick event
    const onClick = () => {
        setSelected(category.id)
    }

    return (
        <div ref={ref} className={`category-selection ${inView && "category-visible"}`} key={category.id} onClick={onClick}>
            <div className="category-image" style={{ backgroundImage: `url(${category.assets[0].url})`}}></div>
            <div className="category-text"><h3>{category.name}</h3></div>
        </div>
    )
}

export default CategorySelectionItem;