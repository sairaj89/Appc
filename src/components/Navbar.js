import React from 'react';
import './Navbar.css'; 
import logo from '../images/1c.png'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" /> 
      </div>
      <ul className="left-links">
        <li><a href="#myaccount">My Account</a></li>
        <li><a href="#contactus">Contact Us</a></li>
      </ul>
      <ul className="nav-links">
        <li><a href="#home">About Us</a></li>
        <li><a href="#about">Our Story</a></li>
        <li><a href="#services">Sell on 1MDM</a></li>
        <li><a href="#contact">Pricing</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
