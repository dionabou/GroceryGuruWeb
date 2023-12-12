import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/SignUp.css';
import { addPosts } from '../api/Api.js';

const SignUp = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    streetAddress: '',
    zipcode: '',
    userTimeValue: '',
    make: '',
    model: '',
    year: '',
    mpg: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [validZipcode, setValidZipcode] = useState(true);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));

    // Check if passwords match when the confirm password field changes
    if (id === 'confirmPassword') {
      setPasswordMatch(value === formData.password);
    }

    // Check if the entered ZIP code is part of the accepted list
    if (id === 'zipcode') {
      setValidZipcode(['45202', '45203', '45204', '45205', '45206', '45207', '45208', '45209', '45211', '45212', '45213', '45214', '45215', '45216', '45217', '45218', '45219', '45220', '45223', '45224', '45225', '45226', '45227', '45229', '45230', '45231', '45232', '45233', '45236', '45237', '45238', '45239', '45240', '45241', '45242', '45243', '45244', '45245', '45246', '45247', '45248', '45249', '45251', '45252', '45255'].includes(value));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await addPosts(
          formData.username,
          formData.email,
          formData.streetAddress,
          formData.zipcode,
          formData.userTimeValue,
          formData.make,
          formData.model,
          formData.year,
          formData.mpg,
          formData.password,
          formData.confirmPassword
        );

        console.log('User registered:', response);

        // Reset form data
        setFormData({
          username: '',
          email: '',
          streetAddress: '',
          zipcode: '',
          userTimeValue: '',
          make: '',
          model: '',
          year: '',
          mpg: '',
          password: '',
          confirmPassword: '',
        });

        // Clear the error message
        setError('');

        // Navigate to the home page
        navigate('Home');
      } catch (error) {
        console.error('', error);
        setError(error.message);
      }
    }
  };

  const validateForm = () => {
    // Basic required validation
    const requiredFieldsFilled =
      formData.username &&
      formData.email &&
      formData.streetAddress &&
      formData.zipcode &&
      formData.userTimeValue &&
      formData.make &&
      formData.model &&
      formData.year &&
      formData.mpg &&
      formData.password &&
      formData.confirmPassword;

    // MPG validation (positive number)
    const validmpg = !isNaN(formData.mpg) && parseFloat(formData.mpg) > 0;

    // Hourly rate validation (positive number)
    const validuserTimeValue = !isNaN(formData.userTimeValue) && parseFloat(formData.userTimeValue) > 0;

    // Year validation (four-digit number)
    const validYear = /^\d{4}$/.test(formData.year);

    // Zipcode validation (check if it's in the accepted list)
    const validZipcode = ['45202', '45203', '45204', '45205', '45206', '45207', '45208', '45209', '45211', '45212', '45213', '45214', '45215', '45216', '45217', '45218', '45219', '45220', '45223', '45224', '45225', '45226', '45227', '45229', '45230', '45231', '45232', '45233', '45236', '45237', '45238', '45239', '45240', '45241', '45242', '45243', '45244', '45245', '45246', '45247', '45248', '45249', '45251', '45252', '45255'].includes(formData.zipcode);

    return requiredFieldsFilled && validmpg && validuserTimeValue && validYear && validZipcode && passwordMatch && validZipcode;
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

            <label htmlFor="streetAddress">Street Address</label>
            <input
              type="text"
              id="streetAddress"
              value={formData.streetAddress}
              onChange={handleChange}
              required
            />

            <label htmlFor="zipcode">ZIP Code</label>
            <input
              type="text"
              id="zipcode"
              value={formData.zipcode}
              onChange={handleChange}
              required
            />
            {!validZipcode && <small className="error-message">Please enter a valid ZIP code</small>}

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
              pattern="\d{4}"
            />
            <small>Enter a valid four-digit year (e.g., 2022)</small>

            <label htmlFor="mpg">Car MPG</label>
            <input
              type="text"
              id="mpg"
              value={formData.mpg}
              onChange={handleChange}
              required
              pattern="\d+(\.\d{1,2})?"
            />
            <small>Enter a valid MPG (e.g., 25 or 30.5)</small>

            <label htmlFor="userTimeValue">How much you value your time ($/hr)</label>
            <input
              type="text"
              id="userTimeValue"
              value={formData.userTimeValue}
              onChange={handleChange}
              required
              pattern="\d+(\.\d{1,2})?"
            />

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
            {!passwordMatch && <small className="error-message">Passwords do not match</small>}
            <label htmlFor=" "></label>
            <button type="submit">Create Account</button>
          </form>

          <div>
            <div className="SignUp-form">
              {error && <div className="error-message error-message-red">{error}</div>}
            </div>
          </div>

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
