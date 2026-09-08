import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Subscribe from "../DashboardComponents/Subscribe";
import Hero from "../FeaturesComponents/Hero";
import FeatureCards from "../FeaturesComponents/FeatureBenefits";
import HowItWorks from "../FeaturesComponents/HowItWorks";
import Blog from "../FeaturesComponents/Blog";
export default function Features() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <FeatureCards/>
    <HowItWorks/>
    <Blog/>
    <Subscribe/>
    <Footer/>
    </>
  )
}