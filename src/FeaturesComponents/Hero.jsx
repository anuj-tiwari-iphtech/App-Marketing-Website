import heroimg from '../assets/Feature/header.png'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero-section">

      <div className="hero-container">
        <div className="hero-text-content">
          <p className="hero-label">Officia esse deserunt magna</p>
          <h1 className="hero-heading">
            Feature name <br />
            goes here
          </h1>
          <p className="hero-body-text">
            Occaecat est ipsum reprehenderit reprehenderit <br />
            veniam anim laborium est esse duis occaecat <br />
            reprehenderit pariatur.
          </p>
          <div className="hero-btn-group">
            <button className="btn btn-primary" onClick={() => {}}>
              Request demo
            </button>
            <button className="btn btn-secondary" onClick={() => {}}>
              Learn more
            </button>
          </div>
        </div>

        <div className="hero-image-content-feature">

        <div className="hero-arch-bg"></div>

            <div className="hero-feature-img">
            <img src={heroimg} alt="Hero feature preview" />
            </div>

          <div className="card card-white card-shadow">
            <p className="data-label">Data label</p>
            <p className="data-value">$230</p>
            <p className="data-percent text-purple">▲ 5.39%</p>
            <div className="bar-chart-visual">
              <div className="bar bar-purple-1"></div>
              <div className="bar bar-yellow-1"></div>
              <div className="bar bar-purple-10"></div>
              <div className="bar bar-purple-2"></div>
              <div className="bar bar-yellow-2"></div>
              <div className="bar bar-purple-10"></div>
              <div className="bar bar-purple-3"></div>
              <div className="bar bar-yellow-3"></div>
              <div className="bar bar-purple-10"></div>
              <div className="bar bar-purple-3"></div>
              <div className="bar bar-yellow-3"></div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}