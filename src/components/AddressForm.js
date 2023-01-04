import React, { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'

// Importing the style file
import '../assets/css/AddressForm.css'

// Importing costume components
import Input from './Input'

// Importing the helper functions
import { fetchShippingContries, fetchSubDivisions, fetchShippingOptions } from '../assets/data/fetchingFunctions'

// Creating the AddressForm component
const AddressForm = ({ token, handleSubmit }) => {

    // Variable and state definition
    const [shippingCountries, setShippingCountries] = useState([])
    const [shippingCountry, setShippingCountry] = useState("")
    const [shippingRegions, setShippingRegions] = useState([])
    const [shippingRegion, setShippingRegion] = useState("")
    const [shippingOptions, setShippingOptions] = useState([])
    const [shippingOption, setShippingOption] = useState("")
    const [isWaiting, setIsWaiting] = useState(true)

    const firstName = useRef(null)
    const lastName = useRef(null)
    const address = useRef(null)
    const email = useRef(null)
    const city = useRef(null)
    const zip = useRef(null)

    const inputs = [
        {
            id: 1,
            name: "firstName",
            label: "First Name",
            required: true,
            icon: "user",
            type: "text",
            reference: firstName
        },
        {
            id: 2,
            name: "lastName",
            label: "Last Name",
            required: true,
            icon: "user",
            type: "text",
            reference: lastName
        },
        {
            id: 3,
            name: "address",
            label: "Address",
            required: true,
            icon: "address",
            type: "text",
            reference: address
        },
        {
            id: 4,
            name: "email",
            label: "Email",
            required: true,
            icon: "email",
            type: "email",
            reference: email
        },
        {
            id: 5,
            name: "city",
            label: "City",
            required: true,
            icon: "city",
            type: "text",
            reference: city
        },
        {
            id: 6,
            name: "postalCode",
            label: "ZIP / Postal code",
            required: true,
            icon: "city",
            type: "text",
            reference: zip
        },
    ]

    const countries = Object.entries(shippingCountries).map(([ code, name]) => ({id: code, label: name}))
    const regions = Object.entries(shippingRegions).map(([ code, name ]) => ({ id: code, label: name}))
    const options = shippingOptions.map(option => ({ id: option.id, label: `${option.description} - ${option.price.formatted_with_symbol}`}))

    // Variable and state definition end

    // useEffect functions start
    useEffect(() => {
        setShippingOption("")
        fetchShippingContries(token, setShippingCountries, setShippingCountry)
        setIsWaiting(true)
    }, [])

    useEffect(() => {
        setShippingOption("")
        if(shippingCountry) fetchSubDivisions(shippingCountry, setShippingRegions, setShippingRegion)
        setIsWaiting(true)
    }, [shippingCountry])

    useEffect(() => {
        setShippingOption("")
        if(shippingRegion) fetchShippingOptions(token, shippingCountry, shippingRegion, setShippingOptions, setShippingOption)
        setIsWaiting(true)
    }, [shippingRegion])

    useEffect(() => {
        if(shippingOption) setIsWaiting(false)
    }, [shippingOption])
    // useEffect functions end

    

    return (
        <form className="address-form-container" onSubmit={
            () => handleSubmit(
                { 
                    firstName: firstName.current.value, 
                    lastName: lastName.current.value,
                    address: address.current.value,
                    email: email.current.value,
                    city: city.current.value,
                    zip: zip.current.value,
                    shippingCountry,
                    shippingRegion,
                    shippingOption
                }
            )
        }>
            <h3>Shipping Address</h3>
            <div className="inputs">
                {inputs.map(input => (
                    <Input inputInformation={input} ref={input.reference} key={input.id} />
                ))}
                <div className="input-select">
                    <label htmlFor="country">Country*</label>
                    <select name="country" value={shippingCountry} onChange={e => setShippingCountry(e.target.value)}>
                        {
                            countries.map(country => (
                                <option value={country.id} key={country.id}>{country.label}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="input-select">
                    <label htmlFor="country">Region/State*</label>
                    <select name="country" value={shippingRegion} onChange={e => setShippingRegion(e.target.value)}>
                        {
                            regions.map(region => (
                                <option value={region.id} key={region.id}>{region.label}</option>
                            ))
                        }
                    </select>
                </div>
            </div>
            <div className="input-select full-width">
                <label htmlFor="country">Shipping Options</label>
                <select name="country" value={shippingOption} onChange={e => setShippingOption(e.target.value)}>
                    {
                        options.map(option => (
                            <option value={option.id} key={option.id}>{option.label}</option>
                        ))
                    }
                </select>
            </div>
            <div className="card-buttons active">
                <Link to="/cart" className='btn'>Back to Cart</Link>
                <button className="btn btn-add" type='submit' disabled={isWaiting}>Next Step</button>
            </div>
        </form>
    )
}

// exporting the component
export default AddressForm