import Footer from "../components/footer"
import Navbar from "../components/navbar"
import FAQSection from "../DashboardComponents/FAQSection"
import Feature from "../DashboardComponents/Feature"
import Feedbacks from "../DashboardComponents/feedbacks"
import HeroSection from "../DashboardComponents/Header"
import Heading from "../DashboardComponents/Heading"
import OurClients from "../DashboardComponents/OurClients"
import Subscribe from "../DashboardComponents/Subscribe"
import './landing.css'

export default function Landing() {
  return (
    <div className="page-wrapper">
      <Navbar/>
      <div className="page-content">
        <HeroSection/>
        <Heading/>
        <Feature/>
        <OurClients/>
        <Feedbacks/> 
        <FAQSection/>
        <Subscribe/>
      </div>
      <Footer/>
    </div>
  )
}