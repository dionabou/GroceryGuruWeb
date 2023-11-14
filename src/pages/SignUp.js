import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/SignUp.css';

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    zip: '',
    hourlyRate: '',
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
    // Add your validation logic here
    if (validateForm()) {
      // Perform form submission
      console.log('Form submitted:', formData);
    }
  };

  const validateForm = () => {
    // Basic required validation
    const requiredFieldsFilled =
      formData.username &&
      formData.email &&
      formData.zip &&
      formData.hourlyRate &&
      formData.carMpg &&
      formData.password &&
      formData.confirmPassword;

    // MPG validation (positive number)
    const validMpg = !isNaN(formData.carMpg) && parseFloat(formData.carMpg) > 0;

    return requiredFieldsFilled && validMpg;
  };

  return (
    <div>
      <h1 className="page-title">Welcome to Groceryguru</h1>
      <div className="signup-container">
        <div className="SignUp-form">
          <h2>Sign Up or Sign In to Get Started</h2>
          <form onSubmit={handleSubmit}>
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

            <label htmlFor="zip">ZIP Code</label>
            <input
              type="text"
              id="zip"
              value={formData.zip}
              onChange={handleChange}
              required
            />

            <label htmlFor="hourlyRate">How much you value your time ($/hr)</label>
            <input
              type="text"
              id="hourlyRate"
              value={formData.hourlyRate}
              onChange={handleChange}
              required
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
            Already have an account? <Link to="../pages/Login.js">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
