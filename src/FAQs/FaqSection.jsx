import { useState } from 'react';
import { IoChevronDownOutline, IoChevronForwardOutline } from 'react-icons/io5';
import './FaqSection.css'

const categories = ['General', 'Companies', 'Pricing', 'Product'];

const faqData = [
    // General (existing)
    {
      id: 1,
      category: 'General',
      question: "Labore dolore ea ipsum ips ?",
      answer: "Incididunt ex irure ad non Lorem culpa fugiat exercitation ullamco esse minim tempor quis l"
    },
    {
      id: 2,
      category: 'General',
      question: "Sunt ad veniam eu laboris ?",
      answer: "Incididunt ex irure ad non Lorem culpa fugiat exercitation ullamco esse minim tempor quis l"
    },
    {
        id: 18,
        category: 'General',
        question: "Lorem ipsum dolor sit amet consectetur ?",
        answer: "Adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim"
    },
    {
        id: 19,
        category: 'General',
        question: "Ut enim ad minim veniam quis nostrud ?",
        answer: "Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor"
    },
    {
        id: 20,
        category: 'General',
        question: "Duis aute irure dolor in reprehenderit in ?",
        answer: "Voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat"
    },

    // Companies
    {
      id: 3,
      category: 'Companies',
      question: "Velit quis eiusmod laborum ?",
      answer: "Consequat ullamco laborum nisi ut aliquip ex ea commodo consequat duis aute irure dolor"
    },
    {
      id: 4,
      category: 'Companies',
      question: "Duis aute irure dolor in reprehenderit ?",
      answer: "In voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat"
    },
    {
      id: 5,
      category: 'Companies',
      question: "Excepteur sint occaecat cupidatat non ?",
      answer: "Proident sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis"
    },
    {
      id: 6,
      category: 'Companies',
      question: "Sed ut perspiciatis unde omnis iste ?",
      answer: "Natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa"
    },
    {
      id: 7,
      category: 'Companies',
      question: "Quis autem vel eum iure reprehenderit ?",
      answer: "Qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum qui dolorem"
    },

    // Pricing
    {
      id: 8,
      category: 'Pricing',
      question: "Magna irure ex dolore ?",
      answer: "Incididunt ex irure ad non Lorem culpa fugiat exercitation ullamco esse minim tempor quis l"
    },
    {
      id: 9,
      category: 'Pricing',
      question: "Ut enim ad minima veniam quis nostrum ?",
      answer: "Exercitationem ullam corporis suscipit laboriosam nisi ut aliquid ex ea commodi consequatur"
    },
    {
      id: 10,
      category: 'Pricing',
      question: "Quis autem vel eum iure reprehenderit ?",
      answer: "Voluptate velit esse quam nihil molestiae consequatur vel illum qui dolorem eum fugiat"
    },
    {
      id: 11,
      category: 'Pricing',
      question: "Nemo enim ipsam voluptatem quia voluptas ?",
      answer: "Sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores eos qui ratione"
    },
    {
      id: 12,
      category: 'Pricing',
      question: "Neque porro quisquam est qui dolorem ?",
      answer: "Ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi"
    },

    // Product
    {
      id: 13,
      category: 'Product',
      question: "Ut enim ad minima veniam ?",
      answer: "Quis nostrum exercitationem ullam corporis suscipit laboriosam nisi ut aliquid ex ea commodi"
    },
    {
      id: 14,
      category: 'Product',
      question: "Quis autem vel eum iure reprehenderit qui ?",
      answer: "In ea voluptate velit esse quam nihil molestiae consequatur vel illum qui dolorem eum fugiat"
    },
    {
      id: 15,
      category: 'Product',
      question: "At vero eos et accusamus et iusto ?",
      answer: "Odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos"
    },
    {
      id: 16,
      category: 'Product',
      question: "Et harum quidem rerum facilis est ?",
      answer: "Et expedita distinctio nam libero tempore cum soluta nobis est eligendi optio cumque"
    },
    {
      id: 17,
      category: 'Product',
      question: "Temporibus autem quibusdam et aut officiis ?",
      answer: "Debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae"
    },
];

export default function FaqSection() {
    const [openId, setOpenId] = useState(1);
    const [activeCategory, setActiveCategory] = useState('General');

    const toggleFAQ = (id) => {
        setOpenId(openId === id ? null : id);
    };

    const filteredFaqs = faqData.filter((item) => item.category === activeCategory);

    return (
        <section className="faq-container-page">

        <div className="faq-content-col-page">

            <div className='faq-button-sec'>
                {categories.map((cat) => (
                    <button
                        key={cat}
                        className={`faq-cat-btn ${activeCategory === cat ? 'faq-cat-active' : ''}`}
                        onClick={() => {
                            setActiveCategory(cat);
                            setOpenId(null); 
                        }}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="faq-accordion">
            {filteredFaqs.length > 0 ? (
                filteredFaqs.map((item) => {
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
                })
            ) : (
                <p className="faq-empty">No questions in this category yet.</p>
            )}
            </div>

        </div>
        </section>
    ); 
}