import React from 'react'

// Importing the style file
import '../assets/css/Badge.css'

// Creating the Badge component
const Badge = ({ children, amount }) => {
    return (
        <div className="badge">
            {children}
            <div className={`display-amount ${amount && "amount-visible"}`}>
                {amount}
            </div>
        </div>
    )
}

// Exporting the Badge component
export default Badge;