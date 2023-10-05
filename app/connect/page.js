'use client';
import React from 'react'
import Chatbot from './Chatbot'
import NavBar from '../NavBar';
import './Chatbot.css'
import Image from 'next/image';
const page = () => {
  return (
    <div>
        <NavBar/>
        <h1 style={{color:'white', marginLeft:'399px'}}>Hi I'm Leo, Your Fitness Assisstant</h1>
        <Chatbot/>
        <footer className="footer" >
      <div className="footer-content">
        <div >
          <Image src="/Logo.png" alt="FitnessFirst Logo" className="logo" width={100} height={30} /> 
        </div>
        <div className="info">
        <span>Call :</span>
            <p>8072477434</p>
            <span>Email :</span>
            <p>fitnessfirst@gmail.com</p>
        </div>
        <div className="footer-links">
          <h3 className="h3">Navigate</h3>
          <a href="/" className="a">Home</a>
          <a href="/about" className="a">About Us</a>
          <a href="/contact" className="a">Contact Us</a>
          <a href="/BMIcalc" className="a">BMI Calculator</a>
          <a href="/Schedule" className="a">Schedule</a>
          <a href="/Blogs" className="a">Blogs</a>
          {/* Add more links as needed */}
        </div>
        <div className="footer-connect">
          <h3 className="h3">Stay Connected</h3>
          <h4 style={{color:'gray'}}>Follow us in every social media<br/>platforms to stay connected</h4>
          <div className="icons">
            <i className="fa fa-facebook" ></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <i className="fa fa-instagram"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <i className="fa fa-twitter"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <i className="fa fa-youtube"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <i className="fa fa-linkedin"></i>
          </div>
        </div>
        <div className="feedback">
        <h3>Feedback</h3>
            <input type="text" placeholder="Enter Your Feedback"  className="tbox" />
            <button>Send</button>
        </div>
      </div>
      <div className="footer-bottom">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&copy; {new Date().getFullYear()} FitnessFirst All Rights Reserved
      </div>
    </footer>
    </div>
  )
}

export default page