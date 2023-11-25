import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/SignUp.css';
import '../pages/Home.js';

const SignUp = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    zip: '',
    hourlyRate: '',
    make: '',
    model: '',
    year: '',
    carMpg: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      // Navigate to the home page
      navigate("Home");
    }
  };

  const validateForm = () => {
    // Basic required validation
    const requiredFieldsFilled =
      formData.username &&
      formData.email &&
      formData.address &&
      formData.zip &&
      formData.hourlyRate &&
      formData.make &&
      formData.model &&
      formData.year &&
      formData.carMpg &&
      formData.password &&
      formData.confirmPassword;

    // MPG validation (positive number)
    const validMpg = !isNaN(formData.carMpg) && parseFloat(formData.carMpg) > 0;

    // Hourly rate validation (positive number)
    const validHourlyRate = !isNaN(formData.hourlyRate) && parseFloat(formData.hourlyRate) > 0;

    // Year validation (four-digit number)
    const validYear = /^\d{4}$/.test(formData.year);

    return requiredFieldsFilled && validMpg && validHourlyRate && validYear;
  };

  return (
    <div>
      <h1 className="page-title">Welcome to Groceryguru</h1>
      <div className="signup-container">
        <div className="SignUp-form">
          <h2>Sign Up or Sign In to Get Started</h2>
          <form onSubmit={handleSubmit}>
            {/* Your form inputs */}
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={formData.username}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            
          <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              value={formData.address}
              onChange={handleChange}
              required
            />

            <label htmlFor="zip">ZIP Code</label>
            <input
              type="text"
              id="zip"
              value={formData.zip}
              onChange={handleChange}
              required
            />

            <label htmlFor="make">Car Make</label>
            <input
              type="text"
              id="make"
              value={formData.make}
              onChange={handleChange}
              required
            />

            <label htmlFor="model">Car Model</label>
            <input
              type="text"
              id="model"
              value={formData.model}
              onChange={handleChange}
              required
            />

            <label htmlFor="year">Car Year</label>
            <input
              type="text"
              id="year"
              value={formData.year}
              onChange={handleChange}
              required
              pattern="\d{4}" // Four-digit number
            />
            <small>Enter a valid four-digit year (e.g., 2022)</small>

            <label htmlFor="hourlyRate">How much you value your time ($/hr)</label>
            <input
              type="text"
              id="hourlyRate"
              value={formData.hourlyRate}
              onChange={handleChange}
              required
              pattern="\d+(\.\d{1,2})?"
            />

            <label htmlFor="carMpg">Car MPG</label>
            <input
              type="text"
              id="carMpg"
              value={formData.carMpg}
              onChange={handleChange}
              required
              pattern="\d+(\.\d{1,2})?" // Accepts positive numbers with up to 2 decimal places
            />
            <small>Enter a valid MPG (e.g., 25 or 30.5)</small>

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />

            <label htmlFor=""></label>
            <button type="submit">Create Account</button>
          </form>
 
          <p>
            By signing up for a groceryguru account, you agree to our{' '}
            <a href="/privacy-policy">Privacy Policy</a> and{' '}
            <a href="/terms-of-service">Terms of Service</a>.
          </p>
          <p>
          Already have an account? <a onClick={() => navigate("Login")}>Sign in</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
