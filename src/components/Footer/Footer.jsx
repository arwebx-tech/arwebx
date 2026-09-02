import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo/logo.png';
import './Footer.css';

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="arwebx-footer" role="contentinfo">
      <div className="container-fluid px-3 px-md-5">
        <div className="row g-4 g-lg-5">
          {/* Brand Column */}
          <div className="col-lg-4 col-md-6">
            <Link to="/" className="footer-brand">
              <img src={logoImg} alt="ARWEBX Logo" className="footer-logo-img" loading="lazy" />
            </Link>
            <p className="footer-desc">
              We design and build fast, modern websites that help businesses build 
              trust, attract the right visitors, and turn more traffic into real enquiries.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6">
            <h3 className="footer-heading">Pages</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-lg-3 col-md-6">
            <h3 className="footer-heading">Services</h3>
            <ul className="footer-links">
              <li><Link to="/services">Business Websites</Link></li>
              <li><Link to="/services">Landing Pages</Link></li>
              <li><Link to="/services">Custom Web Apps</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-lg-3 col-md-6">
            <h3 className="footer-heading">Get in Touch</h3>
            <ul className="footer-links footer-contact-links">
              <li>
                <a
                  href="https://wa.me/918332837703"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Contact ARWEBX on WhatsApp"
                >
                  <i className="bi bi-whatsapp" aria-hidden="true"></i>
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="tel:+918332837703" aria-label="Call ARWEBX">
                  <i className="bi bi-telephone" aria-hidden="true"></i>
                  Call Now
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
          <p>&copy; {currentYear} ARWEBX. All rights reserved.</p>
          <div className="footer-legal-links">
            <Link to="/agreement">Project Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
