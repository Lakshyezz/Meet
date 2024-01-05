import React from 'react'
import '../Hero/hero.scss'

const Hero = () => {
  return (
    <div className='container'>
      <div className='left-side'>
        <h1>Premium video meetings. Now free for everyone.</h1>
        <input type='text'/>
      </div>
      <div className='right-side'>
        <img  src='/images/video.svg' width='50px'/>
      </div>  
    </div>
  )
}

export default Hero