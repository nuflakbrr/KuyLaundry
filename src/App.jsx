import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Developer, Home, Login } from './pages'
import { Dashboard, Member, Outlet, Package, Register, User } from './pages/admin'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/developers" element={<Developer />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin/dashboard" element={<Dashboard />} />
      <Route path="/admin/outlet" element={<Outlet />} />
      <Route path="/admin/package" element={<Package />} />
      <Route path="/admin/member" element={<Member />} />
      <Route path="/admin/transaction" element={<Member />} />
      <Route path="/admin/user" element={<User />} />
      <Route path="/admin/register" element={<Register />} />
    </Routes>
  )
}

export default App