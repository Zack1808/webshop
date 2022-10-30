import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Importing the style file
import '../assets/css/App.css';

// Importing the costume components
import HomePage from './Pages/HomePage'
import Navbar from './Navbar';

// Importing the api functions
import { commerce } from '../api/commerceInit';

// Creating the App component
const App = () => {

    // Setting up the state
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    // Fetching functions start
    // Fetching the products from the commercejs database as the page is loaded
    useEffect(() => {
        fetchProducts();
        fetchCategories();
    }, [])

    // Function taht will fetch all products from the commercejs database
    const fetchProducts = async () => {
        const { data } = await commerce.products.list();
        setProducts(data)
    }

    // Function that will fetch all awailable categories
    const fetchCategories = async () => {
        const { data } = await commerce.categories.list();
        setCategories(data)

    }
    // Fetching functions end

    // setting up the state variables
    const [darkMode, setDarkMode] = useState(false)

    return (
        // Setting up react-router-dom
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <div className={`container ${darkMode && 'dark'}`}>
                <Navbar dark={darkMode} setDark={setDarkMode} />
                <Routes>
                    <Route exact path='/' element={<HomePage categories={categories} products={products} />}/>
                </Routes>
            </div>
        </BrowserRouter>
    )
}

// exporting the App component
export default App;