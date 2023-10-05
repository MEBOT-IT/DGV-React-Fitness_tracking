'use client';
import React from 'react'
import NavBar from './NavBar'
import Hero from './hero'
import Partner from './partner'
import Programs from './programs'
import Services from './services'
import Blogs from './blog'
import BootstrapCarousel from './bootstrap'
import { useState } from "react";
import { items } from "../public/Item.json";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from './Bootstrap.module.css'
import Footer from './footer';
import Image from 'react-bootstrap';
const Home = () => {

  const { bootstrap } = items;
      const [index, setIndex] = useState(0);
      const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
      };

  return (
    <div style={{backgroundColor:'black'}}>
      <NavBar/>
      <Hero/>
      <Partner/>
      <Programs/>
      <Services/>
      <Blogs/>
      <div className={styles.slider}>
      <h1 style={{color:'white', fontFamily:'Arial', fontSize:'60px', fontWeight:'bold', paddingLeft:'10px', paddingTop:'150px'}}>What Our Clients Say</h1>

            <Carousel activeIndex={index} onSelect={handleSelect}  >
            {bootstrap.map((item) => (
                <Carousel.Item key={item.id} className={styles.itemP} interval={4000}>
                <img src={item.imageUrl} alt="slides" />
                </Carousel.Item>
            ))}
            </Carousel>
      </div>
      <div style={{backgroundColor:'black', paddingBottom:'0px'}}>
      <Footer/></div>
    </div>
  )
}

export default Home