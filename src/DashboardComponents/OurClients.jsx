import OC1 from "../assets/Dashboard/OurClients/OC1.png"
import OC2 from "../assets/Dashboard/OurClients/OC2.png"
import OC3 from "../assets/Dashboard/OurClients/OC3.png"
import OC4 from "../assets/Dashboard/OurClients/OC4.png"


import './ourClients.css'

export default function OurClients() {
  return (
    <>
        <div className="contact-us">
            <div className="contact-us-ele">
            <div className="our-clients">
                <h1>Our clients</h1>
                <p>
                Incididunt ex irure ad non Lorem culpa fugiat exercitation ullamco esse minim tempor quis l 
                </p>
                <button>
                    Contact us
                </button>
            </div>

            <div className="brand-logos">
                <img src={OC1} className="brand-logos-1" alt="brand-logos-1"/>
                <img src={OC2} className="brand-logos-2" alt="brand-logos-2"/>
                <img src={OC3} className="brand-logos-3" alt="brand-logos-3"/>
                <img src={OC4} className="brand-logos-4" alt="brand-logos-4"/>
                <img src={OC4} className="brand-logos-5" alt="brand-logos-5"/>
                <img src={OC3} className="brand-logos-6" alt="brand-logos-6"/>
                <img src={OC1} className="brand-logos-7" alt="brand-logos-7"/>
                <img src={OC2} className="brand-logos-8" alt="brand-logos-8"/>
            </div>
            </div>
        </div>
    </>
  )
}