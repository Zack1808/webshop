import React, { useRef } from "react";

// Importing the costume components
import Input from "../../Input/Input";
import Button from "../../Button/Button";

//importing the style file
import "./Newsteller.css";

// Creating the Newsteller component
const Newsteller = () => {
  // Setting up the refs
  const formRef = useRef();

  return (
    <div className="newsteller-container">
      <h1>Subscribe for our Newsteller</h1>
      <form ref={formRef}>
        <div className="form-inputs">
          <div className="inputs">
            <Input name="name" placeholder="Name" required type="text" />
            <Input name="email" placeholder="Email" required type="email" />
          </div>
          <textarea name="message" placeholder="Message"></textarea>
        </div>
        <Button type="submit" text="Send request" />
      </form>
    </div>
  );
};

// Exporting the Newsteller component
export default Newsteller;
