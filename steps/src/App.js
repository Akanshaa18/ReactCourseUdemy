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
          <Message step={step}>{messages[step - 1]}</Message>
          <div className="buttons">
            <Button bgColor={"#C7C8CC"} click={handleClickPrev}>
              Previous
            </Button>
            <Button bgColor={"#C7C8CC"} click={handleClickNext}>
              Next
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default App;

function Message({ step, children }) {
  return (
    <p className="message">
      Step {step}: {children}
    </p>
  );
}
function Button({ bgColor, click, children }) {
  return (
    <button style={{ backgroundColor: bgColor }} onClick={click}>
      {children}
    </button>
  );
}
