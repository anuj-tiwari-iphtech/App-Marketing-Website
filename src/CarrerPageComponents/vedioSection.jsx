import img from '../assets/CarrerPage/visily-image-101.jpg'
import { CiPlay1 } from "react-icons/ci";
export default function VedioSection() {
  return (
    <>
        <div className="heading">
            <div className='head-main'>
                How it works
            </div>

            <div className='play-btn-img'>
            <img
                src={img}
                alt='heading-img'
                className='heading-img'
            />
            <CiPlay1 className='play-button'/>
            </div>
        </div>
    </>
  )
}