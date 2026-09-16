import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Subscribe from "../DashboardComponents/Subscribe";
import Hero from "../FeaturesComponents/Hero";
import FeatureCards from "../FeaturesComponents/FeatureBenefits";
import HowItWorks from "../FeaturesComponents/HowItWorks";
import Blog from "../FeaturesComponents/Blog";
import BenefitsSection from "../FeaturesComponents/Benefits";
export default function Features() {
  return (
    <div className="page-wrapper">
      <Navbar/>
      <div className="page-content">
        <Hero/>
        <FeatureCards/>
        <BenefitsSection/>
        <HowItWorks/>
        <Blog/>
        <Subscribe/>
      </div>
      <Footer/>
    </div>
  )
}