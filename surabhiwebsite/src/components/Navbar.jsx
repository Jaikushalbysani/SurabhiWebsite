import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">
      <img src={logo} alt="Surabhi Logo" />
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/events">Events</Link>
        <Link to="/schedule">Schedules</Link>
        <Link to="/login" style={{ textDecoration: 'none' }}>
          <button className="login-button">LOGIN</button>
        </Link>
        <Link to="/register" style={{ textDecoration: 'none' }}>
          <button className="reg-button">REGISTER</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar; 