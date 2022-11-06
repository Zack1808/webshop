import React, { useState, useEffect } from 'react';

// Importing the style file
import '../../assets/css/HomePage.css'

// Importing the costume made components
import Search from '../Search'
import Filter from '../Filter'
import Select from '../Select';
import CategorySelection from './CategorySelection';

// Importing fetching functions
import { fetchCategories, fetchProducts, fetchSubCategories } from '../../assets/data/fetchingFunctions';
import { renderCategory, renderProducts } from '../../assets/data/renderFunctions';
import { sortProducts } from '../../assets/data/helperFunctions';

// Creating the HomePage component 
const HomePage = () => {

    // Variable definition start

    // Initializing state 
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [selectedProducts, setSelectedProducts] = useState([])
    const [selectedCategory, setSelectedCategory] = useState("");
    const [subCategories, setSubCategories] = useState([]);
    const [selectedSubCategories, setSelectedSubCategories] = useState([])
    const [sortLowestToHighest, setSortLowestToHighest] = useState(true)    

    // Sorting elements
    const sorting = [
        {
            id: 1,
            name: "Sort lowest to highest price",
            active: sortLowestToHighest,
            setActive: function(){setSortLowestToHighest(true)},
        },
        {
            id: 2,
            name: "Sort highest to lowest price",
            active: !sortLowestToHighest,
            setActive: function(){setSortLowestToHighest(false)}
        }
    ];

    // Varialbe that will hold the name of the selected category
    let categoryName = renderCategory(selectedCategory, categories)

    // Variable definition end
    


    // useEffect functions start

    // Fetching the products from the commercejs database as the page is loaded
    useEffect(() => {
        fetchCategories(setCategories);
    }, []);

    // Fetching the subcategories once every time a new category is selected
    useEffect(() => {
        setSubCategories(fetchSubCategories(selectedCategory, categories))
        setSelectedSubCategories([])

        // disablbling the dependency-missing-warning message
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedCategory]);

    // Fetching the products with the same category
    useEffect(() => {
        fetchProducts(selectedCategory, setProducts);
    }, [selectedCategory]);

    // Sorting the product list
    useEffect(() => {
        setProducts(sortProducts(sortLowestToHighest, products))

        // disablbling the dependency-missing-warning message
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ sortLowestToHighest]);

    // Fetching only the products from the selected sub category
    useEffect(() => {
        let sel = renderProducts(products, selectedSubCategories)
        setSelectedProducts(sortProducts(sortLowestToHighest, sel))

        // disablbling the dependency-missing-warning message
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedSubCategories, sortLowestToHighest])

    // useEffect functions end
   


    // State switching functions start

    const removeSubCategory = (slug) => {
        let removed = [...selectedSubCategories];
        let index = removed.indexOf(slug);
        removed.splice(index, 1);
        setSelectedSubCategories(removed)
    }

    const addSubCategory = (slug) => {
        let added = [...selectedSubCategories];
        added.push(slug)
        setSelectedSubCategories(added)
    }

    // State switching functions end



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
                            <Filter categories={subCategories} sorting={sorting} remove={removeSubCategory} add={addSubCategory} products={products} />
                        </>
                    )
                }
            </div>
        </div>
    )
}

// Exporting the HomePage component
export default HomePage;