import React, { useRef } from 'react';
import { UilSearch } from '@iconscout/react-unicons'

// Importing the style file
import '../assets/css/Search.css'

// Importing the fetching function
import { fetchSearcedProducts } from '../assets/data/fetchingFunctions';

// Creating the Search component
const Search = ({ setIsSearched, setSearched}) => {

    const queryRef = useRef(null)

    const handleSubmit = (e) => {
        setSearched([])
        e.preventDefault()
        fetchSearcedProducts(queryRef.current.value, setSearched)
        setIsSearched(true)
    }

    return (
        <form className="search-container" onSubmit={handleSubmit}>

            {/* Searchbar start  */}
            <div className="input-container">
                <button className='btn-search'><UilSearch /></button>
                <input type="text" name="searchbar" placeholder="Search..." ref={queryRef} />
            </div>
            {/* Searchbar end */}

        </form>
    )
}

// Exporting the Search compnent
export default Search;