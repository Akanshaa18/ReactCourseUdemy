import React from "react";
import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

const App = () => {
  const [step, setStep] = useState(1);
  const [open, setOpen] = useState(true);
  const handleClickNext = () => {
    if (step < 3) {
      setStep((s) => s + 1);
    }
  };
  const handleClickPrev = () => {
    if (step > 1) {
      setStep((s) => s - 1);
    }
  };
  const handleClose = () => {
    setOpen((is) => !is);
  };
  return (
    <>
      <button className="close" onClick={handleClose}>
        &times;
      </button>
      {open && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 && "active"}>1</div>
            <div className={step >= 2 && "active"}>2</div>
            <div className={step === 3 && "active"}>3</div>
          </div>
          <p className="message">
            Step
            {step === 1 && " " + step + ": " + messages[step - 1]}
            {step === 2 && " " + step + ": " + messages[step - 1]}
            {step === 3 && " " + step + ": " + messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#C7C8CC" }}
              onClick={handleClickPrev}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#C7C8CC" }}
              onClick={handleClickNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
