import React, { useState } from 'react';
import { UilAngleLeftB, UilAngleRightB  } from '@iconscout/react-unicons'

// Importing the style file
import '../assets/css/Carosel.css'

// Creating the Carosel component 
const Carosel = ({ images }) => {

    // Setting up state
    const [selectedIndex, setSelectedIndex] = useState(0);

    // Function that will select the next image 
    const nextImage = () => {
        let counter = selectedIndex;
        if(counter < images.length - 1) {
            counter++
        }
        else counter = 0;
        setSelectedIndex(counter);
    }

    // Function that will select the previous image 
    const previousImage = () => {
        let counter = selectedIndex;
        if(counter > 0) {
            counter--;
        }
        else counter = images.length - 1;
        setSelectedIndex(counter);
    }

    return (
        <div className="carosel-container">
            <div className="carosel-image" style={{backgroundImage: `url(${images[selectedIndex].url})`}}>
                {
                    images.length !== 1 ? (
                        <>
                            <button className="left-slider" onClick={previousImage}>
                                <UilAngleLeftB size="50" />
                            </button>
                            <button className="right-slider" onClick={nextImage}>
                                <UilAngleRightB size="50" />
                            </button>
                        </>
                    ) : null
                }
            </div>
        </div>
    )
}

// Exporting the carosel component
export default Carosel