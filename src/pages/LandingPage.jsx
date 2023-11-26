import React from 'react'
import "./LandingPage.css"
import vector from "../assets/vector.png"
import circle from "../assets/circle.jpg"
import {useNavigate} from "react-router-dom"

export default function LandingPage() {

    const navigate=useNavigate()

    return (
        <div className='landing'>
            <section className="main" id="header">
                    <nav className="navbar">
                        <div className="logo-div">
                            <h1 className='logo'>RM.</h1>
                        </div>
                        <ul className="navlinks">
                            {/* <li><a href="#header">HOME</a></li>
                            <li><a href="#hero">ABOUT</a></li>
                            <li><a href="#services">CONTACT US</a></li> */}
                            <button class="button-65" role="button" onClick={()=>navigate('/login')} >GET STARTED</button>                    
                        </ul>
                    </nav>
                    <div className="hero">
                    <div className="hero--img">
                            <img src={vector} alt="why no werk" />
                        </div>  
                        <div className="hero--content">
                            <h1>ReSourceMate.</h1>
                            <h1><span className="multiple-text"></span></h1>
                            <p className='catchphrase'>Transforming Waste into Opportunity: ReSourceMate - Where Waste Materials Find New Purpose</p>
                            <button class="button-65" role="button" onClick={()=>navigate('/login')}>GET STARTED</button>
                        </div>   
                    </div>
                    <img className='circle' src={circle} alt="" />
                </section>
        </div>
    )
}
