import React from 'react';
import { Link } from 'react-router-dom';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';

// Importing external variables
import { navbarLinks } from '../assets/data/navbarLinks';

// Importing the style file
import '../assets/css/Navbar.css'

// Creating the Navbar component
const Navbar = () => {
    return (
        <nav className='navbar'>
            <Link to="/" className="navbar-logo">
                <VideogameAssetIcon sx={{ fontSize: "110px" }}/>
                <div className="logo-text">
                    <h1>GamerTech</h1>
                    <h6>Where all the gaming tech is in one place</h6>
                </div>
            </Link>
            <div className="navbar-link-list">
                {navbarLinks.map(navbarLink => (
                    <Link to={navbarLink.link}>{!navbarLink.icon ? navbarLink.name : navbarLink.icon}</Link>
                ))}
            </div>
        </nav>
    )
}

// Exporting the component 
export default Navbar;