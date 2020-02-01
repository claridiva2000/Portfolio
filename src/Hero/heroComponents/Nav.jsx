import React from 'react'
import '../hero.css'
import HeroImgs from '../heroComponents/HeroImgs'
import Socials from '../heroComponents/Socials'

const Nav = () => {
  return (
    <div className='nav-container'>
      <ul className='nav-links'>
        <li>Projects</li>
        <li>About</li>
        <li>Resume</li>
        <li>Contact</li>
      </ul>
      <HeroImgs/>
      <Socials/>
    </div>
  )
}

export default Nav
