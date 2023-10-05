import React from 'react'
import Image from 'next/image'
import './programs.css'
import Link from 'next/link'
const Programs = () => {
  return (
    <div className='programs'>
        <h1>Our Programs</h1>
        
        <div className='progimg'>
            <Image
            src='/workoutframe.png'
            width={300}
            height={399} 
            className='productimg'/>
            <Image
            src='/workoutframe2.png'
            className='productimg'
            width={300}
            height={399}/>
            <Image
            src='/workoutframe3.png'
            className='productimg'
            width={300}
            height={399}/>
            <Image
            src='/workoutframe6.png'
            className='productimg'
            width={300}
            height={399}/>
        </div>
        <Link href={'/workoutplans'}>
        <button className='embtn'>Explore More</button>
        </Link>
    </div>
  )
}

export default Programs