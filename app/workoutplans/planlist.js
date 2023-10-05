import React from 'react'
import Image from 'next/image'
import './planlist.css'
const Planlist = () => {
  return (
    <div className='programs'>
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
        <div className='progimg2'>
            <Image
            src='/chestwork.png'
            width={300}
            height={410} 
            className='productimg'/>
            <Image
            src='/biceps.png'
            className='productimg'
            width={300}
            height={410}/>
            <Image
            src='/sixpack.png'
            className='productimg'
            width={300}
            height={410}/>
            <Image
            src='/back.png'
            className='productimg'
            width={300}
            height={410}/>
        </div>
     </div>
  )
}

export default Planlist