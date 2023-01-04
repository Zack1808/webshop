import React, { useEffect, useState } from 'react'

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
    // useEffect functions end
    console.log(shippingCoutry, shippingRegion, shippingOption)

    return (
        <form className="address-form-container">
            <h3>Shipping Address</h3>
        </form>
    )
}

// exporting the component
export default AddressForm