import React, { useState, useEffect } from 'react';

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
    const [selectedCategory, setSelectedCategory] = useState("");
    const [subCategories, setSubCategories] = useState([]);

    // Fetching the subcategories once every time a new category is selected
    useEffect(() => {
        setSubCategories(fetchSubCategories(selectedCategory))
    }, [selectedCategory])

    // Function that will fetch the subcategories
    const fetchSubCategories = (id) => {
        if(selectedCategory) {
            let index;
            for(var i = 0; i < categories.length; i++) {
                if(categories[i].id === id) index = i;
            }
            return categories[index].children;
        }
        return [];
    }

    // Function that will display the selected category
    const displayCategory = (id) => {
        if(selectedCategory) {
            let index;
            for(var i = 0; i < categories.length; i++) {
                if(categories[i].id === id) index = i;
            }
            return categories[index].name;
        }
        return "...Select Category";
    } 

    // Varialbe that will hold the name of the selected category
    let categoryName = displayCategory(selectedCategory)

    return (
        <div className="home-container">
            <header className="home-header">
                <Select items={categories} selected={categoryName} setSelected={setSelectedCategory} />
                <Search />
            </header>
            <div className="lists-container">
                {
                    !selectedCategory ? (
                        <CategorySelection categories={categories} setSelected={setSelectedCategory} />
                    ) : (
                        <Filter categories={subCategories} />
                    )
                }
            </div>
        </div>
    )
}

// Exporting the HomePage component
export default HomePage;