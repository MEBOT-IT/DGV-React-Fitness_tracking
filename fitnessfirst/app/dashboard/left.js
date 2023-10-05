// components/LeftSection.js
import Image from 'next/image';
import React from 'react';
import './left.css'
import Link from 'next/link';
const LeftSection = () => {
  return (
    <div className="left-section">
      <div className="top-image">
        <Image src="/Logo.png" alt="Fitness Image" width={200} height={60}/>
      </div>
      <div className="vertical-nav">
        <ul>
          <li>
            <Link href="/nutrichart" style={{marginTop: '40px'}}>Nutrichart</Link>
          </li>
          <li>
            <Link href="/workoutplans" style={{marginTop: '40px'}}>Workout</Link>
          </li>
          <li>
            <Link href="/" style={{marginTop: '40px'}}>Log Out</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LeftSection;
