import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../../components/SEOHead/SEOHead';
import Hero from '../../components/Hero/Hero';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import ProcessSteps from '../../components/ProcessSteps/ProcessSteps';
import { services } from '../../data/services';
import './Home.css';

export default function Home() {
  return (
    <>
      <SEOHead
        title="ARWEBX | Modern Websites for Growing Businesses"
        description="ARWEBX builds fast, modern, conversion-focused websites and web applications that help businesses build trust and turn visitors into real enquiries."
        canonical="https://arwebx.in/"
      />

      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <section className="home-services" id="services" aria-labelledby="services-heading">
        <div className="container-fluid px-3 px-md-5">
          <div className="services-section-header">
            <SectionHeading title="Arwebx Can Build" align="start" />
            <Link to="/services" className="btn-show-more">
              View All <i className="bi bi-arrow-right" aria-hidden="true"></i>
            </Link>
          </div>
          <div className="row g-4">
            {services.slice(0, 3).map((service) => (
              <div className="col-md-6 col-lg-4" key={service.id}>
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.shortDesc}
                  features={service.features}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why ARWEBX Section */}
      <section className="home-why" aria-labelledby="why-heading">
        <div className="container-fluid px-3 px-md-5">
          <SectionHeading
            title="Why Choose Arwebx"
            align="start"
          />
          <div className="row g-4">
            {[
              {
                icon: 'bi-lightning-charge',
                title: 'Performance First',
                desc: 'Optimised for Core Web Vitals, fast load times, and smooth interactions on every device.',
              },
              {
                icon: 'bi-bullseye',
                title: 'Conversion-Focused',
                desc: 'Every design decision is made to guide visitors toward meaningful business actions.',
              },
              {
                icon: 'bi-phone',
                title: 'Truly Responsive',
                desc: 'Pixel-perfect layouts from 320px mobile screens to 1920px widescreen monitors.',
              },
              {
                icon: 'bi-search',
                title: 'SEO-Ready',
                desc: 'Semantic HTML, structured data, meta tags, and technical SEO built into every page.',
              },
              {
                icon: 'bi-shield-check',
                title: 'Clean Code',
                desc: "Maintainable, well-structured code that's easy to update and scale as your business grows.",
              },
              {
                icon: 'bi-people',
                title: 'Business Thinking',
                desc: 'We understand your goals first, then design and build solutions that serve them.',
              },
            ].map((item, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <div className="why-card">
                  <div className="why-card-icon">
                    <i className={`bi ${item.icon}`} aria-hidden="true"></i>
                  </div>
                  <h3 className="why-card-title">{item.title}</h3>
                  <p className="why-card-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="home-process" aria-labelledby="process-heading">
        <div className="container-fluid px-3 px-md-5">
          <SectionHeading
            title="How Arwebx Can Work"
            align="start"
          />
          <ProcessSteps />
        </div>
      </section>

      {/* CTA Section */}
      <section className="home-cta" aria-label="Call to action">
        <div className="container">
          <div className="cta-card">
            <h2 className="cta-title">Ready to build something great?</h2>
            <p className="cta-desc">
              Let's discuss your project and see how we can help you turn your website into a growth engine.
            </p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-cta-primary">
                Start Your Project
                <i className="bi bi-arrow-right ms-2" aria-hidden="true"></i>
              </Link>
              <a
                href="https://wa.me/918332837703"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-cta-whatsapp"
              >
                <i className="bi bi-whatsapp me-2" aria-hidden="true"></i>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
