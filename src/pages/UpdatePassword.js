import React, { useState } from 'react';
import "../styles/Login.css";
import { useNavigate } from 'react-router-dom';

function UpdatePassword() {
  const navigate = useNavigate();

  // Define formData state and handleChange function
  const [formData, setFormData] = useState({
    newpassword: '',
    confirmpassword: '',
  });

  const [formErrors, setFormErrors] = useState({
    newpassword: '',
    confirmpassword: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });

    // Reset the error message when the user starts typing
    setFormErrors({
      ...formErrors,
      [e.target.id]: '',
    });
  };

  const handleUpdatePasswordClick = () => {
    if (validateForm()) {
      // Perform password update logic here
      navigate('/Login'); // Navigate to the SignUp page after updating the password
    }
  };

  const validateForm = () => {
    let valid = true;

    // Validate new password
    if (formData.newpassword.trim() === '') {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        newpassword: 'Please fill in the new password field.',
      }));
      valid = false;
    }

    // Validate confirm password
    if (formData.confirmpassword.trim() === '') {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        confirmpassword: 'Please fill in the confirm password field.',
      }));
      valid = false;
    }

    

    return valid;
  };

  return (
    <div className="login-container">
      <h1 className="page-title">Welcome to Groceryguru</h1>

      <div className="login-form">
        <h2>Update Password</h2>
        <form>
          <div className="form-group">
            <label htmlFor="newpassword">New Password</label>
            <input
              type="password" // Correct type for password
              id="newpassword"
              value={formData.newpassword}
              onChange={handleChange}
              required
            />
            <span className="error-message">{formErrors.newpassword}</span>
          </div>
          <div className="form-group">
            <label htmlFor="confirmpassword">Confirm Password</label>
            <input
              type="password" // Correct type for password
              id="confirmpassword"
              value={formData.confirmpassword}
              onChange={handleChange}
              required
            />
            <span className="error-message">{formErrors.confirmpassword}</span>
          </div>
          <div className="button-container">
            <button onClick={handleUpdatePasswordClick} type="button" className="update-button">Update Password</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdatePassword;
