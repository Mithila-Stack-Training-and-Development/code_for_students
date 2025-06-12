import React, { useState } from 'react'
import Layout from '../components/Layout'
import { Loader } from 'lucide-react'
import ContactSection from '../components/ContactSection'

const ContactPage = () => {

  const [loading, setLoading] = useState(false)

  const handleNameChange = (e) => {
    setName(e.target.value)
  }
  return (
    <Layout>
      <ContactSection/>
    </Layout>
  )
}

export default ContactPage