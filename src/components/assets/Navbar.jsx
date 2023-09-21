import React, { useState } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`navbar ${isSidebarOpen ? 'active' : ''}`}>
      <div className="logo">
        <img src="logo.png" alt="Logo" />
        <h1>UNIX</h1>
      </div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/polls">Polls</a></li>
        <li><a href="/results">Results</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      <div className="navbar-toggler" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faBars} /> {/* Hamburger icon */}
      </div>
    </div>
  );
}

export default Navbar;
