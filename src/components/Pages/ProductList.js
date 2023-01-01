import React from 'react';

// Importing the costume made components 
import Card from '../Card'

// Importing the style file
import '../../assets/css/ProductList.css';

// Creatign the ProductList component
const ProductList = ({ products }) => {

    console.log(products)

    return ( 
        <div className="product-list-container">
            {products && products.map(product => {
                return <Card product={product} key={product.id} />
            })}
        </div>
    )
}

// Exportign the ProductList component 
export default ProductList;