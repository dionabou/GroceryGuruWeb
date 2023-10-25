import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component
import "../styles/SignUp.css";



function SignUp() {
  return (
    <div>
      <h1 className="page-title">Welcome to Groceryguru</h1>
      <div className="signup-container">
        <div className="SignUp-form">
          <h2>Sign Up or Sign In to Get Started</h2>
          <form>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
            <label htmlFor="zip">ZIP Code</label>
            <input type="text" id="zip" />
            <label htmlFor="hourlyRate">How much you value your time ($/hr)</label>
            <input type="text" id="hourlyRate" />
            <label htmlFor="carMpg">Car MPG</label>
            <input type="text" id="carMpg" />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" id="confirmPassword" />
            <label htmlFor=""></label>
            <button>Create Account</button>
          </form>
          <p>
            By signing up for a groceryguru account, you agree to our{' '}
            <a href="/privacy-policy">Privacy Policy</a> and{' '}
            <a href="/terms-of-service">Terms of Service</a>.
          </p>
          <p>Already have an account? <a href='./pages/Login'>Sign in</a></p>
        </div>
      </div>
      
    </div>
  );
}

export default SignUp;
