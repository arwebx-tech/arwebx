import React from 'react';
import './FloatingActions.css';

export default function FloatingActions() {
  return (
    <div className="floating-actions" role="complementary" aria-label="Quick contact">
      <a
        href="tel:+918332837703"
        className="floating-btn floating-call"
        aria-label="Call ARWEBX at 8332837703"
      >
        <span className="floating-tooltip">Call Now🤙 </span>
        <i className="bi bi-telephone-fill" aria-hidden="true"></i>
      </a>
      <a
        href="https://wa.me/918332837703"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn floating-whatsapp"
        aria-label="Chat with ARWEBX on WhatsApp"
      >
        <span className="floating-tooltip">Chat on WhatsApp👋</span>
        <i className="bi bi-whatsapp" aria-hidden="true"></i>
      </a>
    </div>
  );
}
