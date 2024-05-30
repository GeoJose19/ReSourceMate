import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import "./LoginSignup.css"
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';
import { supabase } from '../config/supabaseClient';


const LoginSignup = ({setToken}) => {
  let navigate = useNavigate()

  const [formData,setFormData] = useState({
        email:'',password:''
  })

  console.log("FORM DATA: ",formData)

  function handleChange(event){
    setFormData((prevFormData)=>{
      return{
        ...prevFormData,
        [event.target.name]:event.target.value
      }

    })

  }

  async function handleSubmit(e){
    e.preventDefault()

    try {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: formData.email,
            password: formData.password,
          })
          console.log("fOrmDAtA:",formData)
          navigate('/dashboard')
      if (error) throw error
      console.log(data)
      setToken(data)
      


    //   alert('Check your email for verification link')

      
    } catch (error) {
      alert(error)
    }
    navigate('/dashboard')
  }



  return (
    <div className="login-main">
      <div className="container">
        <div className="header">
          <div className="text">LOGIN</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          <div className="input">
            <img src={email_icon} alt="" />
            <input type="email" name='email' placeholder="Email id" onChange={handleChange} />
          </div>
          <div className="input">
            <img src={password_icon} alt="" />
            <input type="password" name='password' placeholder="Password" onChange={handleChange} />
          </div>
        </div>
        <div className="submit-container">
          <div className="submit" onClick={handleSubmit}>
            Login
          </div>
        </div>
        <div className="register-link">
          New User? <Link to="/register">Register Here</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
