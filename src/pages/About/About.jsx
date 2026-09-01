import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../../components/SEOHead/SEOHead';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import './About.css';

const values = [
  {
    icon: 'bi-bullseye',
    title: 'Business-First Thinking',
    desc: 'We start with your business goals — not templates. Every decision is made to support your specific objectives and audience.',
  },
  {
    icon: 'bi-brush',
    title: 'Conversion-Focused Design',
    desc: 'Beautiful design is only half the equation. We design every element to guide visitors toward meaningful actions.',
  },
  {
    icon: 'bi-lightning-charge',
    title: 'Performance Engineering',
    desc: 'Speed matters. We optimise for Core Web Vitals and ensure fast, smooth experiences across all devices and connections.',
  },
  {
    icon: 'bi-phone',
    title: 'Responsive Development',
    desc: 'Your website must work perfectly on every device. We test across all breakpoints from 320px to 1920px and beyond.',
  },
  {
    icon: 'bi-search',
    title: 'SEO Foundations',
    desc: 'Semantic HTML, structured data, meta tags, and clean architecture give your site the best chance of being found.',
  },
  {
    icon: 'bi-code-square',
    title: 'Clean, Maintainable Code',
    desc: 'Well-structured, documented code that\'s easy to update, extend, and scale as your business evolves.',
  },
];

export default function About() {
  return (
    <>
      <SEOHead
        title="About ARWEBX | Freelance Web Developer"
        description="ARWEBX is a freelance web development studio focused on building fast, modern, conversion-focused websites and applications for growing businesses."
        canonical="https://arwebx.in/about"
      />

      {/* Story Section */}
      <section className="about-story" aria-label="Our approach">
        <div className="container-fluid px-3 px-md-5">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="about-story-content">
                <h2 className="about-story-title">Our Approach</h2>
                <p>
                  At ARWEBX, we believe that a great website is more than just good looks. It's a 
                  strategic tool that builds trust, communicates value, and drives real business results.
                </p>
                <p>
                  Every project starts with understanding — your business, your audience, your goals, 
                  and your competition. This foundation allows us to make design and development 
                  decisions that are informed by strategy, not assumptions.
                </p>
                <p>
                  We combine modern UX principles, performance engineering, and clean code practices 
                  to deliver websites that load fast, look premium, and convert visitors into 
                  enquiries. Whether it's a multi-page business website, a high-conversion landing 
                  page, or a custom React application — the approach is always the same: understand 
                  first, then build with purpose.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="about-values" aria-label="Our values">
        <div className="container-fluid px-3 px-md-5">
          <SectionHeading
            title="Our Core Principles"
            align="start"
          />
          <div className="row g-4">
            {values.map((value, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <div className="about-value-card">
                  <div className="about-value-icon">
                    <i className={`bi ${value.icon}`} aria-hidden="true"></i>
                  </div>
                  <h3 className="about-value-title">{value.title}</h3>
                  <p className="about-value-desc">{value.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta" aria-label="Get in touch">
        <div className="container-fluid px-3 px-md-5 text-center">
          <h2 className="about-cta-title">Let's work together</h2>
          <p className="about-cta-desc">
            Have a project in mind? Let's discuss how ARWEBX can help you build a website that works.
          </p>
          <Link to="/contact" className="btn btn-primary btn-lg about-cta-btn">
            Start a Conversation
            <i className="bi bi-arrow-right ms-2" aria-hidden="true"></i>
          </Link>
        </div>
      </section>
    </>
  );
}
