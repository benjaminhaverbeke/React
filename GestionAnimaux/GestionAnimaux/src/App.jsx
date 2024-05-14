import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import HomePage from "./pages/HomePage.jsx"
import AdminAnimalPage from "./pages/AdminAnimalPage.jsx"
import NavBar from "./NavBar.jsx"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ContactPage from "./pages/ContactPage.jsx"
import AdminContactPage from "./pages/AdminContactPage.jsx"


function App() {
  

  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/admin" element={<AdminAnimalPage />} />
      <Route path="/contactform" element={<ContactPage />} />
      <Route path="/admincontact" element={<AdminContactPage />} />
      <Route path="*" element={
        <main>
        <p>Page non trouvée</p>
        </main>
      } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
