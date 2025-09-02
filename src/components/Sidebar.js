import React, { useState } from "react";
import './Sidebar.css';
import Calculator from "./Calculator";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';

function Sidebar({ collapsed, darkMode, setDarkMode }) {
   const [showCalculator, setShowCalculator] = useState(false);

  return (
    <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      {!collapsed && (
        <>
          <ul className="nav flex-column mt-4">
            <li className="nav-item">
              <Link className="nav-link" to="/">🏠 Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">ℹ️ About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">✉️ Contact</Link>
            </li>
             <li className="nav-item">
          <button
            className="btn btn-sm btn-outline-light mt-3 w-100"
            onClick={() => setShowCalculator(true)}
          >
            🧮 Calculator
          </button>
        </li>
          </ul>
          
           {showCalculator && (
        <div className="modal fade show d-block" tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Calculator</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowCalculator(false)}
                ></button>
              </div>
              <div className="modal-body">
                <Calculator />
              </div>
            </div>
          </div>

          {/* Achtergrond klikbaar maken */}
          <div
            className="modal-backdrop fade show"
            onClick={() => setShowCalculator(false)}
          ></div>
        </div>
      )}

      <div className="theme-toggle-wrapper mt-auto">
  <div className="form-check form-switch mt-4">
    <input
      className="form-check-input"
      type="checkbox"
      id="themeSwitch"
      checked={darkMode}
      onChange={() => setDarkMode(!darkMode)}
    />
    <label className="form-check-label" htmlFor="themeSwitch">
      {darkMode ? '☀️ Licht' : '🌙 Donker'}
    </label>
  </div>
</div>
        </>
      )}
    </div>
  );
}

export default Sidebar;
