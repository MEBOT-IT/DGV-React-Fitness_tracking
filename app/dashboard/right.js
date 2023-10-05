import Image from 'next/image';
import React from 'react';
import './right.css'
const RightSection = () => {
  return (
    <div className="right-section">
      <Image src={'/fitbar.png'} width={260} height={630} className='img'/>
    </div>
  );
};

export default RightSection;
