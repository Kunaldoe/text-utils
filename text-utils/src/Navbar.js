import React from 'react';
import "./Navbar.css"
const Navbar = () => {
  return (
    <div>
      <ul>
        <li><a className="active" href="#home">Home</a></li>
        <li><a href="#news">News</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#about">About</a></li>
      </ul>
    </div>
  );
};

export default Navbar;