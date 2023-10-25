import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Home.css"; // Import the CSS file


const Home = () => {
  return (
    <div>
    <nav className="home">
      <Link to="/home">Home</Link>
      <Link to="/my-trip">My Trip</Link>
      <Link to="/trip-history">Trip History</Link>
      <Link to="/favorites">Favorites</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/about">About</Link>
      <Link to="/logout">Log Out</Link>
    </nav>
  
    </div>
  );
};

export default Home;
