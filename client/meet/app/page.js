"use client"

import Image from 'next/image'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Auth from './components/Auth/Auth'
import { Lan, Person } from '@mui/icons-material'
import { Routes, Route } from 'react-router'
import HomePage from './pages/HomePage'
// import Land from './pages/Land'


export default function Home() {
  return (
    <div className='wrapper'>

    {/* <HomePage/> */}
    {/* <Land/> */}
    <HomePage/>
      {/* <Navbar/> */}
      {/* <Hero/> */}
      {/* <Auth/> */}
      {/* <Routes>
        <Route />
      </Routes> */}
    </div>
    )
}


/* 
  Routes:
  '/auth', '/' : Auth , Homepage
  '/meet' : Meet

*/
