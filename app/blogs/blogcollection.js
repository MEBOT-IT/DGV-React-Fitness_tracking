import React from 'react'
import Image from 'next/image'
import './blogc.css'
import Link from 'next/link'
const Blogcollection = () => {
  return (
    <div className='blogc'>
        <Image
        src={'/b1.png'}
        width={1300}
        height={500}/>
        <Link href={'b1'}>
            <button className='b1'>Read More</button>
        </Link>
        <Image
        src={'/b2.png'}
        width={1300}
        height={500}
        style={{marginTop:'100px'}}/>
        <Link href={'b2'}>
            <button className='b2'>Read More</button>
        </Link>
        <Image
        src={'/b3.png'}
        width={1300}
        height={500}
        style={{marginTop:'100px'}}/>
        <Link href={'b3'}>
            <button className='b3'>Read More</button>
        </Link>
        <Image
        src={'/b6.png'}
        width={1300}
        height={500}
        style={{marginTop:'100px'}}/>
        <Link href={'b6'}>
            <button className='b6'>Read More</button>
        </Link>
    </div>
  )
}

export default Blogcollection