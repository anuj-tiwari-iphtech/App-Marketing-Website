import { Link } from 'react-router-dom';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import './Sitemap.css'

const sitemapSections = [
  {
    title: 'Product',
    links: [
      { label: 'Features', to: '/features' },
      { label: 'Pricing', to: '/pricing' },
      { label: 'Blog', to: '/blog' },
      { label: 'Case Studies', to: '/' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About us', to: '/about-us' },
      { label: 'Contact us', to: '/contact-us' },
      { label: 'FAQs', to: '/faq' },
      { label: 'Careers', to: '/careers' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', to: '/privacy' },
      { label: 'Terms & Conditions', to: '/terms' },
      { label: 'Sitemap', to: '/sitemap' },
    ],
  },
];

export default function SitemapPage() {
  return (
    <>
    <Navbar/>
    <div className="sitemap-page">
      <div className="sitemap-container">
        <h1>Sitemap</h1>
        <p className="sitemap-intro">
          A full overview of every page on our website.
        </p>

        <div className="sitemap-grid">
          {sitemapSections.map((section) => (
            <div key={section.title} className="sitemap-col">
              <h2>{section.title}</h2>
              <ul>
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}