import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './NavBar.module.css'
const NavBar = () => {
  return (
    <div>
        <nav className={styles.navBar}>
      <div className={styles.left}>
        <Image src="/Logo.png" alt="Logo" width={240} height={70} />
      </div>
      <div className={styles.center}>
        <Link href="/">Home</Link>
        <Link href="/about">About Us</Link>
        <Link href="/workoutplans">Workout Plans</Link>
        <Link href="/blogs">Blogs</Link>
        <Link href="/connect">Connect With Leo</Link>
      </div>
      <div className={styles.right}>
        <Link href='/login'>
        <button className={styles.button}>Join Now</button></Link>
      </div>
    </nav>
    </div>
  )
}

export default NavBar