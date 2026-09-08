import img from '../assets/Feature/vedioing.png'
import '../DashboardComponents/Heading.css'
export default function HowItWorks() {
  return (
    <>
        <div className="heading">
            <div className='head-main'>
                How it works
            </div>

            <img
                src={img}
                alt='heading-img'
                className='heading-img'
            />
            
        </div>
    </>
  )
}