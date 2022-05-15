import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Developer, Home, Login, NotFound } from './pages'
import { Dashboard, Member, Outlet, Package, Transaction, User } from './pages/admin'

// Outlet
// import { AddOutlet } from './components/outlet'

// User
import { EditAdmin, Register } from './components/user'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/developers" element={<Developer />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin/dashboard" element={<Dashboard />} />
      <Route path="/admin/outlet" element={<Outlet />} />
      {/* <Route path="/admin/outlet/add" element={<AddOutlet />} /> */}
      <Route path="/admin/package" element={<Package />} />
      <Route path="/admin/member" element={<Member />} />
      <Route path="/admin/transaction" element={<Transaction />} />
      <Route path="/admin/user" element={<User />} />
      <Route path="/admin/user/add" element={<Register />} />
      <Route path="/admin/user/edit/*" element={<EditAdmin />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  )
}

export default App