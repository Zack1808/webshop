import React from 'react';
import { UilSearch } from '@iconscout/react-unicons'

// Importing the style file
import '../assets/css/Search.css'

// Creating the Search component
const Search = () => {
    return (
        <form className="search-container">

            {/* Searchbar start  */}
            <div className="input-container">
                <button className='btn-search'><UilSearch /></button>
                <input type="text" name="searchbar" placeholder="Search..." />
            </div>
            {/* Searchbar end */}

        </form>
    )
}

// Exporting the Search compnent
export default Search;