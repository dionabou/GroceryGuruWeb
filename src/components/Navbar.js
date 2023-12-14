import React from 'react';
import "../styles/Navbar.css";
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  return (
    <header>
      <div className='navbar'>
        <img src="../assets/logo-png.png" alt="" className="logo" />
        <span className="logo-text">GroceryGuru</span>
      </div>

      <nav className="home-nav">
        <Link to="/home">Home</Link>
        <Link to="/newTrip">New Trip</Link>
        <Link to="/store_selector">Store Selector</Link>
        <Link to="/favorites">Favorite Products</Link>
        <Link to="/about">About</Link>
        <Link to="/logout">Log Out</Link>
      </nav>
    </header>

);
}

export default Navbar;