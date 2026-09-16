import Navbar from '../components/navbar';
import img1 from '../assets/FAQ.jpg'
import img2 from '../assets/map.jpg'
import Footer from '../components/footer';
import './CaseStudies.css'

const caseStudies = [
  {
    id: 1,
    theme: 'light',
    tag: 'Google Ads',
    title: 'ROAS Up to 12 for a Monaco Supplement Brand',
    description:
      "Since 2021, we've scaled Google Ads into a top revenue channel. It now plays a central role in driving the brand's online growth.",
    image: img1,
  },
  {
    id: 2,
    theme: 'dark',
    tag: 'Instagram Ads',
    title: '+74% Orders & ROAS Up to 23 for a French Luxury Kidswear Brand',
    description:
      "We boosted LOIR Paris's sales and brand awareness through targeted Meta Ads campaigns focused on both awareness and conversions. The results speak for themselves: strong growth and high Instagram engagement.",
    image: img2,
  },
];

export default function CaseStudies() {
  return (
    <>
    <Navbar/>
    <section className="case-studies-section">
      <div className="case-studies-header">
        <h1>Case studies</h1>
        <p>
          Explore how Infini Digital drives growth and maximizes ROI with
          smart, data-backed campaigns for brands across diverse industries.
          Real numbers, real impact, real success.
        </p>
      </div>

      <div className="case-studies-list">
        {caseStudies.map((study) => (
          <div key={study.id} className={`case-card case-card-${study.theme}`}>
            <div className="case-card-text">
              <h2>{study.title}</h2>
              <span className="case-tag">{study.tag}</span>
              <p>{study.description}</p>
              <div className="case-arrow">↗</div>
            </div>
            <div className="case-card-img">
              <img src={study.image} alt={study.title} />
            </div>
          </div>
        ))}
      </div>
    </section>
    <Footer/>
    </>
  );
}