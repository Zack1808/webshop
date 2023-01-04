import React from 'react'
import { UilCheck } from '@iconscout/react-unicons'

// Creating the Stepper component 
const Stepper = ({ step, steps }) => {
    return (
        <div className="stepper">
            {
                steps.map(s => (
                    <>
                        {s.id > 1 && <hr />}
                        <div className="step">
                            <span className={step >= s.id && `active`}>
                                {
                                    step <= s.id ? s.id : <UilCheck />
                                }
                            </span>
                            <small>{s.name}</small>
                        </div>
                    </>
                ))
            }
        </div>
    )
}

// exporting the component 
export default Stepper