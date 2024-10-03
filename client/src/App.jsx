import { useState } from 'react'

import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import { Route, Routes } from 'react-router-dom'
import Panjar from './pages/Panjar'
import Footer from './components/Footer'


function App() {


  return (
    <div className='realtive'>
      <Navbar />
        
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/panjar' element={<Panjar />}/>
      </Routes>

      <Footer />
    </div>
  )
}

export default App
