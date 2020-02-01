import React from 'react'
//components
import Socials from '../heroComponents/Socials'
//styling
import '../hero.css'

const IntroText = () => {
  return (
  
       <div className='introtext'>
      <h3>I am</h3>
      <h1>
        Jasmine 
        <span className='lastname'>Logan</span>
      </h1>
      <h2>Developer</h2>
      <Socials />
    </div>
  )
}

export default IntroText
