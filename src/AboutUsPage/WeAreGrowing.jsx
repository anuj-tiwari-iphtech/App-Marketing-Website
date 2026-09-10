import outer from '../assets/Dashboard/sub-outer.png'
import inner from '../assets/AboutUs/modalimg.jpg'
import { FaRegHeart } from "react-icons/fa";
import { TfiBag } from "react-icons/tfi";
import '../DashboardComponents/Subscribe.css'
export default function Subscribe() {
  return (
    <div className='subscribe-page'>
        <div className='subs-banner'>
            <div className='sub-heading'>
                We are growing
            </div>
            <div className='subs-subheading' style={{maxWidth: '400px'}}>
            Velit aliquip ut sunt consectetur irure officia et cillum consectetur sunt
            </div>

            <div className='subs-input-ele'>
                <button className='sub-button'
                    style={{minWidth: '180px'}}
                >
                    View Open Position
                </button>
            </div>
            <img src={outer} className='outer-img' alt='Outer Frame'/>
            <img src={inner} className='inner-img' alt='Inner Graphic'/>
            <div className='heart-icon-container'>
            <FaRegHeart className='heart-icon'/>
            </div>
            <div className='tfi-icon-container'>
            <TfiBag className='tfi-icon'/>
            </div>
        </div>

    </div>
  )
}