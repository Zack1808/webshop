import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import { UilShoppingCart } from '@iconscout/react-unicons'

// Importing costume made components
import Badge from './Badge'
import SwitchButton from './SwitchButton'

// Importing the style file
import '../assets/css/Navbar.css'

// Creating the Navbar component
const Navbar = ({ dark, setDark, total}) => {

    // Variable that contains the path information
    const location = useLocation()

    return (
        <nav className='navbar'>

            {/* Logo start */}
            <Link to="/" className="navbar-logo">
                <VideogameAssetIcon sx={{ fontSize: "80px" }}/>
                <div className="logo-text">
                    <h1>GamerTech</h1>
                </div>
            </Link>
            {/* Logo end */}

            {/* Button display start */}
            <div className="navbar-buttons">
                <SwitchButton toggle={dark} setToggle={setDark} />
                {
                    location.pathname !== '/cart' && location.pathname !== "/checkout" && (
                        <Badge amount={total}>
                            <Link to="/cart"><UilShoppingCart/></Link>
                        </Badge>
                    )
                }
            </div>
            {/* Button display end */}

        </nav>
    )
}

// Exporting the component 
export default Navbar;