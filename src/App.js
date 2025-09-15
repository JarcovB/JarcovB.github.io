import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import './components/Sidebar.css';
import './components/Calculator.css';
import './App.css';
import About from './pages/About';
import WeatherPage from './pages/wheather';
import Message from './components/Message';

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark-theme' : 'light-theme'}>
      <Router>
        <button
          className="sidebar-toggle"
          style={{ left: collapsed ? '5px' : '150px' }}
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? '☰' : '×'}
        </button>

        <Sidebar
          collapsed={collapsed}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

        <div className={`main-content${collapsed ? ' collapsed' : ''}`}>
          <Routes>
            <Route path="/" element={<Message />} />
            <Route path="/about" element={<About />} />
            <Route path="/weather" element={<WeatherPage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}
export default App;