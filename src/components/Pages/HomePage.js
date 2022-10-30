import React from 'react';

// Importing the style file
import '../../assets/css/HomePage.css'

// Importing the costume made components
import Search from '../Search'
import Category from '../Category'

// Creating the HomePage component 
const HomePage = ({ categories, products}) => {
    return (
        <div className="home-container">
            <header>
                <Search />
            </header>
            <div className="lists-container">
                <Category categories={categories} />
            </div>
        </div>
    )
}

// Exporting the HomePage component
export default HomePage;