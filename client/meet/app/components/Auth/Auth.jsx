import React from 'react'
import '../Auth/auth.scss';
import { Google } from '@mui/icons-material';
const Auth = () => {
  return (
    <div className='auth-container'>
        <p>This is what others will see</p>
        <input type='text' placeholder='Username' required/>
        <button>
           <h3>Google</h3>
           <Google/>
        </button>
        
    </div>
  )
}

export default Auth;