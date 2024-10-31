import { useState } from 'react'

import Navbar from './Navbar'

import { Outlet, Route, Routes } from 'react-router-dom'

import Footer from './Footer'



function LayoutSection() {


  return (
    <div className='realtive'>
      <Navbar />
        
       <Outlet />

      <Footer />
    </div>
  )
}

export default LayoutSection
