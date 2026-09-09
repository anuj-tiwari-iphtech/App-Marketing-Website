import Subscribe from "../DashboardComponents/Subscribe"
import BlogsPage from "../components/BlogsPage"
import Footer from "../components/footer"
import Navbar from "../components/navbar"
import './landing.css'
export default function Blog() {
  return (
    <div className="page-wrapper">
      <Navbar/>
      <div className="page-content">
        <BlogsPage/>
        <Subscribe/>
      </div>
      <Footer/>
    </div>
  )
}