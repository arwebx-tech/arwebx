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
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const validate = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required.';
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required.';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required.';
    } else if (!/^[\d\s\-+()]{7,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number.';
    }
    if (!formData.service) {
      newErrors.service = 'Please select a service.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');

    // Build WhatsApp message from form data
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

    // Small delay for UX feedback, then redirect
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
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="row g-3">
        {/* First Name */}
        <div className="col-md-6">
          <label htmlFor="firstName" className="form-label">
            First Name <span className="text-danger" aria-hidden="true">*</span>
          </label>
          <input
            type="text"
            className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Your first name"
            required
            aria-required="true"
            aria-describedby={errors.firstName ? 'firstNameError' : undefined}
          />
          {errors.firstName && (
            <div className="invalid-feedback" id="firstNameError" role="alert">
              {errors.firstName}
            </div>
          )}
        </div>

        {/* Last Name */}
        <div className="col-md-6">
          <label htmlFor="lastName" className="form-label">
            Last Name <span className="text-danger" aria-hidden="true">*</span>
          </label>
          <input
            type="text"
            className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Your last name"
            required
            aria-required="true"
            aria-describedby={errors.lastName ? 'lastNameError' : undefined}
          />
          {errors.lastName && (
            <div className="invalid-feedback" id="lastNameError" role="alert">
              {errors.lastName}
            </div>
          )}
        </div>

        {/* Phone */}
        <div className="col-md-6">
          <label htmlFor="phone" className="form-label">
            Phone Number <span className="text-danger" aria-hidden="true">*</span>
          </label>
          <input
            type="tel"
            className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your phone number"
            required
            aria-required="true"
            aria-describedby={errors.phone ? 'phoneError' : undefined}
          />
          {errors.phone && (
            <div className="invalid-feedback" id="phoneError" role="alert">
              {errors.phone}
            </div>
          )}
        </div>

        {/* Service */}
        <div className="col-md-6">
          <label htmlFor="service" className="form-label">
            Service <span className="text-danger" aria-hidden="true">*</span>
          </label>
          <select
            className={`form-select ${errors.service ? 'is-invalid' : ''}`}
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            aria-required="true"
            aria-describedby={errors.service ? 'serviceError' : undefined}
          >
            <option value="" disabled>Select a service</option>
            {SERVICE_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
          {errors.service && (
            <div className="invalid-feedback" id="serviceError" role="alert">
              {errors.service}
            </div>
          )}
        </div>

        {/* Message */}
        <div className="col-12">
          <label htmlFor="message" className="form-label">
            Message <span className="text-danger" aria-hidden="true">*</span>
          </label>
          <textarea
            className={`form-control ${errors.message ? 'is-invalid' : ''}`}
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            placeholder="Tell us about your project..."
            required
            aria-required="true"
            aria-describedby={errors.message ? 'messageError' : undefined}
          ></textarea>
          {errors.message && (
            <div className="invalid-feedback" id="messageError" role="alert">
              {errors.message}
            </div>
          )}
        </div>

        {/* Error State */}
        {status === 'error' && (
          <div className="col-12">
            <div className="alert alert-danger" role="alert">
              <i className="bi bi-exclamation-triangle me-2" aria-hidden="true"></i>
              Something went wrong. Please try again or contact us directly.
            </div>
          </div>
        )}

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
