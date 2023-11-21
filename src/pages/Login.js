// Import necessary libraries and components
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Login.css';

// Define the Login component
function Login() {
  // Use the useNavigate hook to enable navigation
  const navigate = useNavigate();

  // Define formData state and handleChange function
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSignInClick = () => {
    // Access formData.username and formData.password as needed
    navigate('/Home');
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission
    // You can add your validation logic here before calling handleSignInClick
    if (validateForm()) {
      handleSignInClick();
    }
  };

  const validateForm = () => {
    // Implement your validation logic here
    // For example, check if the username and password meet your criteria
    return formData.username.trim() !== '' && formData.password.trim() !== '';
  };

  return (
    <div className="login-container">
      <h1 className="page-title">Welcome to Groceryguru</h1>

      <div className="login-form">
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="button-container">
            <button type="submit" className="signin-button"> Sign In </button>
          </div>
          <div className="forgot-password">
            <Link to="/UpdatePassword">Forgot Password</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
