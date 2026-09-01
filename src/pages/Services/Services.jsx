import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../../components/SEOHead/SEOHead';
import { services } from '../../data/services';
import './Services.css';

export default function Services() {
  return (
    <>
      <SEOHead
        title="Web Development Services | ARWEBX"
        description="Professional web development services including business websites, landing pages, and custom React web applications. Built for performance and conversions."
        canonical="https://arwebx.in/services"
      />

      {/* Detailed Services */}
      {services.map((service, index) => (
        <section
          className={`service-detail ${index % 2 === 0 ? 'bg-surface' : ''}`}
          key={service.id}
          aria-labelledby={`service-${service.id}`}
        >
          <div className="container">
            <div className="row align-items-center g-5">
              <div className={`col-lg-6 ${index % 2 !== 0 ? 'order-lg-2' : ''}`}>
                <div className="service-detail-visual">
                  {service.image ? (
                    <div className="service-image-card">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="service-detail-img"
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <div className="service-visual-mockup">
                      <i className={`bi ${service.icon}`} aria-hidden="true"></i>
                    </div>
                  )}
                </div>
              </div>
              <div className="col-lg-6">
                <span className="service-detail-label">{String(index + 1).padStart(2, '0')}</span>
                <h2 className="service-detail-title" id={`service-${service.id}`}>
                  {service.title}
                </h2>
                <p className="service-detail-desc">{service.description}</p>
                <ul className="service-detail-features">
                  {service.features.map((feature, i) => (
                    <li key={i}>
                      <i className="bi bi-check-circle-fill" aria-hidden="true"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="services-cta" aria-label="Get started">
        <div className="container text-center">
          <h2 className="services-cta-title">Ready to get started?</h2>
          <p className="services-cta-desc">
            Tell us about your project and we'll help you find the right solution.
          </p>
          <Link to="/contact" className="btn btn-primary btn-lg services-cta-btn">
            Discuss Your Project
            <i className="bi bi-arrow-right ms-2" aria-hidden="true"></i>
          </Link>
        </div>
      </section>
    </>
  );
}
