import Navbar from "../components/navbar"
import Footer from "../components/footer"
import FindYourAnswer from "../FAQs/FindYourAnswer"
import FaqSection from "../FAQs/FaqSection"
import FaqPageHero from "../FAQs/FaqPageHero"

export default function FAQs() {
  return (
    <>
      <Navbar/>
      <FaqPageHero/>
      <FaqSection/>
      <FindYourAnswer/>
      <Footer/>
    </>
  )
}