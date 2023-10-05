'use client';
import React from 'react'
import { useState } from 'react';
import './bmi.css'
import Image from 'next/image';
import Link from 'next/link';
import styles from '../login/LoginForm.module.css';const BMIcalc = () => {

    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [bmi, setBMI] = useState(null);
  
    const calculateBMI = () => {
      if (!height || !weight) {
        return;
      }
      const heightInMeters = height / 100;
      const bmiValue = weight / (heightInMeters * heightInMeters);
      setBMI(bmiValue.toFixed(2));
    };

    const resetFields = () => {
        setHeight('');
        setWeight('');
        setBMI(null);
      };

  return (
    <div>
      <h1 style={{fontSize:'30px'}}>Enter Below Details to Continue</h1>
    <div className="bmi-calculator">
        <h1>Check your BMI</h1>
        <div className="input-group">
        <label htmlFor="height">Height (cm):</label>
        <input
            type="number"
            id="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
        />
        </div>
        <div className="input-group">
        <label htmlFor="weight">Weight (kg):</label>
        <input
            type="number"
            id="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
        />
        </div>
        <button onClick={calculateBMI}>Calculate BMI</button>
        {bmi && (
  <div className={`result-container ${bmi >= 25 ? 'overweight': bmi < 14.5 ? 'underweight' : 'perfect'}`}>
    <div className="result">Your BMI: {bmi}<br/>
    {bmi >= 25 ? 'Overweight': bmi < 14.5 ? 'Underweight' : 'Ideal Weight'}
    </div>
    
  </div>
)}


            <button onClick={resetFields}>Reset</button>
    </div>
    <Link href={'/dashboard'}>
    <button className='db' style={{marginLeft:'170px',}}>Continue</button>
    </Link>
    <footer className={styles.footer} style={{marginTop:'-10px'}}>
      <div className={styles.footercontent}>
        <div >
          <Image src="/Logo.png" alt="FitnessFirst Logo" className={styles.logo} width={100} height={30} /> 
        </div>
        <div className={styles.info}>
        <span>Call :</span>
            <p>8072477434</p>
            <span>Email :</span>
            <p>fitnessfirst@gmail.com</p>
        </div>
        <div className={styles.footerlinks}>
          <h3 className="h3">Navigate</h3>
          <a href="/" className={styles.a}>Home</a>
          <a href="/about" className={styles.a}>About Us</a>
          <a href="/contact" className={styles.a}>Contact Us</a>
          <a href="/BMIcalc" className={styles.a}>BMI Calculator</a>
          <a href="/Schedule" className={styles.a}>Schedule</a>
          <a href="/Blogs" className={styles.a}>Blogs</a>
          {/* Add more links as needed */}
        </div>
        <div className={styles.footerconnect}>
          <h3 className={styles.h3}>Stay Connected</h3>
          <h4 style={{color:'gray'}}>Follow us in every social media<br/>platforms to stay connected</h4>
          <div className={styles.icons}>
            <i className="fa fa-facebook" ></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <i className="fa fa-instagram"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <i className="fa fa-twitter"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <i className="fa fa-youtube"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <i className="fa fa-linkedin"></i>
          </div>
        </div>
        <div className={styles.feedback}>
        <h3>Feedback</h3>
            <input type="text" placeholder="Enter Your Feedback"  className='tbox' />
            <button style={{height:'46px'}}>Send</button>
        </div>
      </div>
      <div className={styles.footerbottom}>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&copy; {new Date().getFullYear()} FitnessFirst All Rights Reserved
      </div>
    </footer>
    </div>
  )}
   export default BMIcalc;