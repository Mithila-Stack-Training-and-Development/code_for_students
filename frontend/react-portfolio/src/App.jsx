import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import HeroSection from './components/Hero'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProjectsPage from './pages/ProjectsPage'
import WhoAreYouPage from './pages/WhoAreYouPage'
import ContactPage from './pages/ContactPage'

function App() {


  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/projects' element={<ProjectsPage/>}/>
      <Route path='/contact' element={<ContactPage/>}/>

      <Route path='/who-are-you/:name' element={<WhoAreYouPage/>}/>
    </Routes>
  )
}

export default App
