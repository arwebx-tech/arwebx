import React from 'react';
import './SectionHeading.css';

export default function SectionHeading({ label, title, subtitle, align = 'center' }) {
  return (
    <div className={`section-heading text-${align}`}>
      {label && <span className="section-label">{label}</span>}
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}
