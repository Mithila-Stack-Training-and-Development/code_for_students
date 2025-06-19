import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProjectsPage from './pages/ProjectsPage'
import WhoAreYouPage from './pages/WhoAreYouPage'
import ContactPage from './pages/ContactPage'
import ProductPage from './pages/ProductPage'
import { useState } from 'react'

function App() {

  return (
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/about' element={<AboutPage/>} />
      <Route path='/projects' element={<ProjectsPage />} />
      <Route path='/contact' element={<ContactPage />} />
      <Route path='/products' element={<ProductPage />} />

      <Route path='/who-are-you/:name' element={<WhoAreYouPage />} />
    </Routes>
  )
}

export default App
