import React from 'react';
import './NavBar.css'; // We'll create this file for styling

function NavBar() {
  return (
    <header>
      <nav className="navbar">
        {/* Logo/Brand */}
        <div className="navbar-brand">
          {/* If you have a logo image, you can use <img src="logo.png" alt="Growby Logo" /> */}
          <span>Growby</span>
        </div>

        {/* Navigation Links */}
        <ul className="navbar-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#partner">Partner</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#more">More</a></li>
        </ul>

        {/* Buttons */}
        <div className="navbar-buttons">
          <a href="#login" className="btn login-btn">Login</a>
          <a href="#dashboard" className="btn dashboard-btn">Dashboard</a>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
