import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Importing the style file
import '../assets/css/App.css';

// Importing the costume components
import Navbar from './Navbar';

// Creating the App component
const App = () => {
    return (
        // Setting up react-router-dom
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <div className="container">
                <Navbar />
            </div>
        </BrowserRouter>
    )
}

// exporting the App component
export default App;