import outer from '../assets/Dashboard/sub-outer.png'
import inner from '../assets/FAQ.jpg'
import { FaRegComment } from "react-icons/fa";
import { RiQuestionMark } from "react-icons/ri";
import '../DashboardComponents/Subscribe.css'
export default function FindYourAnswer() {
  return (
    <div className='subscribe-page'>
        <div className='subs-banner'>
            <div className='sub-heading'>
                Can't find your answer?
            </div>
            <div className='subs-subheading' style={{maxWidth: '400px'}}>
            Velit aliquip ut sunt consectetur irure officia et cillum consectetur sunt
            </div>

            <div className='subs-input-ele'>
                <button className='sub-button'
                    style={{minWidth: '140px'}}
                >
                    Contact us
                </button>
            </div>
            <img src={outer} className='outer-img' alt='Outer Frame'/>
            <img src={inner} className='inner-img' alt='Inner Graphic'/>
            <div className='heart-icon-container'>
            <FaRegComment className='heart-icon'/>
            </div>
            <div className='tfi-icon-container'>
            <RiQuestionMark className='tfi-icon'/>
            </div>
        </div>

    </div>
  )
}