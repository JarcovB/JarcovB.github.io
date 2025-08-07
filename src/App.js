import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import './components/Sidebar.css';
import './App.css';

import About from './pages/About';
import Message from './components/Message';

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Router>
      <div className={darkMode ? 'dark-theme' : 'light-theme'}>
        {/* Toggle knop buiten de sidebar */}
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
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
