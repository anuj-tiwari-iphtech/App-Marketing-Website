import ContactForm from "../ContactPage/ContactForm"
import ContactHero from "../ContactPage/ContactHero"
import Footer from "../components/footer"
import Navbar from "../components/navbar"

export default function ContactUs() {
  return (
    <div className="page-wrapper">
      <Navbar/>
      <div className="page-content">
        <ContactHero/>
        <ContactForm/>
      </div>
      <Footer/>
    </div>
  )
}