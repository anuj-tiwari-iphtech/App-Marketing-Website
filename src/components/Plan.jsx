import { useState } from 'react';
import './plan.css';

const pricingPlans = [
  {
    id: 'starter',
    name: 'Starter',
    tagline: 'Esse magna sunt pariatur culpa quis',
    priceMonthly: 'Free',
    priceAnnually: 'Free',
    buttonText: 'Join for free',
    buttonVariant: 'outlined',
    recommended: false,
    headerTheme: 'light',
    features: [
      'Anim magna proident',
      'Voluptate labore fugiat amet',
      'Cillum dolore sit cillum',
      'Veniam aute mollit veniam',
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    tagline: 'Esse magna sunt pariatur culpa quis',
    priceMonthly: '$60',
    priceAnnually: '$50',
    period: 'per Month',
    buttonText: 'Get Pro',
    buttonVariant: 'filled',
    recommended: true,
    headerTheme: 'blue',
    features: [
      'Anim magna proident',
      'Voluptate labore fugiat amet',
      'Cillum dolore sit cillum',
      'Veniam aute mollit veniam',
    ],
  },
  {
    id: 'premium',
    name: 'Premium',
    tagline: 'Esse magna sunt pariatur culpa quis',
    priceMonthly: '$100',
    priceAnnually: '$85',
    period: 'per Month',
    buttonText: 'Get Premium',
    buttonVariant: 'outlined',
    recommended: false,
    headerTheme: 'light',
    features: [
      'Anim magna proident',
      'Voluptate labore fugiat amet',
      'Cillum dolore sit cillum',
      'Veniam aute mollit veniam',
    ],
  },
];

export default function Plan() {
  const [billingCycle, setBillingCycle] = useState('monthly');

  return (
    <section className="plan-section">
      <div className="plan-container">
        
        {/* Header and Toggle Button */}
        <div className="plan-header">
          <h2 className="plan-main-title">Choose your plan</h2>
          <div className="plan-toggle-container">
            <button
              className={`plan-toggle-btn ${billingCycle === 'monthly' ? 'plan-toggle-active' : ''}`}
              onClick={() => setBillingCycle('monthly')}
            >
              Monthly
            </button>
            <button
              className={`plan-toggle-btn ${billingCycle === 'annually' ? 'plan-toggle-active' : ''}`}
              onClick={() => setBillingCycle('annually')}
            >
              Annually
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="plan-grid">
          {pricingPlans.map((plan) => {
            const price =
              billingCycle === 'monthly'
                ? plan.priceMonthly
                : plan.priceAnnually;

            return (
              <div key={plan.id} className="plan-card">
                {/* Colored Top Header */}
                <div className={`plan-card-header plan-header-${plan.headerTheme}`}>
                  <div className="plan-card-header-top">
                    <h3 className="plan-title">{plan.name}</h3>
                    {plan.recommended && (
                      <span className="plan-badge-recommended">Recommended</span>
                    )}
                  </div>
                  <p className="plan-tagline">{plan.tagline}</p>
                </div>

                {/* Card Body */}
                <div className="plan-card-body">
                  <div className="plan-price-container">
                    <span className="plan-price-value">{price}</span>
                    {plan.period && (
                      <span className="plan-price-period">{plan.period}</span>
                    )}
                  </div>

                  <button className={`plan-btn plan-btn-${plan.buttonVariant}`}>
                    {plan.buttonText}
                  </button>

                  <div className="plan-features-container">
                    <p className="plan-features-label">Features</p>
                    <ul className="plan-features-list">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="plan-feature-item">
                          <svg
                            className="plan-check-icon"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}