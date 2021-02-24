import React from 'react'
import './About.css'

import './HeroSection.css'

function HeroSection() {
  return (
    <div className='hero-container'>
      <video id='heroVideo' src='/videos/Present.mp4' autoPlay loop muted />
      <h1 className='WelcomeMessage text-white font-weight-bold '>
        |Cocinarte|
      </h1>
      <p className=' WelcomeMessage text-white font-weight-bold font-italic'>
        "El lugar donde aprender a cocinar nunca fue tan facil"
      </p>
      <div className='hero-btns'></div>
    </div>
  )
}

export default HeroSection
