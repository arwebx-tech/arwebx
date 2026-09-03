import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './QuoteModal.css';

export default function QuoteModal() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Business Website',
    details: '',
  });

  useEffect(() => {
    // Only enable 40% scroll trigger on Home page ('/')
    if (location.pathname !== '/') return;

    let triggered = false;

    const handleScroll = () => {
      if (triggered) return;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight <= 0) return;

      const scrollPercent = (window.scrollY / scrollHeight) * 100;
      if (scrollPercent >= 40) {
        triggered = true;
        setIsOpen(true);
        window.removeEventListener('scroll', handleScroll);
      }
    };

    // 400ms delay so browser scroll restoration on refresh doesn't trigger instant popup
    const timer = setTimeout(() => {
      window.addEventListener('scroll', handleScroll, { passive: true });
    }, 400);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    const text = `Hi ARWEBX! I would like to get a Free Quote.\n\n👤 Name: ${formData.name}\n📞 Phone: ${formData.phone}\n💼 Service: ${formData.service}${formData.details ? `\n📝 Details: ${formData.details}` : ''}`;
    const whatsappUrl = `https://wa.me/918332837703?text=${encodeURIComponent(text)}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    handleClose();
  };

  if (!isOpen || location.pathname !== '/') return null;

  return (
    <div className="quote-modal-backdrop" onClick={handleClose} aria-modal="true" role="dialog">
      <div className="quote-modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="quote-modal-close" onClick={handleClose} aria-label="Close quote modal">
          <i className="bi bi-x-lg" aria-hidden="true"></i>
        </button>

        <div className="quote-modal-header">
          <h2 className="quote-modal-title">Get a Free Quote</h2>
          <p className="quote-modal-subtitle">
            Tell us about your project and get a custom estimate within 24 hours.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="quote-modal-form">
          <div className="mb-3">
            <input
              type="text"
              name="name"
              className="form-control quote-input"
              placeholder="Your Name *"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="tel"
              name="phone"
              className="form-control quote-input"
              placeholder="Phone / WhatsApp Number *"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <select
              name="service"
              className="form-select quote-input"
              value={formData.service}
              onChange={handleChange}
            >
              <option value="Business Website">Business Website</option>
              <option value="Landing Page">Landing Page</option>
              <option value="Clinic Website">Clinic Website</option>
              <option value="Packers & Movers Website">Packers & Movers Website</option>
              <option value="Restaurant Website">Restaurant Website</option>
              <option value="Custom Web App">Custom Web Application</option>
            </select>
          </div>

          <button type="submit" className="btn btn-quote-submit w-100">
            Get Free Quote
            <i className="bi bi-arrow-right ms-2" aria-hidden="true"></i>
          </button>
        </form>
      </div>
    </div>
  );
}
