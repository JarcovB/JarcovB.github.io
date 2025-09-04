import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Calculator.css";

function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleBackspace = () => {
  setInput(input.slice(0, -1));
};

  const handleCalculate = () => {
    try {
      // ⚠️ eval is voor demo, later kun je dit zelf parsen!
      // eslint-disable-next-line 
      setInput(eval(input).toString());
    } 
    catch (error) {
      setInput("Error");
    }
  };

useEffect(() => {
  const handleKeyPress = (event) => {
    if (!isNaN(event.key) || ["+", "-", "*", "/", "%", "."].includes(event.key)) {
      handleClick(event.key);
    } else if (event.key === "Enter") {
      handleCalculate();
    } else if (event.key === "Backspace") {
      handleBackspace();
    } 
  };

  window.addEventListener("keydown", handleKeyPress);

  return () => {
    window.removeEventListener("keydown", handleKeyPress);
  };
});

  return (
    <div className="calculator">
      
            <input
              type="text"
            className="calc-display"
            value={input}
            readOnly
          />
          <div className="row g-2">
             {["C", "%", "⌫", "/"].map((btn) => (
              <div className="col-3" key={btn}>
                <button className="operator-btn"   onClick={() => {
          if (btn === "C") return handleClear();
          if (btn === "⌫") return handleBackspace();
          return handleClick(btn);
        }}>
                  {btn}
                </button>
                
              </div>
            ))}
            {["7", "8", "9", "*"].map((btn) => (
              <div className="col-3" key={btn}>
                <button className={`btn ${btn === "*" ? "operator-btn" : "number-btn"} `} onClick={() => handleClick(btn)}>
                  {btn}
                </button>
                
              </div>
            ))}
            {["4", "5", "6", "-"].map((btn) => (
              <div className="col-3" key={btn}>
                  <button className={`btn ${btn === "-" ? "operator-btn" : "number-btn"} `} onClick={() => handleClick(btn)}>
                  {btn}
                </button>
              </div>
            ))}
            {["1", "2", "3", "+"].map((btn) => (
              <div className="col-3" key={btn}>
                  <button className={`btn ${btn === "+" ? "operator-btn" : "number-btn"} `} onClick={() => handleClick(btn)}>
                  {btn}
                </button>
              </div>
            ))}
            {["00","0", ".", "="].map((btn) => (
              <div className="col-3" key={btn}>
                <button
                  className={`btn ${btn === "=" ? "equal-btn" : "number-btn"} `}
                  onClick={btn === "=" ? handleCalculate : () => handleClick(btn)}
                >
                  {btn}
                </button>
              </div>
            ))}
        
          </div>
        </div>
      
    
  );
}

export default Calculator;
