import React from 'react'
import Image from 'next/image'
import NavBar from '../NavBar'
const page = () => {
  return (
    <div>
        <NavBar/>
        <Image
        src={'/b2f.png'}
        width={1300}
        height={3399}
        style={{marginTop:'20px', marginLeft:'20px'}}/>
    </div>
  )
}

export default page