import React, { useEffect, useState, useRef } from 'react'

// Importing the style file
import '../assets/css/AddressForm.css'

// Importing costume components
import Input from './Input'

// Importing the helper functions
import { fetchShippingContries, fetchSubDivisions, fetchShippingOptions } from '../assets/data/fetchingFunctions'

// Creating the AddressForm component
const AddressForm = ({ token }) => {

    // Variable and state definition
    const [shippingCountries, setShippingCountries] = useState([])
    const [shippingCoutry, setShippingCountry] = useState("")
    const [shippingRegions, setShippingRegions] = useState([])
    const [shippingRegion, setShippingRegion] = useState("")
    const [shippingOptions, setShippingOptions] = useState([])
    const [shippingOption, setShippingOption] = useState("")
    const [isWaiting, setIsWaiting] = useState(true)

    const name = useRef(null)
    const surname = useRef(null)
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
            reference: name
        },
        {
            id: 2,
            name: "lastName",
            label: "Last Name",
            required: true,
            icon: "user",
            type: "text",
            reference: surname
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

    // Variable and state definition end

    // useEffect functions start
    useEffect(() => {
        fetchShippingContries(token, setShippingCountries, setShippingCountry)
    }, [])

    useEffect(() => {
        if(shippingCoutry) fetchSubDivisions(shippingCoutry, setShippingRegion, setShippingRegion)
    }, [shippingCoutry])

    useEffect(() => {
        if(shippingRegion) fetchShippingOptions(token, shippingCoutry, shippingRegion, setShippingOptions, setShippingOption)
    }, [shippingRegion])

    useEffect(() => {
        if(shippingOption) setIsWaiting(false)
    }, [shippingOption])
    // useEffect functions end

    return (
        <form className="address-form-container">
            <h3>Shipping Address</h3>
            <div className="inputs">
                {inputs.map(input => (
                    <Input inputInformation={input} ref={input.reference} key={input.id} />
                ))}
            </div>
        </form>
    )
}

// exporting the component
export default AddressForm