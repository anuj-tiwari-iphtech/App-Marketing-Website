import heading from '../assets/Dashboard/heading.jpg'
import { CiPlay1 } from "react-icons/ci";
import './Heading.css'
export default function Heading() {
  return (
    <>
        <div className="heading">
            <div className='head-label'>
                Officia esse deserunt magna 
            </div>
            <div className='head-main'>
                About heading
            </div>

            <div className='play-btn-img'>
            <img
                src={heading}
                alt='heading-img'
                className='heading-img'
            />
            <CiPlay1 className='play-button'/>
            </div>
        </div>
    </>
  )
}