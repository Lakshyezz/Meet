'use client'
import React, { useState } from 'react'
import './hero.scss'
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';

const Hero = () => {

  const [code, setCode] = useState('');

  const handleCodeChange = (e) => {
    setCode(e.target.value);
  }
  
  const handleMeetingClick = () => {
    
    console.log("code => " + code);
  }

  return (
    <div className='container'>
      <div className='left-side'>
        <h1>Premium video meetings. Now free for everyone.</h1>
        <h4>Service built for secure business meetings, Meet, to make it free and available for all.</h4>
        <div className='new-meeting-enter-code-div'>
          <button onClick={handleMeetingClick}>
              <span className="material-icons">video_call</span> 
              New Meeting
          </button>
         <div className='input-div'>
          <MeetingRoomIcon/>
          <input type='text' value={code} onChange={handleCodeChange}  placeholder='Enter a code'/>
         </div>
        </div>
      </div>
      <div className='right-side'>
        <div className='change-image'>
        <span id='left-arrow' className="material-icons-round">keyboard_arrow_left</span>
          <img  src='/images/video.svg' width='50px'/>
        <span id='right-arrow' className="material-icons-round">keyboard_arrow_right</span>
        </div>
        <h2>Get a link you can share</h2>
        <p>Click <strong className='strong'>New meeting</strong> to get a link you can send to people you want to meet with</p>
        <div className='dots'>
          <div className='dot-1'></div>
          <div className='dot-2'></div>
        </div>
      </div>  
    </div>
  )
}

export default Hero