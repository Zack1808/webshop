import React, { useEffect } from 'react';

// Importing the css file
import '../../assets/css/Products.css'

// Importing costume made components
import ProductList from './ProductList';
import Filter from '../Filter';
import Loader from '../Loader';
import Select from '../Select';
import Search from '../Search';

// Importing helper functions
import { renderCategory } from '../../assets/data/renderFunctions';

// Creating the Products component
const Products = ({ properties}) =>{

    // Variable and state definition start
    var categoryName = renderCategory(properties.selectedCategory, properties.categories)
    // Variable and state definition end

    // useEffect functionst start
    useEffect(() => {
        if(properties.selectedCategory !== "") localStorage.setItem("react-webshop-selected-category", JSON.stringify(properties.selectedCategory))
        properties.setSelectedCategory(JSON.parse(localStorage.getItem("react-webshop-selected-category")))
    }, [])

    useEffect(() => {
        localStorage.setItem("react-webshop-selected-category", JSON.stringify(properties.selectedCategory))
    }, [properties.selectedCategory])

    return (
        <div className="products-container">
            <header className="home-header">
                <Select items={properties.categories} selected={categoryName} setSelected={properties.setSelectedCategory} />
                <Search />
            </header>
            {/* <div className='home-products'>
                <Filter categories={subCategories} sorting={sorting} remove={removeSubCategory} add={addSubCategory} products={products} />
                {selectedProducts.length !== 0 ? (
                    <ProductList products={selectedProducts} />
                ) : (
                    <ProductList products={products} />
                )}
            </div> */}
        </div>
    ) 
}

// exporting the Products component
export default Products