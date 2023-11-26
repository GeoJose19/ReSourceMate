import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Adminlog.css';

const Adminlog = () => {
  let navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  function handleChange(event) {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Get the entered email from the form data
    const enteredEmail = formData.email;
  
    // Check if the entered email is not 'geojosep123@gmail.com'
    if (enteredEmail !== 'geojosep123@gmail.com') {
      alert('Invalid email');
      return; // Stop the submission process
    }
    navigate('/choice');
  }

  return (
    <div className="login-main">
      <div className="container">
        <div className="header">
          <div className="text">ADMIN</div>
          <div className="underline"></div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="inputs">
            <div className="input">
              <input type="email" name="email" placeholder="Email id" onChange={handleChange} />
            </div>
            <div className="input">
              <input type="password" name="password" placeholder="Password" onChange={handleChange} />
            </div>
          </div>
          <div className="submit-container">
            <button type="submit" className="submit">
              Login
            </button>
          </div>
        </form>
        <div className="register-link">
          New User? <Link to="/register">Register Here</Link>
        </div>
      </div>
    </div>
  );
};

export default Adminlog;
