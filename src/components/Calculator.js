import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleCalculate = () => {
    try {
      // ⚠️ eval is voor demo, later kun je dit zelf parsen!
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <div className="card shadow">
        <div className="card-body">
          <input
            type="text"
            className="form-control mb-3 text-end"
            value={input}
            readOnly
          />
          <div className="row g-2">
            {["7", "8", "9", "/"].map((btn) => (
              <div className="col-3" key={btn}>
                <button className="btn btn-secondary w-100" onClick={() => handleClick(btn)}>
                  {btn}
                </button>
              </div>
            ))}
            {["4", "5", "6", "*"].map((btn) => (
              <div className="col-3" key={btn}>
                <button className="btn btn-secondary w-100" onClick={() => handleClick(btn)}>
                  {btn}
                </button>
              </div>
            ))}
            {["1", "2", "3", "-"].map((btn) => (
              <div className="col-3" key={btn}>
                <button className="btn btn-secondary w-100" onClick={() => handleClick(btn)}>
                  {btn}
                </button>
              </div>
            ))}
            {["0", ".", "=", "+"].map((btn) => (
              <div className="col-3" key={btn}>
                <button
                  className={`btn ${btn === "=" ? "btn-success" : "btn-secondary"} w-100`}
                  onClick={btn === "=" ? handleCalculate : () => handleClick(btn)}
                >
                  {btn}
                </button>
              </div>
            ))}
            <div className="col-12">
              <button className="btn btn-danger w-100" onClick={handleClear}>
                C
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
