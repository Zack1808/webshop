import React, { useState } from "react";
import { UilAngleLeft, UilAngleRight } from "@iconscout/react-unicons";

// Importing the style file
import "./Carosel.css";

// Creating the Carosel component
const Carosel = ({ images = [] }) => {
  // Setting up the state
  const [active, setActive] = useState(0);

  // Function that will display the previous image
  const setPrevImage = () => {
    setActive((prevState) => {
      if (prevState === 0) return images.length - 1;
      return prevState - 1;
    });
  };

  // Function that will display the next image
  const setNextImage = () => {
    setActive((prevState) => {
      if (prevState === images.length - 1) return 0;
      return prevState + 1;
    });
  };

  return (
    <div className="carosel-container">
      <div className="displayed-image">
        {images.length > 1 && (
          <div className="button-left" onClick={setPrevImage}>
            <UilAngleLeft />
          </div>
        )}
        {images.map((image, index) => {
          return (
            <img
              key={image.id}
              src={image.url}
              alt=""
              className={active === index ? "active" : ""}
            />
          );
        })}
        {images.length > 1 && (
          <div className="button-right" onClick={setNextImage}>
            <UilAngleRight />
          </div>
        )}
      </div>
      <div className="image-select">
        {images.map((image, index) => {
          return (
            <div
              className={`button ${active === index ? "active" : ""}`}
              key={image.id}
              onClick={() => setActive(index)}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

// Exporting the Carosel component
export default Carosel;
