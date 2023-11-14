import React from 'react'
import "../styles/Login.css";// Import the CSS file
import { Link, useNavigate } from 'react-router-dom';


function Login() {

    const navigate = useNavigate();

    const handleSignInClick = () => {
      // Navigate to the home page 
      navigate('/Home');
    };

    const handleSignUpClick = () => {
        // Navigate to the Sign Up page
        navigate('./pages/SignUp');
      };

  return (
    <div className="login-container">
      <h1 className="page-title">Welcome to Groceryguru</h1>

      <div className="login-form">
        <h2>Sign In</h2>
        <form>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
          </div>
          <div className="button-container">
         
            <button onClick={handleSignInClick} type="submit" className="signin-button">Sign In</button>
          </div>
          <div className="forgot-password">
            <a href='./pages/UpdatePassword'>Forgot Password?</a>
          </div>
        </form>
      </div>
    </div>
    
  );
}

export default Login;