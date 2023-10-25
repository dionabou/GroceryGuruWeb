import React from 'react';
import "../styles/Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <img src="../assets/logo-png.png" alt="" className="logo" />
      <span className="logo-text">GroceryGuru</span>
    </div>
  );
}

export default Navbar;