import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import ProjectsSection from "./ProjectsSection"

const Layout = (props) => {
  return (
    <>
      <Navbar />
      {props.children}
      <Footer />
    </>
  )
}

export default Layout