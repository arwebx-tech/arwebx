import React, { useState } from 'react';
import './ContactForm.css';

const SERVICE_OPTIONS = [
  'Business Website',
  'Landing Page',
  'Custom Web App',
  'Website Redesign',
  'Other',
];

const initialFormState = {
  firstName: '',
  lastName: '',
  phone: '',
  service: '',
  message: '',
};

export default function ContactForm() {
  const [formData, setFormData] = useState(initialFormState);
  const [status, setStatus] = useState('idle'); // idle | loading | success

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');

    const message = [
      `*New Project Enquiry From Arwebx*`,
      ``,
      `*Name:* ${formData.firstName} ${formData.lastName}`,
      `*Phone:* ${formData.phone}`,
      `*Service:* ${formData.service}`,
      ``,
      `*Message:*`,
      formData.message,
    ].join('\n');

    const whatsappUrl = `https://wa.me/918332837703?text=${encodeURIComponent(message)}`;

    setTimeout(() => {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      setStatus('success');
      setFormData(initialFormState);
    }, 500);
  };

  if (status === 'success') {
    return (
      <div className="contact-form-success" role="alert">
        <div className="success-icon">
          <i className="bi bi-check-circle-fill" aria-hidden="true"></i>
        </div>
        <h3>Message Sent!</h3>
        <p>Thanks for reaching out. We'll get back to you shortly.</p>
        <button
          className="btn btn-outline-primary mt-3"
          onClick={() => setStatus('idle')}
          type="button"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="row g-3">
        {/* First Name */}
        <div className="col-md-6">
          <label htmlFor="firstName" className="form-label">
            First Name <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Your first name"
            required
          />
        </div>

        {/* Last Name */}
        <div className="col-md-6">
          <label htmlFor="lastName" className="form-label">
            Last Name <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Your last name"
            required
          />
        </div>

        {/* Phone */}
        <div className="col-md-6">
          <label htmlFor="phone" className="form-label">
            Phone Number <span className="text-danger">*</span>
          </label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your phone number"
            pattern="[\d\s\-+()]{7,15}"
            title="Please enter a valid phone number (7 to 15 digits)"
            required
          />
        </div>

        {/* Service */}
        <div className="col-md-6">
          <label htmlFor="service" className="form-label">
            Service <span className="text-danger">*</span>
          </label>
          <select
            className="form-select"
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select a service</option>
            {SERVICE_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div className="col-12">
          <label htmlFor="message" className="form-label">
            Message <span className="text-danger">*</span>
          </label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            placeholder="Tell us about your project..."
            required
          ></textarea>
        </div>

        {/* Submit */}
        <div className="col-12">
          <button
            type="submit"
            className="btn btn-primary btn-submit"
            disabled={status === 'loading'}
          >
            {status === 'loading' ? (
              <>
                <span className="spinner-border spinner-border-sm me-2" aria-hidden="true"></span>
                Sending...
              </>
            ) : (
              <>
                <i className="bi bi-whatsapp me-2" aria-hidden="true"></i>
                Send Message
              </>
            )}
          </button>
        </div>
      </div>
    </form>
  );
}
