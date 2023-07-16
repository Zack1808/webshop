import React, { useRef, useState, useEffect } from "react";

// Importing the costume components
import Input from "../../Input/Input";
import Dropdown from "../../Dropdown/Dropdown";
import Button from "../../Button/Button";

// Importing the fetching functions
import {
  fetchOptions,
  fetchShippingCountries,
  fetchSubdivisions,
} from "../../../api/fetchLocation";

// Importing the style file
import "./AddressForm.css";

// Creating the AddressForm component
const AddressForm = ({ setStep, token, setData }) => {
  // Setting up the state
  const [country, setCountry] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [subdivision, setSubdivision] = useState([]);
  const [selectedSubdivision, setSelectedSubdivision] = useState("");
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");

  // Setting up the refs
  const name = useRef();
  const surname = useRef();
  const email = useRef();
  const address = useRef();
  const city = useRef();
  const zip = useRef();

  // Fetching the countries
  useEffect(() => {
    fetchShippingCountries(token, setCountry);

    // eslint-disable-next-line
  }, [token]);

  // Fetching the regions
  useEffect(() => {
    setSelectedSubdivision("");
    setSelectedOption("");
    fetchSubdivisions(selectedCountry, setSubdivision);

    // eslint-disable-next-line
  }, [selectedCountry]);

  // Fetching the shipping options
  useEffect(() => {
    setSelectedOption("");
    fetchOptions(token, selectedCountry, selectedSubdivision, setOptions);

    // eslint-disable-next-line
  }, [selectedSubdivision]);

  // Function taht will handle the submition of the form
  const handleSubmit = (e) => {
    e.preventDefault();
    setData({
      firstName: name.current.value,
      lastName: surname.current.value,
      address: address.current.value,
      email: email.current.value,
      city: city.current.value,
      zip: zip.current.value,
      shippingCountry: selectedCountry,
      shippingRegion: selectedSubdivision,
      shippingOption: selectedOption,
    });
    setStep((prevState) => prevState + 1);
  };

  return (
    <form className="address-container" onSubmit={handleSubmit}>
      <div className="input-grid">
        <Input
          ref={name}
          name="name"
          placeholder="First Name"
          type="text"
          required
        />
        <Input
          ref={surname}
          name="surname"
          placeholder="Last Name"
          type="text"
          required
        />
        <Input
          ref={email}
          name="email"
          placeholder="Email address"
          type="email"
          required
        />
        <Input
          ref={address}
          name="address"
          placeholder="Address"
          type="text"
          required
        />
        <Input ref={city} name="city" placeholder="City" type="text" required />
        <Input
          ref={zip}
          name="zip"
          placeholder="Zip Code"
          type="text"
          required
        />
        <Dropdown
          dark
          placeholder="State"
          items={country}
          hasSelection={selectedCountry !== ""}
          setSelection={setSelectedCountry}
        />
        <Dropdown
          dark
          placeholder="Region"
          items={subdivision}
          hasSelection={selectedSubdivision !== ""}
          setSelection={setSelectedSubdivision}
        />
      </div>
      <Dropdown
        dark
        placeholder="Shipping options"
        items={options}
        hasSelection={selectedOption !== ""}
        setSelection={setSelectedOption}
      />
      <div className="buttons">
        <Button type="page-link" text="Back to Cart" link="/cart" />
        {selectedOption !== "" && <Button type="submit" text="Next step" />}
      </div>
    </form>
  );
};

// Exporting the AddressForm component
export default AddressForm;
