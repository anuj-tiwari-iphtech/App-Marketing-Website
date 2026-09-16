import Navbar from '../components/navbar'
import Footer from '../components/footer'
import './Terms.css'

export default function TermsPage() {
  return (
    <>
    <Navbar/>
    <div className="terms-page">
      <div className="terms-container">
        <h1>Terms & Conditions</h1>
        <p className="terms-updated">Last updated: September 16, 2026</p>

        <section className="terms-section">
          <h2>1. Introduction</h2>
          <p>
            Welcome to our website. By accessing or using this website, you agree to be
            bound by these Terms & Conditions. If you do not agree with any part of these
            terms, please do not use our services.
          </p>
        </section>

        <section className="terms-section">
          <h2>2. Use of Service</h2>
          <p>
            You agree to use this website only for lawful purposes and in a way that does
            not infringe the rights of, restrict, or inhibit anyone else's use of the site.
          </p>
        </section>

        <section className="terms-section">
          <h2>3. Account Responsibilities</h2>
          <p>
            If you create an account with us, you are responsible for maintaining the
            confidentiality of your login information and for all activities that occur
            under your account.
          </p>
        </section>

        <section className="terms-section">
          <h2>4. Intellectual Property</h2>
          <p>
            All content on this site — including text, graphics, logos, and images — is
            the property of the company or its content suppliers and is protected by
            applicable intellectual property laws.
          </p>
        </section>

        <section className="terms-section">
          <h2>5. Limitation of Liability</h2>
          <p>
            We are not liable for any damages arising from the use or inability to use our
            services, including but not limited to direct, indirect, incidental, or
            consequential damages.
          </p>
        </section>

        <section className="terms-section">
          <h2>6. Changes to These Terms</h2>
          <p>
            We reserve the right to update or modify these Terms at any time without prior
            notice. Continued use of the website after changes constitutes acceptance of
            the revised terms.
          </p>
        </section>

        <section className="terms-section">
          <h2>7. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at{' '}
            <a href="mailto:template@email.com">template@email.com</a>.
          </p>
        </section>
      </div>
    </div>
    <Footer/>
    </>
  )
}