import React from 'react';
import './Privacy.css';

export default function Privacy() {
  return (
    <section className="privacy-section">
      <div className="privacy-container">
        
        {/* Page Header */}
        <div className="privacy-header">
          <h1 className="privacy-title">Privacy Policy</h1>
          <p className="privacy-subtitle">Last updated: September 8, 2026</p>
        </div>

        {/* Content Body */}
        <div className="privacy-content">
          <div className="privacy-block">
            <h2>1. Introduction</h2>
            <p>
              Welcome to our website. We respect your privacy and are committed to protecting your personal data. 
              This privacy policy explains how we collect, use, and safeguard your information when you visit 
              and interact with our platform.
            </p>
          </div>

          <div className="privacy-block">
            <h2>2. Information We Collect</h2>
            <p>We may collect information about you in a variety of ways, including:</p>
            <ul>
              <li><strong>Personal Data:</strong> Name, email address, and contact details provided when requesting a demo or contacting us.</li>
              <li><strong>Usage Data:</strong> Pages viewed, time spent on the platform, browser type, and device information automatically collected during your visit.</li>
            </ul>
          </div>

          <div className="privacy-block">
            <h2>3. How We Use Your Information</h2>
            <p>The information we collect is used to:</p>
            <ul>
              <li>Provide, operate, and maintain our platform features.</li>
              <li>Improve, personalize, and expand website performance and functionality.</li>
              <li>Respond to inquiries, demo requests, and customer support needs.</li>
              <li>Monitor trends and protect against fraudulent or unauthorized activity.</li>
            </ul>
          </div>

          <div className="privacy-block">
            <h2>4. Data Protection & Security</h2>
            <p>
              We implement industry-standard administrative, technical, and physical security measures to 
              keep your personal data safe. However, please remember that no method of transmission over the internet 
              or electronic storage is 100% secure.
            </p>
          </div>

          <div className="privacy-block">
            <h2>5. Your Data Rights</h2>
            <p>
              Depending on your location, you may have rights regarding your personal information, such as requesting 
              access, correction, or deletion of the data we hold about you.
            </p>
          </div>

          <div className="privacy-block">
            <h2>6. Contact Us</h2>
            <p>
              If you have any questions or concerns regarding this Privacy Policy, please reach out to us at{' '}
              <a href="mailto:support@example.com" className="privacy-link">
                support@example.com
              </a>.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}