// 'use-client'

import React, { useState } from 'react';
import '../pages/land.scss';
import EastRoundedIcon from '@mui/icons-material/EastRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

const Land = () => {

    const [username, setUsername] = useState('');
    const handleUserNameChange = (e) => setUsername(e.target.value);
    
    const handleUsernameClick = () => {
        localStorage.setItem('username' , username)
        console.log(username);
    }
  return (
    <div className='container'>
        {/* ok */}
        <div className='left-side'>
            {/* <h1>
                <strong>Meet</strong>
            </h1> */}
            <img src='/images/grill.png'
                width='400px'
            />
        </div>
        <div className='right-side'>
            <input type='text' value={username}
                onChange={(e) => handleUserNameChange(e)} 
                placeholder='Username'   
                />
            <button onClick={handleUsernameClick}>
                {/* <ArrowForwardRoundedIcon/> */}
                <EastRoundedIcon/>
                Next
            </button>
        </div>

    </div>
  )
}

export default Land