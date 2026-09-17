import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import map from '../assets/map.jpg'
import './ContactForm.css'

const contactSchema = z.object({
    name: z.string().min(1, 'Name is required').min(2, 'Name must be at least 2 characters'),
    email: z.string().min(1, 'Email is required').email('Please enter a valid email address'),
    question: z.string().min(1, 'This field is required').min(10, 'Please provide at least 10 characters'),
});

export default function ContactForm() {
    const {
        register,
        handleSubmit,
        formState: {errors},
        reset,
    }= useForm({
        resolver: zodResolver(contactSchema),
    })

    const onSubmit = (data) => {
        console.log('Form submitted:', data);
        reset()
    }
  return (
    <div className='contact-form-section'>
        <div className='form-section-container'>
            <div className='form-section'>
                <h1>Contact Us</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='input-group'>
                        <label>Name</label>
                        {errors.name && <p className="error-text">{errors.name.message}</p>}
                        <input
                            type='text'
                            placeholder='Enter your name'
                            className={errors.name ? 'input-error' : ''}
                            {...register('name')}
                        /> 
                    </div>
                    

                    <div className='input-group'>
                        <label>Email</label>
                        {errors.email && <p className="error-text">{errors.email.message}</p>}
                        <input
                            type='text'
                            placeholder='your@email.com'
                            className={errors.name ? 'input-error' : ''}
                            {...register('email')}
                        />  
                    </div>

                    <div className='input-group'>
                        <label>Question</label>
                        {errors.question && <p className="error-text">{errors.question.message}</p>}
                        <textarea
                            type='text'
                            rows='4'
                            placeholder='Enter question or Feedback'
                            className={errors.name ? 'input-error' : ''}
                            {...register('question')}
                        />
                    </div>

                    <button type='submit' className='form-submit'>Submit</button>
                </form>
            </div>

            <div className='contact-img-section'>
                <img src={map} alt='map-img'/>
            </div>
        </div>
    </div>
  )
}