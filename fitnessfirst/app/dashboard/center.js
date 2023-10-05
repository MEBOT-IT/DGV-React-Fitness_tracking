// components/CenterSection.js

import React from 'react';
import './center.css'
import Image from 'next/image';
const CenterSection = () => {
  return (
    <div className="center-section">
      <h1 className='h1t'>Welcome Thomas</h1>
        <div className='progbar'>
            <Image src={'/Progress.png'} width={327} height={211}/>
            <Image src={'/Activity.png'} width={327} height={211}/>
        </div>
        <div className='imag'>
        <Image src={'/Steps.png'} width={200} height={170} className='step' style={{marginLeft:'39px'}}/>
        <Image src={'/Water.png'} width={200} height={170} className='step'/>
        <Image src={'/Calories.png'} width={200} height={170} className='step'/>
        </div>
        <h1 className='h1t'>Add Device</h1>
        <p className='P1'>Install Fitness First in your device and Enter Secret Key As 071D8A.</p>
    </div>
  );
};

export default CenterSection;
