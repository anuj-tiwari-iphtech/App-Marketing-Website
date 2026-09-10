import { useState } from 'react'
import img1 from '../assets/AboutUs/au1.jpg'
import img2 from '../assets/AboutUs/au2.jpg'
import img3 from '../assets/AboutUs/au3.jpg'
import img4 from '../assets/AboutUs/au4.jpg'

import './WhoWeAre.css'

const listItems = [
    {
      title: 'Commodo dolore aliqua',
      description:
        'Occaecat magna do minim cillum proident sunt exercitation ut nulla sit ad ad do proident proident id tempor',
    },
    {
      title: 'Aute aliqua voluptate elit in nisi',
      description:
        'Deserunt esse do eu occaecat ea ut labore commodo sunt reprehenderit',
    },
    {
      title: 'Irure do ex esse',
      description:
        'Consequat ullamco laborum nisi ut aliquip ex ea commodo consequat',
    },
    {
      title: 'Magna aute culpa do nisi',
      description:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum',
    },
];

export default function WhoWeAre() {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleToggle = (idx) => {
        setActiveIndex(activeIndex === idx ? null : idx);
    }
  return (
    <div className='who-container'>
    <section className='who-section'>
        <div className='who-left'>
            <h2 className='who-heading'>Who we are</h2>
            <div className='who-list'>
                {listItems.map((item, idx) => (
                    <div key={idx}
                        className={`who-list-item ${activeIndex === idx ? 'who-item-active' : ''}`}
                    >
                        <h4 onClick={() => handleToggle(idx)}>{item.title}</h4>
                        <p className='who-item-description'>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>

        <div className='who-right'>
            <div className='who-circle'>
                <img src={img1} alt="team-1" className="who-img who-img-1" />
                <img src={img2} alt="team-2" className="who-img who-img-2" />
                <img src={img3} alt="team-3" className="who-img who-img-3" />
                <img src={img4} alt="team-4" className="who-img who-img-4" />
            </div>
        </div>
    </section>
    </div>
  )
}
