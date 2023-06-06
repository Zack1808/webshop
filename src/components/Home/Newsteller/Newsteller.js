import React, { useRef } from "react";
import eamiljs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UilGithub, UilLinkedin } from "@iconscout/react-unicons";

// Importing context
import { useTheme } from "../../../context/themeContext";

// Importing the costume components
import Input from "../../Input/Input";
import Button from "../../Button/Button";

//importing the style file
import "./Newsteller.css";

// Creating the Newsteller component
const Newsteller = () => {
  // Setting up the refs
  const formRef = useRef();

  // Setting up the context
  const dark = useTheme();

  // Function that will handle the submition of the form
  const handleEmail = (e) => {
    e.preventDefault();

    eamiljs
      .sendForm(
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_EMAIL_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_EMAIL_PUBLIC_KEY
      )
      .then(
        (result) => {
          toast.success("Message sent", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: true,
            progress: undefined,
            theme: dark ? "dark" : "light",
          });
        },
        (error) => {
          toast.error(error, {
            position: "top-center",
            autoClose: false,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: true,
            progress: undefined,
            theme: dark ? "dark" : "light",
          });
        }
      );

    e.target.reset();
  };

  return (
    <div className="newsteller-container">
      <h1>Subscribe for our Newsteller</h1>
      <form ref={formRef} onSubmit={handleEmail}>
        <div className="form-inputs">
          <div className="inputs">
            <Input name="name" placeholder="Name" required type="text" />
            <Input name="email" placeholder="Email" required type="email" />
          </div>
          <textarea name="message" placeholder="Message"></textarea>
        </div>
        <Button type="submit" text="Send request" />
      </form>
      <div className="social-links">
        <a href="https://github.com/Zack1808" target="_blank" rel="noreferrer">
          <UilGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/jean-pierre-novak-2425a7218/"
          target="_blank"
          rel="noreferrer"
        >
          <UilLinkedin />
        </a>
      </div>
    </div>
  );
};

// Exporting the Newsteller component
export default Newsteller;
