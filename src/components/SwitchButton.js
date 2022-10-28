import React from 'react'
import { motion } from 'framer-motion'

// Importing the style file
import '../assets/css/SwitchButton.css'

// Creating the handle motion options
const spring = {
    type: "spring",
    stiffness: 600,
    damping: 150,
    duration: .6
}

// Creating the wariants for darkmode toggle
const dark = {
    backgroundColor: "rgb(60, 60, 52)",
    boxShadow: "inset -3px -4px 0 1px #f3d076",
    rotate: [0, 360]
}

// Creating the wariants for lightmode toggle
const light = {
    backgroundColor: "rgb(250, 244, 187)",
    rotate: [360, 0]
}

// Creating the SwitchButton component
const SwitchButton = ({ toggle, setToggle}) => {

    return (
        <div className='switch' data-toggle={toggle} onClick={() => setToggle(!toggle)}>
            <motion.div className='handle' layout transition={spring} animate={toggle ? dark : light}/>
        </div>
    )
}

// Exporting the SwitchButton component
export default SwitchButton