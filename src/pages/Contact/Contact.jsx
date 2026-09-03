import React from 'react';
import SEOHead from '../../components/SEOHead/SEOHead';
import ContactForm from '../../components/ContactForm/ContactForm';
import './Contact.css';

export default function Contact() {
  return (
    <>
      <SEOHead
        title="Contact ARWEBX | Freelance Website Creator in Ongole & Hyderabad"
        description="Hire the best freelancer in Ongole, Hyderabad & Andhra Pradesh. Contact ARWEBX today for custom website creation and web development."
        keywords="freelancer in ongole, freelancer in hyderabad, freelancer in andhrapradesh, websites creator, contact website creator"
        canonical="https://arwebx.vercel.app/contact"
      />

      {/* Contact Body */}
      <section className="contact-body" aria-label="Contact form and details">
        <div className="container-fluid px-3 px-md-5">
          <div className="row g-5">
            {/* Form Column */}
            <div className="col-lg-7">
              <div className="contact-form-card reveal-up">
                <h2 className="contact-form-title">Project Enquiry</h2>
                <p className="contact-form-desc">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
                <ContactForm />
              </div>
            </div>

            {/* Info Column */}
            <div className="col-lg-5">
              <div className="contact-info-card reveal-up">
                <h3 className="contact-info-title">Direct Contact</h3>
                <p className="contact-info-desc">
                  Prefer to reach out directly? Contact us through WhatsApp or give us a call.
                </p>

                <div className="contact-info-methods">
                  <a
                    href="https://wa.me/918332837703"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-method"
                    aria-label="Chat with ARWEBX on WhatsApp"
                  >
                    <div className="contact-method-icon whatsapp">
                      <i className="bi bi-whatsapp" aria-hidden="true"></i>
                    </div>
                    <div>
                      <strong>WhatsApp</strong>
                      <span>8332837703</span>
                    </div>
                  </a>

                  <a
                    href="tel:+918332837703"
                    className="contact-method"
                    aria-label="Call ARWEBX"
                  >
                    <div className="contact-method-icon call">
                      <i className="bi bi-telephone-fill" aria-hidden="true"></i>
                    </div>
                    <div>
                      <strong>Call</strong>
                      <span>8332837703</span>
                    </div>
                  </a>
                </div>

                {/* Response Time */}
                <div className="contact-response">
                  <i className="bi bi-clock" aria-hidden="true"></i>
                  <p>We typically respond within a few hours during business days.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
