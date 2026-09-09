import map from '../assets/map.jpg'
import './ContactForm.css'

export default function ContactForm() {
  return (
    <div className='contact-form-section'>
        <div className='form-section-container'>
            <div className='form-section'>
                <h1>Contact Us</h1>
                <form>
                    <div className='input-group'>
                    <label>Name</label>
                    <input
                        type='text'
                        placeholder='Enter your name'
                    />
                    </div>
                    

                    <div className='input-group'>
                    <label>Email</label>
                    <input
                        type='text'
                        placeholder='your@email.com'
                    />
                    </div>

                    <div className='input-group'>
                    <label>Question</label>
                    <textarea
                        type='text'
                        rows='4'
                        placeholder='Enter question or Feedback'
                    />
                    </div>

                    <button className='form-submit'>Submit</button>
                </form>
            </div>

            <div className='contact-img-section'>
                <img src={map} alt='map-img'/>
            </div>
        </div>
    </div>
  )
}