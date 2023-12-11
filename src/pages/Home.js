import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../styles/Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <nav className="home-nav">
        <Link to="/trip-history">Trip History</Link>
        <Link to="/favorites">Favorites</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/about">About</Link>
        <Link to="/logout">Log Out</Link>
      </nav>

      <div className="home-container">
        <header className="home-header">
          <h1>Welcome to GroceryGuru</h1>
          <p>Your Ultimate Grocery Shopping Companion</p>
        </header>

        <section className="home-intro">
          <p>
            Embark on a smarter, more efficient grocery shopping journey with us! At GroceryGuru,
            we're dedicated to revolutionizing the way you shop for groceries, putting the power of optimization right at your fingertips.
            Navigate the aisles effortlessly by factoring in store prices,
            distances, gas costs, and your precious time. Our platform empowers you to make informed
            choices, ensuring you discover the best places to buy groceries while saving both time
            and money.
          </p>
          <Link to="/store_selector" className="cta-button">Start Your Trip</Link>
        </section>
      </div>
    </div>
  );
};

export default Home;
