import React from 'react'
import { Link } from 'react-router-dom'

// Importing the css file
import '../../assets/css/Cart.css'

// Importing the costume made components
import Card from '../Card'
import Loader from '../Loader'

// Creating the Cart component
const Cart = ({cart, clicks}) => {

    if(!cart.line_items) return (
        <div className="not-found">
            <Loader />
        </div>
    )

    if(cart.total_items === 0) return (
        <div className="not-found">
            <h1>Oops, something's wrong!</h1>
            <p>You do not have any items in the cart. <Link to="/">Click here to return to the homepage.</Link></p>
        </div>
    )

    return (
        <div className="cart-container">
            <div className="cart-list">
                {cart.line_items.map(item => (
                    <Card key={item.id} product={item} click={clicks} />
                ))}
            </div>
            <div className="cart-summary">
                <h1>Cart summary</h1>
                <div className="cart-information">
                    <div className="column">
                        <h4>Total Price: </h4>
                        <p>{cart.subtotal.formatted_with_symbol}</p>
                    </div>
                    <hr />
                    <div className="column">
                        <h4>Installments: </h4>
                        <p>
                            {cart.subtotal.raw > 100 ? (
                                cart.subtotal.raw > 500 ? (
                                    cart.subtotal.raw > 1000 ? "36 installments without interest" : "24 installments without interest"
                                ) : "12 installments without interest"
                            ) : "No"}
                        </p>
                    </div>
                    {
                        cart.subtotal.raw > 100 ? (
                            <>
                                <hr />
                                <div className="column">
                                    <h4>Installment: </h4>
                                    <p>
                                        €{cart.subtotal.raw > 100 ? (
                                            cart.subtotal.raw > 500 ? (
                                                cart.subtotal.raw > 1000 ? (cart.subtotal.raw / 36).toFixed(2) : (cart.subtotal.raw / 24).toFixed(2)
                                            ) : (cart.subtotal.raw / 12).toFixed(2)
                                        ) : null}
                                    </p>
                                </div>
                            </>
                        ) : null
                    }
                    <hr />
                    <div className="column">
                        <button className="btn btn-add" onClick={clicks.emptyCart}>Empty cart</button>
                        <Link to="/checkout" className="btn btn-add link">Checkout</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

// exporting the Cart component
export default Cart