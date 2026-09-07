import React, { useState } from 'react';
import { IoChevronDownOutline, IoChevronForwardOutline } from 'react-icons/io5';
import phoneOuter from '../assets/Dashboard/FAQ/PhoneInner.png'
import phoneInner from '../assets/Dashboard/FAQ/phoneOuter.png'
import img from '../assets/Dashboard/FAQ/smily.png'
import chat from '../assets/Dashboard/FAQ/chat1.png'
import './FAQSection.css';

const faqData = [
  {
    id: 1,
    question: "Labore dolore ea ipsum ips ?",
    answer: "Incididunt ex irure ad non Lorem culpa fugiat exercitation ullamco esse minim tempor quis l"
  },
  {
    id: 2,
    question: "Sunt ad veniam eu laboris ?",
    answer: "Incididunt ex irure ad non Lorem culpa fugiat exercitation ullamco esse minim tempor quis l"
  },
  {
    id: 3,
    question: "velit quis eiusmod laborum ?",
    answer: "Incididunt ex irure ad non Lorem culpa fugiat exercitation ullamco esse minim tempor quis l"
  },
  {
    id: 4,
    question: "Magna irure ex dolore ?",
    answer: "Incididunt ex irure ad non Lorem culpa fugiat exercitation ullamco esse minim tempor quis l"
  }
];

export default function FAQSection() {
  const [openId, setOpenId] = useState(1); // Set item 1 open by default

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="faq-container">
      <div className="faq-media-col">
        {/* Replace src with your image when ready */}

        <img src={phoneOuter} className='faq-phone-outer' alt='Phone Case'/>
        <img src={phoneInner} className='faq-phone-inner' alt='Phone Case Inner'/>

        <div className='question'>
          <h1>?</h1><p>Ask us anything</p>
        </div>

        <div className='chat-1'>
        <p>Qui voluptate laboris ut do excepteur elit eu </p>
        <span>12:03</span>
        </div>

        <div className='chat-2'>
          <p>Occaecat exercitation laboris in anim adipisicing adipisicing tempor in eu cupidata</p>
        </div>

        <div className='chat-3'>
          <img src={img} alt='chat-3'/>
        </div>
        <p className='time'>12:01</p>
        <img src={chat} className='chat-img' alt='chat-icon'/>

      </div>

      {/* Right Column: FAQ Accordion */}
      <div className="faq-content-col">
        <span className="faq-subtitle">FAQs</span>
        <h2 className="faq-title">How can we help you ?</h2>

        <div className="faq-accordion">
          {faqData.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div 
                key={item.id} 
                className={`faq-item ${isOpen ? 'active' : ''}`}
                onClick={() => toggleFAQ(item.id)}
              >
                <div className="faq-header">
                  <h3 className="faq-question">{item.question}</h3>
                  <button className="faq-toggle-btn" aria-label="Toggle FAQ">
                    {isOpen ? <IoChevronDownOutline /> : <IoChevronForwardOutline />}
                  </button>
                </div>
                {isOpen && <p className="faq-answer">{item.answer}</p>}
              </div>
            );
          })}
        </div>

        <a href="#view-more" className="faq-view-more">
          View more    &gt;
        </a>
      </div>
    </section>
  );
}