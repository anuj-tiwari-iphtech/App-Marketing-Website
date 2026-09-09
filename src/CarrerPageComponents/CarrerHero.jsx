import leftsvg from '../assets/CarrerPage/leftupper.svg'
import rightsvg from '../assets/CarrerPage/rightdown.svg'
import { Link } from 'react-router-dom';

import './CarrerHero.css'

export default function CarrerHero() {
  return (
    <>
        <div className="carrers-page-hero">
            <div className="carrers-hero-container">
                <img src={leftsvg} alt="Left svg" className="hero-left-svg"/>

                <div className="carrers-hero-center">
                    <h1>Join are team</h1>
                    <p>Ex adipisicing sint occaecat tempor incididunt incididunt eu minim anim irure fugiat mi</p>
                    <Link to='/'>
                    <button>View open positions</button>
                    </Link>
                </div>

                <img src={rightsvg} alt="right svg" className="hero-right-svg"/>
            </div>
        </div>
    </>
  )
}