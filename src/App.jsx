import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Developer, Home, Login } from './pages'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/developers" element={<Developer />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default App