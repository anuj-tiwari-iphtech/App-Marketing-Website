import leftsvg from '../assets/CarrerPage/leftupper.svg'
import rightsvg from '../assets/CarrerPage/rightdown.svg'
import { IoLocationOutline } from "react-icons/io5";
import { FaRegPaperPlane } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import './ContactHero.css'

export default function ContactHero(){

    return(
        <div className='hero-contact'>
            <img src={leftsvg} alt='left-upper' className="lt-upper"/>

            <div className='hero-contact-heading'>
                <h1>Drop Us a Line</h1>
                <div className='samples'>
                    <p><IoLocationOutline className='contact-icon'/>Alaska, United States</p>
                    <p><FaRegPaperPlane className='contact-icon'/>sample@email.com</p>
                    <p><BsTelephone className='contact-icon'/>(205)387-2122</p>
                </div>
            </div>

            <img src={rightsvg} alt='right-bottom' className="rt-bottom"/>
        </div>

    )
}