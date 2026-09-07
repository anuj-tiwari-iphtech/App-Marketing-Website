import feature1 from '../assets/Dashboard/feature1.png'
import feature2 from '../assets/Dashboard/feature2.png'
import feature3 from '../assets/Dashboard/feature3.png'


import './Feature.css'
export default function Feature() {
  return (
    <>
    <div className="features">
            <div className='head-label'>
                Officia esse deserunt magna 
            </div>
            <div className='head-main'>
                Features
            </div>

            <div className="feature-lists">
                <div className="feature-lists-ele">
                    <div className='feature-img-container bg-blue'>
                    <img 
                        src={feature1}
                        alt='feature1'
                        className='feature-img '
                    />
                    </div>
                    <div className="ele-label">
                        Feature title
                    </div>
                    <div className='ele-desc'>
                    Aliqua incididunt elit ea deserunt  magna anim aute ullamco
                    </div>
                </div>

                <div className="feature-lists-ele">
                <div className='feature-img-container bg-yellow'>
                    <img 
                        src={feature2}
                        alt='feature1'
                        className='feature-img'
                    />
                    </div>
                    <div className="ele-label">
                        Feature title
                    </div>
                    <div className='ele-desc'>
                    Aliqua incididunt elit ea deserunt  magna anim aute ullamco
                    </div>
                </div>

                <div className="feature-lists-ele">
                <div className='feature-img-container bg-pink'>
                    <img 
                        src={feature3}
                        alt='feature1'
                        className='feature-img'
                    />
                    </div>
                    <div className="ele-label">
                        Feature title
                    </div>
                    <div className='ele-desc'>
                    Aliqua incididunt elit ea deserunt  magna anim aute ullamco
                    </div>
                </div>
            </div>

            <button className="feature-button">
                Learn More
            </button>
    </div>
    </>
  )
}