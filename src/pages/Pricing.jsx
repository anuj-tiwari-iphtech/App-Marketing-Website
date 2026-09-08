import Navbar from "../components/navbar";
import Feedbacks from "../DashboardComponents/feedbacks";
import Subscribe from "../DashboardComponents/Subscribe";
import Footer from "../components/footer";
import Plan from "../components/Plan";
export default function Pricing() {
  return (
    <>
      <Navbar/>
      <Plan/>
      <Feedbacks/>
      <Subscribe/>
      <Footer/>
    </>
  )
}