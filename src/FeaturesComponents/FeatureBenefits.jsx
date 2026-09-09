import './featureBenefits.css'
import chartBarIcon from '../assets/Feature/phosphor-ChartBar-Outlined.svg';

export default function FeatureCards() {
  return (
    <section className="feature-cards-section">
      <div className="feature-cards-container">
        
        <div className="feature-card card-blue">
          <h2 className="feature-card-heading">Feature benefits</h2>
          <p className="feature-card-description">
            Occaecat culpa non culpa est eu sint deserunt elit esse dolor ea
            dolore ea. Sint proident adipisicing labore consectetur qui ea. Anim
            et deserunt laborum excepteur eiusmod eu commodo est aliqua.
            Aliquip cupidatat consectetur ex nulla
          </p>
          <ul className="feature-list">
            <li className="feature-list-item">
              <span className="dash">—</span>
              <span>Magna non incididunt fugiat nulla ad ad</span>
            </li>
            <li className="feature-list-item">
              <span className="dash">—</span>
              <span>Ad dolore ad irure voluptate excepteur elit</span>
            </li>
            <li className="feature-list-item">
              <span className="dash">—</span>
              <span>Cillum nisi magna commodo exercitation</span>
            </li>
          </ul>
        </div>

        <div className="feature-card card-yellow-1">
          <h2 className="feature-card-heading">Feature benefits</h2>
          <p className="feature-card-description">
            Duis enim et commodo nulla reprehenderit reprehenderit in dolor
            culpa ad exercitation voluptate. Proident ullamco adipisicing
            occaecat adipisicing in reprehenderit aliqua minim qui est nisi
            reprehenderit in aliquip minim
          </p>
          <div className="stats-group">
            <div className="stat-item">
              <div className="stat-label-feat">
              <img 
                  src={chartBarIcon} 
                  alt="Chart Bar" 
                  className="stat-icon" 
                />
                <span>Sunt non nostrud</span>
              </div>
              <p className="stat-value-feat">+25 %</p>
            </div>

            <div className="stat-item">
              <div className="stat-label-feat">
                <svg
                  className="stat-icon"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  ></path>
                </svg>
                <span>Aliquip mollit offi</span>
              </div>
              <p className="stat-value-feat">125</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}