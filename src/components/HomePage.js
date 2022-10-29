import React from 'react';

// Importing the style file
import '../assets/css/HomePage.css'

// Importing the costume made components
import Search from './Search'

// Creating the HomePage component 
const HomePage = () => {
    return (
        <div className="home-container">
            <Search />
        </div>
    )
}

// Exporting the HomePage component
export default HomePage;