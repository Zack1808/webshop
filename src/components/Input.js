import React, { forwardRef } from 'react'
import { UilUser, UilHome, UilAt, UilPostcard } from '@iconscout/react-unicons'

// Importing the style file
import '../assets/css/Input.css'

// Creating the Input component
const Input = forwardRef(({ inputInformation }, ref) => {

    const renderIcon = () => {
        if(inputInformation.icon === "user") return <UilUser />
        else if (inputInformation.icon === "address") return <UilHome />
        else if (inputInformation.icon === "email") return <UilAt />
        return <UilPostcard />
    }

    return (
        <div className="inputs-container">
            <label htmlFor={inputInformation.name}>{inputInformation.label}{inputInformation.required && "*"}</label>
            <div className="input-field">
                {renderIcon()}
                <input type={inputInformation.type} name={inputInformation.name} ref={ref} required={inputInformation.required} placeholder={inputInformation.label}  />
            </div>
        </div>
    )
})

// Exporting the component
export default Input