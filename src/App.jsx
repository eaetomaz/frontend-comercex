import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Home from './pages/Home.jsx'
import Dashboard from './pages/Dashboard.jsx'
import PDV from './pages/pdv.jsx'
import Estoque from './pages/Estoque.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/pdv" element={<PDV />} />
        <Route path="/estoque" element={<Estoque />} />
      </Routes>
    </BrowserRouter>
  )
}
