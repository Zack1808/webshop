import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { commerce } from '../api/commerceInit';

// Importing the style file
import '../assets/css/App.css';

// Importing the costume components
import HomePage from './Pages/HomePage'
import Products from './Pages/Products'
import DetailsPage from './Pages/DetailsPage';
import Cart from './Pages/Cart'
import Checkout from './Pages/Checkout'
import Navbar from './Navbar';

// Importing fetching & helper functions
import { fetchCategories, fetchCart} from '../assets/data/fetchingFunctions';


// Creating the App component
const App = () => {

    // Variable and state definition start
    const [darkMode, setDarkMode] = useState(false)
    const [categories, setCategories] = useState([])
    const [selectedCategory, setSelectedCategory] = useState("")
    const [cart, setCart] = useState({})
    const [order, setOrder] = useState({})
    const [err, setErr] = useState("")

    const homePageProps = {
        categories,
        selectedCategory,
        setSelectedCategory
    }

    const productsPageProps = {
        categories,
        selectedCategory,
        setSelectedCategory,
    }
    // Variable and state definition end

    // useEffect functions start

    useEffect(() => {
        // Getting the state value for dark mode from local storage
        setDarkMode(JSON.parse(localStorage.getItem("react-webshop-dark-mode")))

        // fetching the categories from the database
        if(localStorage.getItem("react-webshop-categories")) setCategories(JSON.parse(localStorage.getItem("react-webshop-categories")))
        else fetchCategories(setCategories)
        fetchCart(setCart)

    }, [])

    // useEffect used for storing the darkmode state value
    useEffect(() => {
        localStorage.setItem("react-webshop-dark-mode", JSON.stringify(darkMode))
    }, [darkMode])

    // useEffect used for storing the fetched categories
    useEffect(() => {
        localStorage.setItem("react-webshop-categories", JSON.stringify(categories))
    }, [categories])

    // Function that will add items to the cart
    const addToCart = async(id, amount) => {
        const item = await commerce.cart.add(id, amount)
        setCart(item)
    }

    // Function that will change the quantity of the products
    const changeItemAmount = async(id, quantity) => {
        const updated = await commerce.cart.update(id, { quantity })
        setCart(updated)
    }

    // Function that will remove the selected item
    const removeFromCart = async(id) => {
        const removed = await commerce.cart.remove(id)
        setCart(removed)
    }

    // Function that will empty the entire cart
    const emptyCart = async() => {
        const empty = await commerce.cart.empty()
        setCart(empty)
    }
    
    // Function that will refresh the cart
    const refreshCart = async() => {
        const newCart = await commerce.cart.refresh()
        setCart(newCart)
    }

    // Function that will capture the checkout order
    const handleCheckout = async(tokenId, newOrder) => {
        try {
            const incomming = await commerce.checkout.capture(tokenId, newOrder)
            setOrder(incomming)
        } catch (error) {
            setErr(error.data.error.message)
        }
    }

    return (
        // Setting up react-router-dom
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <div className={`container ${darkMode && 'dark'}`}>
                <Navbar dark={darkMode} setDark={setDarkMode} total={cart.total_items} />

                {/* Link routes start */}
                <Routes>
                    <Route exact path='/' element={<HomePage properties={homePageProps} />}/>
                    <Route path='/products/:category' element={<Products properties={productsPageProps} add={addToCart} />} />
                    <Route path="/details/:id" element={<DetailsPage add={addToCart} />} />
                    <Route path='/cart' element={<Cart cart={cart} clicks={{changeItemAmount, removeFromCart, emptyCart}} />} />
                    <Route path='/checkout' element={<Checkout cart={cart} darkMode={darkMode} handleCheckout={handleCheckout} />} />
                </Routes>
                {/* Link routes end */}
                
            </div>
        </BrowserRouter>
    )
}

// exporting the App component
export default App;