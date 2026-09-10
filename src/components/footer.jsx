import React from 'react';
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { IoChevronDownOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg'; 
import './footer.css';

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Column 1: Logo & Description */}
        <div className="footer-col brand-col">
          <div className="logo-wrapper">
            <img src={logo} alt="Logo" className="footer-logo" />
          </div>
          <p className="brand-desc">
            Minim nostrud consectetur dolore<br />
            ut minim cillum mollit
          </p>
        </div>

        {/* Column 2: Product Links */}
        <div className="footer-col">
          <h4 className="footer-heading">Product</h4>
          <ul className="footer-links">
            <li><Link to='/features'>Features</Link></li>
            <li><Link to='/pricing'>Pricing</Link></li>
            <li><Link to='/Blog'>Blog</Link></li>
            <li><Link to='/'>Case Studies</Link></li>
          </ul>
        </div>

        {/* Column 3: Company Links */}
        <div className="footer-col">
          <h4 className="footer-heading">Company</h4>
          <ul className="footer-links">
            <li><Link to='/about-us'>About us</Link></li>
            <li><Link to='/contact-us'>Contact us</Link></li>
            <li><Link to='/faq'>FAQs</Link></li>
            <li><Link to='/careers'>Careers</Link></li>
          </ul>
        </div>

        {/* Column 4: Social & Contact Info */}
        <div className="footer-col contact-col">
          <h4 className="footer-heading">Follow us</h4>
          <div className="social-icons">
            <a href="#twitter" aria-label="Twitter"><FaTwitter /></a>
            <a href="#facebook" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#linkedin" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="#youtube" aria-label="YouTube"><FaYoutube /></a>
          </div>

          <div className="contact-details">
            <p>Alaska, United States</p>
            <p><a href="mailto:template@email.com">template@email.com</a></p>
            <p>(205) 387-2122</p>
          </div>
        </div>
      </div>

      <hr className="footer-divider" />

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="copyright-legal">
          <span>© 2022 Brand, Inc.</span>
          <span className="dot-footer">•</span>
          <Link to='/privacy'>Privacy</Link>
          <span className="dot-footer">•</span>
          <a href="#terms">Terms</a>
          <span className="dot-footer">•</span>
          <a href="#sitemap">Sitemap</a>
        </div>

        <div className="language-dropdown">
          <span>English</span>
          <IoChevronDownOutline className="dropdown-icon" />
        </div>
      </div>
    </footer>
  );
}