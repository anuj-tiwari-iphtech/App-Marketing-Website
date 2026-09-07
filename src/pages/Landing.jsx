import Footer from "../components/footer"
import Navbar from "../components/navbar"
import FAQSection from "../DashboardComponents/FAQSection"
import Feature from "../DashboardComponents/Feature"
import Feedbacks from "../DashboardComponents/feedbacks"
import HeroSection from "../DashboardComponents/Header"
import Heading from "../DashboardComponents/Heading"
import OurClients from "../DashboardComponents/OurClients"
import Subscribe from "../DashboardComponents/Subscribe"

export default function Landing() {
  return (
    <>
        <Navbar/>
        <HeroSection/>
        <Heading/>
        <Feature/>
        <OurClients/>
        <Feedbacks/> 
        <FAQSection/>
        <Subscribe/>
        <Footer/>
    </>
  )
}