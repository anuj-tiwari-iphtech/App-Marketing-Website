import left from '../assets/Dashboard/feedback/left.png'
import right from '../assets/Dashboard/feedback/right.png'
import ele from '../assets/Dashboard/feedback/cardele.png'
import { FaStar ,FaQuoteRight} from "react-icons/fa";
import avatar1 from '../assets/Dashboard/feedback/A1.jpg'
import avatar2 from '../assets/Dashboard/feedback/D1.jpg'
import avatar3 from '../assets/Dashboard/feedback/J1.jpg'
import { useRef, useState, useEffect, useCallback } from 'react';
import './feedbacks.css'

const feedbacks = [
    {
      id: 1,
      stars: 4,
      quote: "Labore et enim aute duis exercitation officia irure laboris est pariatur",
      name: "Tempor labori",
      title: "Tempor esse aute magna",
      avatar: avatar2
    },
    {
      id: 2,
      stars: 5,
      quote: "Labore et enim aute duis exercitation officia irure laboris est pariatur",
      name: "Tempor labori",
      title: "Tempor esse aute magna",
      avatar: avatar1
    },
    {
      id: 3,
      stars: 4,
      quote: "Labore et enim aute duis exercitation officia irure laboris est pariatur",
      name: "Tempor labori",
      title: "Tempor esse aute magna",
      avatar: avatar3
    }
  ];

export default function Feedbacks() {
  const containerRef = useRef(null);
  const cardRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const updateActiveCard = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const containerCenter = container.scrollLeft + container.clientWidth / 2;

    let closestIndex = 0;
    let closestDistance = Infinity;

    cardRefs.current.forEach((card, index) => {
      if (!card) return;
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const distance = Math.abs(cardCenter - containerCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateActiveCard();
          ticking = false;
        });
        ticking = true;
      }
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    // Set initial active card on mount
    updateActiveCard();

    return () => container.removeEventListener('scroll', handleScroll);
  }, [updateActiveCard]);

  const scrollToCard = (index) => {
    const card = cardRefs.current[index];
    const container = containerRef.current;
    if (!card || !container) return;

    const cardCenter = card.offsetLeft + card.offsetWidth / 2;
    const targetScroll = cardCenter - container.clientWidth / 2;

    container.scrollTo({ left: targetScroll, behavior: 'smooth' });
  };

  return (
    <>
      <div className='feedback-container'>
        <div className="feeback-component">
            <div className="feedback-ele">
                <p>
                Officia esse deserunt magna
                </p>
                <h1>
                Customer feedbacks
                </h1>
                <img src={left} className='left-side' alt='lwft-svg'/>
                <img src={right} className='right-side' alt='right-svg'/>
            </div>

            <div className="cards-container" ref={containerRef}>
                
                {feedbacks.map((item, index) => (
                <div
                    key={item.id}
                    className="testimonial-card"
                    ref={(el) => (cardRefs.current[index] = el)}
                >
                    <img src={ele} className="quote-watermark" />
                    <div className="card-top-row">
                        <div className="star-rating">
                            {[...Array(5)].map((_, i) => (
                            <FaStar
                                key={i}
                                className={i < item.stars ? "star filled" : "star empty"}
                            />
                            ))}
                        </div>
                    </div>
                    
                    <p className="card-quote-text">{item.quote}</p>

                    <div className="card-author-info">
                    <img src={item.avatar} alt={item.name} className="author-avatar" />
                    <div className="author-details">
                        <span className="author-name">{item.name}</span>
                        <span className="author-title">{item.title}</span>
                    </div>
                    </div>
                </div>
                ))}
            </div>

            <div className="carousel-dots">
                {feedbacks.map((item, index) => (
                    <span
                        key={item.id}
                        className={`dot ${index === activeIndex ? 'active' : ''}`}
                        onClick={() => scrollToCard(index)}
                    ></span>
                ))}
            </div>
        </div>
        </div>
    </>
  )
}