import React, {useEffect} from 'react';

// Importing the style file
import '../../assets/css/HomePage.css'

// Importing the costume made components
import CategorySelection from './CategorySelection';
import Loader from '../Loader';

// Creating the HomePage component 
const HomePage = ({ properties }) => {

    // useEffect functions start
    useEffect(() => {
        properties.setSelectedCategory("")
    }, [])
    

    return (
        <div className="home-container">

            <h1>Select a category</h1>

            {/* Category listing start */}
            <div className="lists-container">
                {
                    properties.categories.length !== 0 ? <CategorySelection categories={properties.categories} setSelected={properties.setSelectedCategory} /> : <Loader />
                }
            </div>
            {/* Category listing end */}
        </div>
    )
}

// Exporting the HomePage component
export default HomePage;