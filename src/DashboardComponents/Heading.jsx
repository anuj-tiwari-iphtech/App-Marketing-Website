import heading from '../assets/Dashboard/heading.png'
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

            <img
                src={heading}
                alt='heading-img'
                className='heading-img'
            />
        </div>
    </>
  )
}