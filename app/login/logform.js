import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import styles from './LoginForm.module.css';
import Footer from '../footer';
const Logform = () => {
  return (
    <div className='full'>
    <div className='container'>
      
      <div className='pos'>
      <h1 style={{color:'orangered', letterSpacing:'0.6px',  fontSize:'60px'}}>Welcome to FitnessFirst</h1>
      <p style={{color:'white', letterSpacing:'0.6px',  fontSize:'20px',paddingLeft:'176px'}}>Please log in to access your account</p>
      </div>
    <div className={styles.loginForm}>
      <h2>Log In</h2>
      <form>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />
        
        <Link href={'/dashboard'}>
        <button type="submit">Login</button></Link>
      </form>

      <div className={styles.links}>
        <Link href="/signup">
          Sign Up
        </Link>
        <span>|</span>
        <Link href="/#">
          Forgot Password
        </Link>
      </div>
    </div>
    <footer className={styles.footer}>
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
            <input type="text" placeholder="Enter Your Feedback"  className={styles.tbox} />
            <button>Send</button>
        </div>
      </div>
      <div className={styles.footerbottom}>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&copy; {new Date().getFullYear()} FitnessFirst All Rights Reserved
      </div>
    </footer>
    </div>
  </div>
  )
}

export default Logform;