import React, { useState } from 'react';
import { UilAngleDown } from '@iconscout/react-unicons'

// Importing costume made components
import CheckBox from './Checkbox';
import Radio from './Radio'

// Importing the style file
import '../assets/css/FilterList.css';

// Creating the CategoryList comoponent
const FilterList = ({ items, title, multiselect, remove, add, products }) => {

    // Defining state
    const [toggle, setToggle] = useState(false);

    // Function that will check how many products have the displayed category
    const checkAmount = (item) => {
        var amount = 0;
        products.map(product => {
            for(let i = 0; i < product.categories.length; i++) {
                if(product.categories[i].slug === item.slug) amount++
            }
        })
        return amount;
    }

    if(multiselect) return (
        <div className="categorylist-container">
            <h4 onClick={() => setToggle(previousState => !previousState)}>{title} <span className={toggle ? "toggled" : ""}><UilAngleDown /></span></h4>
            <div className={`categorylist-list-container ${toggle && "active"}`}>
                {items && items.map(item => {
                    const amount = checkAmount(item);
                    console.log(amount)
                    return <CheckBox item={item} key={item.id} remove={remove} add={add} amount={amount}/>
                })}
            </div>
        </div>
    )

    return (
        <div className="categorylist-container">
            <h4 onClick={() => setToggle(previousState => !previousState)}>{title} <span className={toggle ? "toggled" : ""}><UilAngleDown /></span></h4>
            <div className={`categorylist-list-container ${toggle && "active"}`}>
                {items && items.map(item => (
                    <Radio item={item} key={item.id} />
                ))}
            </div>
        </div>
    )
}

// Exporting the CategoryList
export default FilterList;