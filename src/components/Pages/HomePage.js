import React, { useState } from 'react';

// Importing the style file
import '../../assets/css/HomePage.css'

// Importing the costume made components
import Search from '../Search'
import Filter from '../Filter'
import Select from '../Select';
import CategorySelection from './CategorySelection';

// Creating the HomePage component 
const HomePage = ({ categories, products}) => {

    // Initializing state 
    const [selectedCategory, setSelectedCategory] = useState("...Select Category");

    return (
        <div className="home-container">
            <header className="home-header">
                <Select categories={categories} selected={selectedCategory} setSelected={setSelectedCategory} />
                <Search />
            </header>
            <div className="lists-container">
                {
                    selectedCategory === "...Select Category" ? (
                        <CategorySelection categories={categories} />
                    ) : (
                        <div />
                    )
                }
            </div>
        </div>
    )
}

// Exporting the HomePage component
export default HomePage;