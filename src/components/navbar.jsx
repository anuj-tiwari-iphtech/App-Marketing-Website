import { Link } from 'react-router-dom'
import logo from '../assets/logo.jpg'
import './navbar.css'

export default function Navbar() {
  return (
    <>
        <div className="navbar">
            <div className="logo-img">
                <img src={logo}/>
            </div>

            <div className='nav-right'>
                <div className='nav-tabs-lists'>
                    <Link to='/features'>Features</Link>
                    <Link to='/about-us'>About us</Link>
                    <Link to='/pricing'>Pricing</Link>
                    <Link to='/Blog'>Blog</Link>
                    <Link to='/faq'>FAQs</Link>
                    <Link to='/contact-us'>Contact us</Link>
                    <Link to='/careers'>Careers</Link>
                </div>

                <button className='nav-button'>
                    Get Started
                </button>
            </div>
        </div>
    </>
  )
}