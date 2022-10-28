import React from 'react';
import { Link } from 'react-router-dom';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import { UilShoppingCart } from '@iconscout/react-unicons'

// Importing costume made components
import Badge from './Badge'
import SwitchButton from './SwitchButton'

// Importing the style file
import '../assets/css/Navbar.css'

// Creating the Navbar component
const Navbar = ({ dark, setDark}) => {
    return (
        <nav className='navbar'>

            {/* Logo start */}
            <Link to="/" className="navbar-logo">
                <VideogameAssetIcon sx={{ fontSize: "90px" }}/>
                <div className="logo-text">
                    <h1>GamerTech</h1>
                    <h6>Where all the gaming tech is in one place</h6>
                </div>
            </Link>
            {/* Logo end */}

            <div className="navbar-buttons">
                <SwitchButton toggle={dark} setToggle={setDark} />
                <Badge amount={2}>
                    <Link to="/cart"><UilShoppingCart/></Link>
                </Badge>
            </div>

        </nav>
    )
}

// Exporting the component 
export default Navbar;