import React from 'react';
import './Header.css';

import phone2Img from '../assets/Dashboard/phone1.png';
import phone1Img from '../assets/Dashboard/phone2.png';

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="bg-ring ring-1"></div>
      <div className="bg-ring ring-2"></div>

      <div className="hero-container">
        <div className="hero-text-content">
          <p className="hero-label">Officia esse deserunt magna</p>
          <h1 className="hero-heading">
            Website heading <br />
            goes here
          </h1>
          <p className="hero-body-text">
            Occaecat est ipsum reprehenderit reprehenderit <br />
            veniam anim laborium est esse duis occaecat <br />
            reprehenderit pariatur.
          </p>
          <div className="hero-btn-group">
            <button className="btn btn-primary" onClick={() => {}}>
              Get Started
            </button>
            <button className="btn btn-secondary" onClick={() => {}}>
              Learn more
            </button>
          </div>
        </div>

        <div className="hero-image-content">
          <div className="card card-yellow card-shadow">
            <img src={phone1Img} alt="Phone app UI" className="card-image" />
          </div>

          <div className="card card-green card-shadow">
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
            </div>
          </div>

          <div className="card card-progress card-shadow">
            <div className="card-header">
              <span className="progress-title">Monthly Sales</span>
              <span className="three-dots">•••</span>
            </div>
            
            <div className="progress-ring-container">
              <div className="progress-arc">
                <span className="progress-center-text">Progress</span>
              </div>
            </div>

            <div className="progress-stats">
              <div className="stat-group">
                <p className="stat-label">Completed</p>
                <p className="stat-value">72%</p>
              </div>
              <div className="stat-group">
                <p className="stat-label">In Progress</p>
                <p className="stat-value">28%</p>
              </div>
            </div>
          </div>

          <div className="card card-pink card-shadow">
            <img src={phone2Img} alt="Phone app timer UI" className="card-image" />
          </div>
        </div>
      </div>
    </section>
  );
}