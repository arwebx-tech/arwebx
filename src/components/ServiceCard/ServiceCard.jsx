import React from 'react';
import './ServiceCard.css';

export default function ServiceCard({ icon, title, description, features }) {
  return (
    <div className="service-card">
      <div className="service-card-icon">
        <i className={`bi ${icon}`} aria-hidden="true"></i>
      </div>
      <h3 className="service-card-title">{title}</h3>
      <p className="service-card-desc">{description}</p>
      <ul className="service-card-features">
        {features.map((feature, index) => (
          <li key={index}>
            <i className="bi bi-check2" aria-hidden="true"></i>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}
