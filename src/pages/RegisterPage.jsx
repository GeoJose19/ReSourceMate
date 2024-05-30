import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import "./RegisterPage.css"; // Ensure you have the appropriate CSS file imported
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';
import { supabase } from '../config/supabaseClient';

const RegisterPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: ''
  });

  const [formError, setFormError] = useState(null);

  function handleChange(event) {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
  
    try {
      if (!formData.fullName || !formData.email || !formData.password) {
        setFormError('Please fill in all the fields.');
        return;
      }
      
      const { user, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            full_name: formData.fullName
          }
        }
      });
      console.log("FORM DATA 123:",formData)
      if (error) {
        throw error;
      }
      console.log("THE USER: ",user)
      
        
        setFormError(null);
        alert('Check your email for verification link');
        
        // Insert user details into the 'users' table
        const { data: userData, error: userError } = await supabase
          .from('users')
          .insert([
            {
              name: formData.fullName,
              
              email: formData.email,

              password: formData.password
              // You can add more fields here if needed
            }
          ]);console.log(formData.fullName)
  
        if (userError) {
          throw userError;
        }
  
        if (userData) {
          console.log('User data inserted:', userData);
        } else {
          console.log('No user data received');
        }
  
        //  navigate('/login');
      
    } catch (error) {
      alert(error.message);
    }
  }
  


  return (
    <div className="register-main">
      <div className="container">
        <div className="header">
          <div className="text">Register</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          <div className="input">
            <img src={email_icon} alt="" />
            <input type="text" placeholder="Full Name" name='fullName' onChange={handleChange} />
          </div>
          <div className="input">
            <img src={email_icon} alt="" />
            <input type="email" placeholder="Email" name='email' onChange={handleChange} />
          </div>
          <div className="input">
            <img src={password_icon} alt="" />
            <input type="password" placeholder="Password" name='password' onChange={handleChange} />
          </div>
        </div>
        <div className="submit-container">
          <div className="submit" onClick={handleSubmit}>
            Register
          </div>
        </div>
        <div className="login-link">
          Already have an account? <Link to="/login">Login Here</Link>
        </div>
        {formError && <p className="error">{formError}</p>}
      </div>
    </div>
  );
};

export default RegisterPage;
