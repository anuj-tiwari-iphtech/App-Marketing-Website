import Navbar from "../components/navbar"
import FaqHero from "../AboutUsPage/FaqHero"
import WhoWeAre from "../AboutUsPage/WhoWeAre"
import Subscribe from "../AboutUsPage/WeAreGrowing"
import Footer from "../components/footer"

export default function AboutUs() {
  return (
    <div className="page-wrapper">
      <Navbar/>
      <div className="page-content">
        <FaqHero/>
        <WhoWeAre/>
        <Subscribe/>
      </div>
      <Footer/>
    </div>
  )
}