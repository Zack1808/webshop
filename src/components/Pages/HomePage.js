import React, {useEffect} from 'react';

// Importing the style file
import '../../assets/css/HomePage.css'

// Importing the costume made components
import CategorySelection from './CategorySelection';
import Search from '../Search'
import Select from '../Select';
import Loader from '../Loader';

// Importing helper functions
import { renderCategory } from '../../assets/data/renderFunctions';

// Creating the HomePage component 
const HomePage = ({ properties }) => {

    // Variable and state definition start
    var categoryName = renderCategory(properties.selectedCategory, properties.categories)
    // Variable and state definition end

    // useEffect functions start
    useEffect(() => {
        properties.setSelectedCategory("")
    }, [])
    

    return (
        <div className="home-container">

            {/* Header start */}
            <header className="home-header">
                <Select items={properties.categories} selected={categoryName} setSelected={properties.setSelectedCategory} />
                <Search />
            </header>
            {/* Header end */}

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