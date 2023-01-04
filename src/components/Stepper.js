import React from 'react'
import { UilCheck } from '@iconscout/react-unicons'

// Importing the style file
import '../assets/css/Stepper.css'

// Creating the Stepper component 
const Stepper = ({ step, steps }) => {
    return (
        <div className="stepper">
            {
                steps.map(s => (
                    <React.Fragment key={s.id}>
                        {s.id > 1 && <hr />}
                        <div className="step">
                            <span className={step >= s.id && `active`}>
                                {
                                    step <= s.id ? s.id : <UilCheck />
                                }
                            </span>
                            <small>{s.name}</small>
                        </div>
                    </React.Fragment>
                ))
            }
        </div>
    )
}

// exporting the component 
export default Stepper