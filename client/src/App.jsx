import { useState } from 'react'

import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import { Route, Routes } from 'react-router-dom'
import Panjar from './pages/Panjar'


function App() {


  return (
    <>
      <Navbar />
        
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/panjar' element={<Panjar />}/>
      </Routes>
    </>
  )
}

export default App
