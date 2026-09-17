import { IoPaperPlaneOutline } from "react-icons/io5";
import { useState } from "react";
import outer from '../assets/Dashboard/sub-outer.png'
import inner from '../assets/Dashboard/sub-inner.jpg'
import './Subscribe.css'

export default function Subscribe() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('')

    const validateEmail = (value) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(value);
    }

    const handleClick = (e) => {
        if(!email.trim()){
            setError('Email is required');
            return;
        }
        if(!validateEmail(email)){
            setError('please enter a valid email address')
            return;
        }
        setError('')
        console.log('Subscribing:', email)
        alert('Thank you for Subscribing')
        setEmail('')
    }

  return (
    <div className='subscribe-page'>
        <div className='subs-banner'>
            <div className='sub-heading'>
                Looking for something
            </div>
            <div className='subs-subheading'>
                Subscribe to our newsletter
            </div>

            <div className="subs-input-wrapper">
                {error && <p className="sub-error-text">{error}</p>}
                <div className='subs-input-ele'>
                    <input
                        type='email'
                        placeholder='Your email address'
                        className={`sub-input ${error ? 'sub-input-error' : ''}`}
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                            if (error) setError('');
                        }}
                    />
                    <button className='sub-button' onClick={handleClick}>
                        Subscribe
                    </button>
                </div>
                
            </div>
            <img src={outer} className='outer-img' alt='Outer Frame'/>
            <img src={inner} className='inner-img' alt='Inner Graphic'/>
            <div className='plane-icon'><IoPaperPlaneOutline className='plane-icon1'/></div>
            
        </div>

    </div>
  )
}