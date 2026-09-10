import './FaqHero.css'
import signimg from '../assets/Dashboard/feedback/cardele.png'
import vedioimg from '../assets/Dashboard/heading.jpg'

export default function FaqHero() {
  return (
    <div className='faq-page-header'>
        <div className='faq-hero-container'>
            <div className='faq-yellow-circle'></div>
            <div className='faq-blue-circle'></div>

            <div className='faq-upper-part'>
                <div className='faq-heading'>
                    <h1>Our Story</h1>
                    <p>Cupidatat proident nulla adipisicing eiusmod excepteur est voluptate officia ex exercitation adipisicing mollit. Cillum laboris</p>
                </div>

                <img src={vedioimg}className='faq-header-img'/>
            </div>

            <div className='faq-lower-part'>
              <div className='faq-lower-heading'>
                <h3>Our Mission</h3>
                <p>"Ex adipisicing sint occaecat tempor incididunt incididunt eu minim anim irure fugiat mi"</p>
              </div>
                <img src={signimg}/>
            </div>
        </div>
    </div>
  )
}