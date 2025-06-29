import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cabecalho from '/pages/Cabecalho.jsx'
import Text from '/pages/Text.jsx'
import About from '/pages/About'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {

  return (
    <BrowserRouter>
      <Cabecalho />
      <Routes>
        <Route path="/" element={<Text />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Text />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
