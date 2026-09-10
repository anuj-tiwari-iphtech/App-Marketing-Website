import { useState } from 'react';
import { IoChevronDownOutline, IoChevronForwardOutline } from 'react-icons/io5';
import './FaqSection.css'

const categories = ['General', 'Companies', 'Pricing', 'Product'];

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
    },
    {
        id:5,
        question: "Magna irure ex dolore ?",
        answer: "Incididunt ex irure ad non Lorem culpa fugiat exercitation ullamco esse minim tempor quis l"
    }
];

export default function FaqSection() {
    const [openId, setOpenId] = useState(1); 
    const [activeCategory, setActiveCategory] = useState('General');
    
    const toggleFAQ = (id) => {
        setOpenId(openId === id ? null : id);
    };
    
    return (
        <section className="faq-container-page">
    
        <div className="faq-content-col-page">

            <div className='faq-button-sec'>
                {categories.map((cat) => (
                    <button
                        key={cat}
                        className={`faq-cat-btn ${activeCategory === cat ? 'faq-cat-active' : ''}`}
                        onClick={() => setActiveCategory(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>
    
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
    
        </div>
        </section>
    ); 
}