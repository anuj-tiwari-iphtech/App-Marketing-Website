import { useState } from 'react'
import { Link } from 'react-router-dom'
import { HiMenu, HiX } from 'react-icons/hi'
import logo from '../assets/logo.jpg'
import './navbar.css'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <nav className="navbar">
      <div className="logo-img">
        <Link to="/" onClick={closeMenu}>
          <img src={logo} alt="Logo" />
        </Link>
      </div>

      {/* Hamburger Toggle Button for Mobile */}
      <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle Menu">
        {isOpen ? <HiX /> : <HiMenu />}
      </button>

      {/* Right Navigation Menu */}
      <div className={`nav-right ${isOpen ? 'active' : ''}`}>
        <div className="nav-tabs-lists">
          <Link to="/features" onClick={closeMenu}>Features</Link>
          <Link to="/about-us" onClick={closeMenu}>About us</Link>
          <Link to="/pricing" onClick={closeMenu}>Pricing</Link>
          <Link to="/Blog" onClick={closeMenu}>Blog</Link>
          <Link to="/faq" onClick={closeMenu}>FAQs</Link>
          <Link to="/contact-us" onClick={closeMenu}>Contact us</Link>
          <Link to="/careers" onClick={closeMenu}>Careers</Link>
        </div>

        <button className="nav-button">
          Get Started
        </button>
      </div>
    </nav>
  )
}