import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './SellerLogin.css';

const SellerLogin = () => {
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
    // Validate form data here if needed
    
    if (formData.password !== '123456789') {
      alert('Wrong password! Please enter the correct password.');
      return;
    }
    // Simulate successful login
<<<<<<< HEAD
    navigate('/create');
=======
    navigate('/seller');
>>>>>>> 6d8d85cb67f3e6ee1a1ef0d0a01f6c4cd01d049b
  }

  return (
    <div className="login-main">
      <div className="container">
        <div className="header">
          <div className="text">SELLER</div>
          <div className="underline"></div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="inputs">
     
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

export default SellerLogin;
