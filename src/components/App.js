import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Importing the style file
import '../assets/css/App.css';

// Importing the costume components
import HomePage from './Pages/HomePage'
import Navbar from './Navbar';


// Creating the App component
const App = () => {

    // setting up the state variables
    const [darkMode, setDarkMode] = useState(false)

    return (
        // Setting up react-router-dom
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <div className={`container ${darkMode && 'dark'}`}>
                <Navbar dark={darkMode} setDark={setDarkMode} />

                {/* Link routes start */}
                <Routes>
                    <Route exact path='/' element={<HomePage />}/>
                </Routes>
                {/* Link routes end */}
                
            </div>
        </BrowserRouter>
    )
}

// exporting the App component
export default App;