import phoneOuter from '../assets/Dashboard/FAQ/phoneOuter.png'
import phoneInner from '../assets/Dashboard/FAQ/PhoneInner.png'
import img from '../assets/Dashboard/FAQ/smily.png'
import chat from '../assets/Dashboard/FAQ/chat1.png'
import './Mobile.css'

export default function Mobile() {
  return (
    <div className="mb-wrapper">

      <img src={phoneOuter} className='mb-frame-outer' alt='Phone Case'/>
      <img src={phoneInner} className='mb-frame-inner' alt='Phone Case Inner'/>

      <div className='mb-question-bubble'>
        <h1 className='mb-question-icon'>?</h1>
        <p className='mb-question-text'>Ask us anything</p>
      </div>

      <div className='mb-bubble-sent'>
        <p className='mb-bubble-sent-text'>Qui voluptate laboris ut do excepteur elit eu </p>
        <span className='mb-bubble-sent-time'>12:03</span>
      </div>

      <div className='mb-bubble-received'>
        <p className='mb-bubble-received-text'>Occaecat exercitation laboris in anim adipisicing adipisicing tempor in eu cupidata</p>
      </div>

      <div className='mb-avatar-bubble'>
        <img src={img} className='mb-avatar-img' alt='avatar'/>
      </div>

      <p className='mb-timestamp'>12:01</p>

      <img src={chat} className='mb-chat-icon' alt='chat-icon'/>

    </div>
  )
}