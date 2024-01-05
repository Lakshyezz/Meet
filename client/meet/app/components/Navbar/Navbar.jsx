import React from 'react'
import '../Navbar/navbar.scss'


const Navbar = () => {
  return (
    <div className='navbar-container' >

      <div className='left-side'>
        <img  src='/images/video.svg' width='50px'/>
        <h3>Meet</h3>
      </div>

      <div className='right-side'>
      
        <h3> 3:19 AM • Sat, Jan 6</h3>
        <img src='/images/question.png'/>
        <img src='/images/profile.png'/>

      </div>
    </div>
  )
}

export default Navbar