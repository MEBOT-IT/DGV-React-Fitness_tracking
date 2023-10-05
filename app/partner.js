import React from 'react'
import Image from 'next/image'
import './partner.css'
const Partner = () => {
  return (
    <div className="partners">
        <Image
        src='/Partners.png'
        width={1600}
        height={700}
        className='partnerimg'
        />
    </div>
  )
}

export default Partner