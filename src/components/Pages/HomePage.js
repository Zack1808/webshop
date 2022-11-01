import React, { useState, useEffect } from 'react';

// Importing the style file
import '../../assets/css/HomePage.css'

// Importing the costume made components
import Search from '../Search'
import Filter from '../Filter'
import Select from '../Select';
import CategorySelection from './CategorySelection';

// Creating the HomePage component 
const HomePage = ({ categories, products, setProducts}) => {

    // Initializing state 
    const [selectedCategory, setSelectedCategory] = useState("");
    const [subCategories, setSubCategories] = useState([]);
    const [selectedSubCategories, setSelectedSubCategories] = useState([])
    const [sortLowestToHighest, setSortLowestToHighest] = useState(true)
    const [sortHighestToLowest, setSortHighestToLowest] = useState(false);

    // sorting elements
    const sorting = [
        {
            id: 1,
            name: "Sort lowest to highest price",
            active: sortLowestToHighest,
            setActive: setSortLowestToHighest,
            deselect: [setSortHighestToLowest]
        },
        {
            id: 2,
            name: "Sort highest to lowest price",
            active: sortHighestToLowest,
            setActive: setSortHighestToLowest,
            deselect: [setSortLowestToHighest]
        }
    ]

    // storing the state data in a variable, so that it can be sorted
    const sortedProducts = products

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

    // Function that will render the sorted list
    const renderProductList = () => {
        if(sortLowestToHighest) return sortedProducts.sort((a, b) => (a.price.raw > b.price.raw) ? 1 : -1).map(product => product.name);
        return sortedProducts.sort((a, b) => (a.price.raw < b.price.raw) ? 1 : -1).map(product => product.name);
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
                        <>
                            <Filter categories={subCategories} sorting={sorting} />
                            {renderProductList()}
                        </>
                    )
                }
            </div>
        </div>
    )
}

// Exporting the HomePage component
export default HomePage;