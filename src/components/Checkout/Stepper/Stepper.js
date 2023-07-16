import React from "react";
import { UilCheck } from "@iconscout/react-unicons";

// Importing the style file
import "./Stepper.css";

// Creating the Stepper component
const Stepper = ({ step, steps = [] }) => {
  return (
    <div className="stepper-container">
      {steps &&
        steps.map((stp) => {
          return (
            <React.Fragment key={stp.id}>
              {stp.id > 1 && <hr />}
              <div className="step">
                <span className={step >= stp.id ? "active" : ""}>
                  {step <= stp.id ? stp.id : <UilCheck />}
                </span>
                <small>{stp.name}</small>
              </div>
            </React.Fragment>
          );
        })}
    </div>
  );
};

// Exporting the Stepper component
export default Stepper;
