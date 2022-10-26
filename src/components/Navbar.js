import React from 'react';
import { Link } from 'react-router-dom';

// Importing external variables
import { navbarLinks } from '../assets/data/navbarLinks';

// Importing the image logos 
import darkLogo from '../assets/images/logo_dark.png'
import lightLogo from '../assets/images/logo_light.png'

// Creating the Navbar component
const Navbar = () => {
    return (
        <nav className='navbar'>
            <Link to="/" className="navbar-logo"><img src={lightLogo} alt="Logo" /></Link>
            <div className="navbar-link-list">
                {navbarLinks.map(navbarLink => (
                    <Link to={navbarLink.link}>{!navbarLink.icon && navbarLink.name}</Link>
                ))}
            </div>
        </nav>
    )
}

// Exporting the component 
export default Navbar;