import AboutSection from "../components/AboutSection"
import Footer from "../components/Footer"
import Layout from "../components/Layout"
import Navbar from "../components/Navbar"

const AboutPage = (props) => {
  return (
    <Layout count={props.count}>
      <AboutSection />
    </Layout>
  )
}

export default AboutPage