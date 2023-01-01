import React, { useEffect, useState } from 'react';

// Importing the css file
import '../../assets/css/Products.css'

// Importing costume made components
import ProductList from './ProductList';
import Filter from '../Filter';
import Loader from '../Loader';
import Select from '../Select';
import Search from '../Search';

// Importing helper functions
import { renderCategory, renderProducts } from '../../assets/data/renderFunctions';
import { fetchProducts, fetchSubCategories } from '../../assets/data/fetchingFunctions';

// Creating the Products component
const Products = ({ properties}) =>{

    // Variable and state definition start
    var categoryName = renderCategory(properties.selectedCategory, properties.categories)
    const [subCategories, setSubCategories] = useState([])
    const [selectedSubCategories, setSelectedSubCategories] = useState([])
    const [products, setProducts] = useState([])

    var selectedProducts = []
    // Variable and state definition end

    // useEffect functionst start
    useEffect(() => {
        if(properties.selectedCategory !== "") {
            localStorage.setItem("react-webshop-selected-category", JSON.stringify(properties.selectedCategory))
            setSubCategories(fetchSubCategories(properties.selectedCategory, properties.categories))
            fetchProducts(properties.selectedCategory, setProducts)
        }
        properties.setSelectedCategory(JSON.parse(localStorage.getItem("react-webshop-selected-category")))
    }, [])

    // Getting the selected category from the local storage and fetching the subcategories for it
    useEffect(() => {
        localStorage.setItem("react-webshop-selected-category", JSON.stringify(properties.selectedCategory))
        setSubCategories(fetchSubCategories(properties.selectedCategory, properties.categories))
        setProducts([])
        fetchProducts(properties.selectedCategory, setProducts)
    }, [properties.selectedCategory])

    useEffect(() => {
        selectedProducts = renderProducts(products, selectedSubCategories)
    })
    // useEffect functions end

    // Functions start
    // Function that adds a subcategory to the list of selected subcategories
    const addSubCategory = (slug) => {
        var added = [...selectedSubCategories]
        added.push(slug)
        setSelectedSubCategories(added)
    }

    // Functions that removes a subcategory from the list of selected subcategories
    const removeSubCategory = (slug) => {
        var removed = [...selectedSubCategories]
        removed.splice(removed.indexOf(slug), 1)
        setSelectedSubCategories(removed)
    }
    // Functions 

    return (
        <div className="products-container">
            <header className="home-header">
                <Select items={properties.categories} selected={categoryName} setSelected={properties.setSelectedCategory} />
                <Search />
            </header>
            {
                products.length !== 0  ? (
                    <div className='home-products'>
                        <Filter categories={subCategories} add={addSubCategory} remove={removeSubCategory} />
                        {selectedProducts.length !== 0 ? (
                            <ProductList products={selectedProducts} />
                        ) : (
                            <ProductList products={products} />
                        )}
                    </div>
                ) : (<Loader />)
            }
        </div>
    ) 
}

// exporting the Products component
export default Products