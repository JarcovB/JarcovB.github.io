import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

function Sidebar({ collapsed, darkMode, setDarkMode }) {
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
          </ul>

          {/* Theme toggle */}
          <div className="theme-toggle-wrapper mt-auto">
            <button
              className="btn btn-sm btn-outline-light mt-4"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? '☀️ Licht' : '🌙 Donker'}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Sidebar;
