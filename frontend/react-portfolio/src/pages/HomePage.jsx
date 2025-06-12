import HeroSection from '../components/Hero'
import Layout from '../components/Layout'
import AboutSection from '../components/AboutSection'

const HomePage = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutSection/>
    </Layout>
  )
}

export default HomePage