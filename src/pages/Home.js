import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import "../styles/Home.css"; // Import the CSS file

const Home = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  return (
    <div>
      <nav className="home">
        <Link to="/home">Home</Link>
        <Link to="/BuildingList">New Trip</Link>
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
