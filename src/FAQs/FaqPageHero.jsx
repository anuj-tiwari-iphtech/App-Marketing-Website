import { CiSearch } from "react-icons/ci";
import './FaqPageHero.css'
import Mobile from '../components/mobile'


export default function FaqPageHero() {
  return (

    <> 
    <div className="faq-page-hero-container">
        <div className="faq-blue-circle"
        style={{top: "-50%", right: "9%"}}></div>
        <div className='faq-hero-main'>
            <h1>How can we help?</h1>
            <div className="search-input-wrapper">
            <CiSearch className="search-icon" />
            <input 
                type="text"
                placeholder="Type your Keyword"
            />
            </div>
        </div>

        <div className="mobile-container">
            <Mobile/>
        </div>
        
    </div>
    </>
  )
}