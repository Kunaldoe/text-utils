import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ mode, toggleMode }) => {
  let navbarClass = 'divnav';

  if (mode === 'dark') {
    navbarClass += ' dark-mode';
  }

  const handleToggle = () => {
    toggleMode(); // Call the toggleMode function passed from the App component
  };

  return (
    <div className={navbarClass}>
      <ul className="navbar-list">
        <li><Link className="active" to="/">Home</Link></li>
        <li><Link to="/news">News</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/about">About</Link></li>
        <li className="toggle-mode-btn">
          <div className="form-check form-switch">
            <input
              className="form-check-input darkcs"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={handleToggle}
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
