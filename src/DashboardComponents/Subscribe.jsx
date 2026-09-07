import outer from '../assets/Dashboard/sub-outer.png'
import inner from '../assets/Dashboard/sub-inner.jpg'
import './Subscribe.css'
export default function Subscribe() {
  return (
    <div className='subscribe-page'>
        <div className='subs-banner'>
            <div className='sub-heading'>
                Looking for something
            </div>
            <div className='subs-subheading'>
                Subscribe to our newsletter
            </div>

            <div className='subs-input-ele'>
                <input
                    type='text'
                    placeholder='Your email address'
                    className='sub-input'
                />
                <button className='sub-button'>
                    Subscribe
                </button>
            </div>
            <img src={outer} className='outer-img' alt='Outer Frame'/>
            <img src={inner} className='inner-img' alt='Inner Graphic'/>
        </div>

    </div>
  )
}