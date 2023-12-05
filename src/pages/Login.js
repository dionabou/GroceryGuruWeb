import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Login.css';
import { addPosts } from '../api/ApiLog.js';

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSignInClick = async () => {
    try {
      const response = await addPosts(formData.username, formData.password);

      console.log('User logged in:', response);

      // Reset form data
      setFormData({
        username: '',
        password: '',
      });

      // Clear the error message
      setError('');

      // Navigate to the home page
      navigate('/Home');
    } catch (error) {
      console.error('', error);
      setError(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your validation logic here before calling handleSignInClick
    if (validateForm()) {
      handleSignInClick();
    }
  };

  const validateForm = () => {
    // Implement your validation logic here
    return formData.username.trim() !== '' && formData.password.trim() !== '';
  };

  return (
    <div className="login-container">
      <h1 className="page-title">Welcome Back to Groceryguru</h1>

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
          {error && <div className="error-message error-message-red">{error}</div>}
          <div className="button-container">
            <button type="submit" className="signin-button">
              Sign In
            </button>
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
