import React, { useState, useEffect, useMemo } from 'react';

// Importing the style file
import '../../assets/css/HomePage.css'

// Importing the costume made components
import Search from '../Search'
import Filter from '../Filter'
import Select from '../Select';
import CategorySelection from './CategorySelection';

// Importing the api functions
import { commerce } from '../../api/commerceInit';

// Creating the HomePage component 
const HomePage = () => {

    // Variable definition start

    // Initializing state 
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [subCategories, setSubCategories] = useState([]);
    const [selectedSubCategories, setSelectedSubCategories] = useState([])
    const [sortLowestToHighest, setSortLowestToHighest] = useState(true)
    const [sortHighestToLowest, setSortHighestToLowest] = useState(false);

    // Sorting elements
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
    ];

    // Variable that will contain all selected products
    let selectedProducts;

    // Variable definition end


    // Fetching functions start

    // Fetching the products from the commercejs database as the page is loaded
    useEffect(() => {
        fetchCategories();
    }, []);

    // Fetching the subcategories once every time a new category is selected
    useEffect(() => {
        setSubCategories(fetchSubCategories(selectedCategory))
        setSelectedSubCategories([])
    }, [selectedCategory]);

    useEffect(() => {
        console.log(selectedSubCategories)
    }, [selectedSubCategories])

    // Fetching the products with the same category
    useEffect(() => {
         fetchProducts();
    }, [selectedCategory, sortLowestToHighest]);

    // Function that will fetch all awailable categories
    const fetchCategories = async () => {
        const { data } = await commerce.categories.list();
        setCategories(data)
    }

    // Function that will fetch all the products that have the selected category
    const fetchProducts = async () => {
        if(sortLowestToHighest){
            const { data } = await commerce.products.list({
                category_id: selectedCategory,
                sortBy: 'price',
                sortDirection: 'asc'
            })
            setProducts(data)
        }
        else {
            const { data } = await commerce.products.list({
                category_id: selectedCategory,
                sortBy: 'price',
                sortDirection: 'desc'
            })
            setProducts(data)
        }
    }

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

    // Rendering functions start

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

    // Rendering functions end

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
                            <Filter categories={subCategories} sorting={sorting} remove={removeSubCategory} add={addSubCategory} />
                        </>
                    )
                }
            </div>
        </div>
    )
}

// Exporting the HomePage component
export default HomePage;