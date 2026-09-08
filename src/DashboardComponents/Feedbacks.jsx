import left from '../assets/Dashboard/feedback/left.png'
import right from '../assets/Dashboard/feedback/right.png'
import ele from '../assets/Dashboard/feedback/cardele.png'
import { FaStar ,FaQuoteRight} from "react-icons/fa";
import avatar1 from '../assets/Dashboard/feedback/A1.jpg'
import './feedbacks.css'

const feedbacks = [
    {
      id: 1,
      stars: 4,
      quote: "Labore et enim aute duis exercitation officia irure laboris est pariatur",
      name: "Tempor labori",
      title: "Tempor esse aute magna",
      avatar: avatar1
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
      avatar: avatar1
    }
  ];

export default function Feedbacks() {
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

            <div className="cards-container">
                
                {feedbacks.map((item) => (
                <div key={item.id} className="testimonial-card">
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
                <span className="dot active"></span>
                <span className="dot"></span>
                <span className="dot"></span>
            </div>
        </div>
        </div>
    </>
  )
}