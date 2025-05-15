import React, { useState } from 'react'
import {Routes , Route, BrowserRouter} from 'react-router-dom'
import Hero from './Components/Hero'
import About from './Components/About'
import Contact from './Components/Contact'
import Services from './Components/Services'

const App = () => {

  return <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero />}/>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App