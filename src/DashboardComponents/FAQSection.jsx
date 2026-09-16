import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoChevronDownOutline, IoChevronForwardOutline } from 'react-icons/io5';
import './FAQSection.css';
import Mobile from '../components/Mobile';

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
  const [openId, setOpenId] = useState(1); 

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="faq-container">
      <div className="faq-media-col">

        <Mobile/>

      </div>

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

        <Link to='/faq' className="faq-view-more">
          View more    &gt;
        </Link>
      </div>
    </section>
  );
}