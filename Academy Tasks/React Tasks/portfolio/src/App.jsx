import React from 'react'
import Navbar from './Components/Navbar'
import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Projects from './Pages/Projects/Projects'
import Skills from './Pages/Skills/Skill'
import Contact from './Pages/Contact/Contact'


const App = () => {
  return (
    <div className='nav-box'>
      <BrowserRouter>
          <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App