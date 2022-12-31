import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Importing the style file
import '../assets/css/App.css';

// Importing the costume components
import HomePage from './Pages/HomePage'
import Products from './Pages/Products'
import DetailsPage from './Pages/DetailsPage';
import Navbar from './Navbar';

// Importing fetching & helper functions
import { fetchCategories, fetchProducts, fetchSubCategories } from '../assets/data/fetchingFunctions';
import { renderCategory, renderProducts } from '../assets/data/renderFunctions';
import { sortProducts } from '../assets/data/helperFunctions';


// Creating the App component
const App = () => {

    // Variable and state definition start
    const [darkMode, setDarkMode] = useState(false)
    const [categories, setCategories] = useState([])
    const [selectedCategory, setSelectedCategory] = useState("")

    const homePageProps = {
        categories,
        selectedCategory,
        setSelectedCategory
    }

    const productsPageProps = {
        categories,
        selectedCategory,
        setSelectedCategory
    }
    // Variable and state definition end

    // useEffect functions start

    useEffect(() => {
        // Getting the state value for dark mode from local storage
        setDarkMode(JSON.parse(localStorage.getItem("react-webshop-dark-mode")))

        // fetching the categories from the database
        if(localStorage.getItem("react-webshop-categories")) setCategories(JSON.parse(localStorage.getItem("react-webshop-categories")))
        else fetchCategories(setCategories)
    }, [])

    // useEffect used for storing the darkmode state value
    useEffect(() => {
        localStorage.setItem("react-webshop-dark-mode", JSON.stringify(darkMode))
    }, [darkMode])

    // useEffect used for storing the fetched categories
    useEffect(() => {
        localStorage.setItem("react-webshop-categories", JSON.stringify(categories))
    }, [categories])

    return (
        // Setting up react-router-dom
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <div className={`container ${darkMode && 'dark'}`}>
                <Navbar dark={darkMode} setDark={setDarkMode} />

                {/* Link routes start */}
                <Routes>
                    <Route exact path='/' element={<HomePage properties={homePageProps} />}/>
                    <Route path='/products/:category' element={<Products properties={productsPageProps} />} />
                    <Route path="/details/:id" element={<DetailsPage />} />
                </Routes>
                {/* Link routes end */}
                
            </div>
        </BrowserRouter>
    )
}

// exporting the App component
export default App;